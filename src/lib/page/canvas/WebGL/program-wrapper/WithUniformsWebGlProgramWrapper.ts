import {createProgramFromShaderSourceCodes} from "./creating-shaders-source-code/createProgramFromShaderSourceCodes.ts";
import {createFragmentShaderSourceCode} from "./creating-shaders-source-code/createFragmentShaderSourceCode.ts";
import {createVertexShaderSourceCode} from "./old/createVertexShaderSourceCode.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableNameToVariableType} from "../variable-name-to-variable-type/VariableNameToVariableType.ts";
import type {VariableName} from "./VariableName.ts";
import {setUpBuffer} from "../webgl-wrapper/setUpBuffer.ts";
import {setUpAttributes} from "./setting-up-attributes/setUpAttributes.ts";
import type {variableTypeToVariableSize} from "../variable-type-to-variable-size/variableTypeToVariableSize.ts";
import type {TriangleSerializer} from "./triangle-serializer/TriangleSerializer.ts";
import type {AttributeVariablesComputers} from "./old/AttributeVariablesComputers.ts";
import type {VariableType} from "../variable-type/VariableType.ts";
export class WithUniformsWebGlProgramWrapper<
	UniformVariableName extends VariableName,
	UniformVariableNameToVariableType extends VariableNameToVariableType<UniformVariableName>,
	AttributeVariableName extends VariableName,
	AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
	Triangle,
	Context,
> {
	public static create<
		UniformVariableName extends VariableName,
		UniformVariableNameToVariableType extends VariableNameToVariableType<UniformVariableName>,
		VertexShaderPrecisionToUse extends ShaderPrecision,
		AttributeVariableName extends VariableName,
		AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
		VertexShaderSourceCodeMainContent extends string,
		VaryingVariableName extends VariableName,
		FragmentShaderPrecisionToUse extends ShaderPrecision,
		OutputVariableName extends VariableName,
		OutputVariableNameToVariableType extends VariableNameToVariableType<OutputVariableName>,
		FragmentShaderSourceCodeMainContent extends string,
		Triangle,
	>(
		gl: WebGL2RenderingContext,
		uniformVariableNameToVariableType: UniformVariableNameToVariableType,
		attributeVariableNameToVariableType: AttributeVariableNameToVariableType,
		vertexShaderData: Readonly<{
			precision: VertexShaderPrecisionToUse;
			createSourceCodeMainContent: (
				variables: Readonly<{
					uniforms: Readonly<{
						[CurrentVariableName in Extract<
							keyof UniformVariableNameToVariableType,
							string
						>]: `u_${CurrentVariableName}`;
					}>;
					ins: Readonly<{
						[CurrentVariableName in AttributeVariableName]: `a_${CurrentVariableName}`;
					}>;
					outs: Readonly<{
						[CurrentVariableName in VaryingVariableName]: `v_${CurrentVariableName}`;
					}>;
				}>,
			) => VertexShaderSourceCodeMainContent;
		}>,
		varyingVariableNameToVariableType: VariableNameToVariableType<VaryingVariableName>,
		fragmentShaderData: Readonly<{
			precision: FragmentShaderPrecisionToUse;
			createSourceCodeMainContent: (
				variables: Readonly<{
					uniforms: Readonly<{
						[CurrentVariableName in UniformVariableName]: `u_${CurrentVariableName}`;
					}>;
					ins: Readonly<{
						[CurrentVariableName in VaryingVariableName]: `v_${CurrentVariableName}`;
					}>;
					outs: Readonly<{
						[CurrentVariableName in OutputVariableName]: `o_${CurrentVariableName}`;
					}>;
				}>,
			) => FragmentShaderSourceCodeMainContent;
		}>,
		outputVariableNameToVariableType: OutputVariableNameToVariableType,
		attributeVariablesComputers: AttributeVariablesComputers<
			AttributeVariableName,
			Triangle,
			AttributeVariableNameToVariableType
		>,
	) {
		const vertexShaderSourceCode = createVertexShaderSourceCode(
			vertexShaderData.precision,
			uniformVariableNameToVariableType,
			attributeVariableNameToVariableType,
			varyingVariableNameToVariableType,
			vertexShaderData.createSourceCodeMainContent,
		);
		const fragmentShaderSourceCode = createFragmentShaderSourceCode(
			fragmentShaderData.precision,
			uniformVariableNameToVariableType,
			varyingVariableNameToVariableType,
			outputVariableNameToVariableType,
			fragmentShaderData.createSourceCodeMainContent,
		);
		const program = createProgramFromShaderSourceCodes(
			gl,
			vertexShaderSourceCode,
			fragmentShaderSourceCode,
		);
		setUpBuffer(gl);
		setUpAttributes(attributeVariableNameToVariableType, gl, program);
		const uniformVariableNameToUniformVariableLocation: UniformVariableNameToUniformVariableLocation<UniformVariableName> =
			createUniformVariableNameToUniformVariableLocation(
				gl,
				program,
				Object.keys(uniformVariableNameToVariableType) as unknown as readonly UniformVariableName[],
			);
		const programWrapper = new WithUniformsWebGlProgramWrapper(
			program,
			attributeVariablesComputers,
			uniformVariableNameToUniformVariableLocation,
		);
		return programWrapper;
	}
	private constructor(
		program: WebGLProgram,
		attributeVariablesComputers: AttributeVariablesComputers<
			AttributeVariableName,
			Triangle,
			AttributeVariableNameToVariableType
		>,
		uniformVariableNameToUniformVariableLocation: UniformVariableNameToUniformVariableLocation<UniformVariableName>,
	) {
		this.program = program;
		this.attributeVariablesComputers = attributeVariablesComputers;
		this.uniformVariableNameToUniformVariableLocation =
			uniformVariableNameToUniformVariableLocation;
	}
	private readonly program: WebGLProgram;
	private readonly attributeVariablesComputers: AttributeVariablesComputers<
		AttributeVariableName,
		Triangle,
		AttributeVariableNameToVariableType
	>;
	private readonly uniformVariableNameToUniformVariableLocation: UniformVariableNameToUniformVariableLocation<UniformVariableName>;
	private serializeTriangle(triangle: Triangle): readonly number[] {
		const serialziedTriangle: readonly number[] = (
			Object.values(this.attributeVariablesComputers) as readonly TriangleSerializer<
				Triangle,
				(typeof variableTypeToVariableSize)[AttributeVariableNameToVariableType[AttributeVariableName]]
			>[]
		).flatMap(({1: serializer1, 2: serializer2, 3: serializer3}) => [
			...serializer1(triangle),
			...serializer2(triangle),
			...serializer3(triangle),
		]);
		return serialziedTriangle;
	}
	private serializeTriangles(triangles: readonly Triangle[]): readonly number[] {
		const serializedTriangles = triangles.flatMap((triangle) => this.serializeTriangle(triangle));
		return serializedTriangles;
	}
	private computeBufferData(triangles: readonly Triangle[]): Float32Array {
		const serializedTriangles = this.serializeTriangles(triangles);
		const bufferData = new Float32Array(serializedTriangles);
		return bufferData;
	}
	public draw(gl: WebGL2RenderingContext, triangles: readonly Triangle[], context: Context): void {
		gl.useProgram(this.program);
		const bufferData = this.computeBufferData(triangles);
		this.setUniformVariables(gl, context);
		gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
		gl.drawArrays(gl.TRIANGLES, 0, triangles.length * 3);
	}
	private setUniformVariables(gl: WebGL2RenderingContext, context: Context): void {
		for (const [uniformVariableName, uniformVariableLocation] of Object.entries(
			this.uniformVariableNameToUniformVariableLocation,
		)) {
			const uniformVariableValue = this.uniformVariableValueComputers[uniformVariableName](context);
			const variableType = this.uniformVariableNameToVariableType[uniformVariableName];
			const variableValueSetter = uniformVariableTypeToUniformVariableValueSetter[variableType];
		}
	}
}
function createUniformVariableNameToUniformVariableLocation<
	UniformVariableName extends VariableName,
>(
	gl: WebGL2RenderingContext,
	program: WebGLProgram,
	uniformVariableNames: readonly UniformVariableName[],
): UniformVariableNameToUniformVariableLocation<UniformVariableName> {
	const uniformVariableNameToUniformVariableLocation = Object.fromEntries(
		uniformVariableNames.map((uniformVariableName) => {
			const uniformVariableLocation = gl.getUniformLocation(
				program,
				`u_${uniformVariableName}`,
			) as WebGLUniformLocation;
			return [uniformVariableName, uniformVariableLocation];
		}),
	) as UniformVariableNameToUniformVariableLocation<UniformVariableName>;
	return uniformVariableNameToUniformVariableLocation;
}
type UniformVariableNameToUniformVariableLocation<UniformVariableName extends VariableName> =
	Readonly<{
		[CurrentVariableName in UniformVariableName]: WebGLUniformLocation;
	}>;

const uniformVariableTypeToUniformVariableValueSetter = {
	float: (
		gl: WebGL2RenderingContext,
		uniformVariableLocation: WebGLUniformLocation,
		value: number,
	) => {
		gl.uniform1fv(uniformVariableLocation, new Float32Array([value]));
	},
	vec2: (
		gl: WebGL2RenderingContext,
		uniformVariableLocation: WebGLUniformLocation,
		value: readonly [number, number],
	) => {
		gl.uniform2fv(uniformVariableLocation, new Float32Array(value));
	},
	vec3: (
		gl: WebGL2RenderingContext,
		uniformVariableLocation: WebGLUniformLocation,
		value: readonly [number, number, number],
	) => {
		gl.uniform3fv(uniformVariableLocation, new Float32Array(value));
	},
	vec4: (
		gl: WebGL2RenderingContext,
		uniformVariableLocation: WebGLUniformLocation,
		value: readonly [number, number, number, number],
	) => {
		gl.uniform4fv(uniformVariableLocation, new Float32Array(value));
	},
	mat2: (
		gl: WebGL2RenderingContext,
		uniformVariableLocation: WebGLUniformLocation,
		value: readonly [readonly [number, number], readonly [number, number]],
	) => {
		gl.uniformMatrix2fv(uniformVariableLocation, false, new Float32Array(value.flat()));
	},
	mat3: (
		gl: WebGL2RenderingContext,
		uniformVariableLocation: WebGLUniformLocation,
		value: readonly [
			readonly [number, number, number],
			readonly [number, number, number],
			readonly [number, number, number],
		],
	) => {
		gl.uniformMatrix3fv(uniformVariableLocation, false, new Float32Array(value.flat()));
	},
	mat4: (
		gl: WebGL2RenderingContext,
		uniformVariableLocation: WebGLUniformLocation,
		value: readonly [
			readonly [number, number, number, number],
			readonly [number, number, number, number],
			readonly [number, number, number, number],
			readonly [number, number, number, number],
		],
	) => {
		gl.uniformMatrix4fv(uniformVariableLocation, false, new Float32Array(value.flat()));
	},
} as const satisfies {
	[CurrentVariableType in VariableType]: (
		gl: WebGL2RenderingContext,
		uniformVariableLocation: WebGLUniformLocation,
		value: VariableTypeToVariableValue[CurrentVariableType],
	) => void;
};
