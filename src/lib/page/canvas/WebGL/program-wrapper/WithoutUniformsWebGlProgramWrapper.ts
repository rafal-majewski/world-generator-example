import {createProgramFromShaderSourceCodes} from "./creating-shaders-source-code/createProgramFromShaderSourceCodes.ts";
import {createFragmentShaderSourceCode} from "./creating-shaders-source-code/createFragmentShaderSourceCode.ts";
import {createVertexShaderSourceCode} from "./creating-shaders-source-code/createVertexShaderSourceCode.ts";
import type {ShaderPrecision} from "./shader-precision/ShaderPrecision.ts";
import type {VariableNameToVariableType} from "../variable-name-to-variable-type/VariableNameToVariableType.ts";
import type {VariableName} from "../variable-name/VariableName.ts";
import {setUpBuffer} from "./setting-up-buffer/setUpBuffer.ts";
import {setUpAttributes} from "./setting-up-attributes/setUpAttributes.ts";
import type {variableTypeToVariableSize} from "../variable-type-to-variable-size/variableTypeToVariableSize.ts";
import type {TriangleSerializer} from "./triangle-serializer/TriangleSerializer.ts";
import type {AttributeVariablesComputers} from "./attribute-variables-computer/AttributeVariablesComputers.ts";
export class WithoutUniformsWebGlProgramWrapper<
	AttributeVariableName extends VariableName,
	AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
	Triangle,
> {
	public static create<
		VertexShaderPrecision extends ShaderPrecision,
		AttributeVariableName extends VariableName,
		AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
		VertexShaderSourceCodeMainContent extends string,
		VaryingVariableName extends VariableName,
		FragmentShaderPrecision extends ShaderPrecision,
		OutputVariableName extends VariableName,
		FragmentShaderSourceCodeMainContent extends string,
		Triangle,
	>(
		gl: WebGL2RenderingContext,
		attributeVariableNameToVariableType: AttributeVariableNameToVariableType,
		vertexShaderData: Readonly<{
			precision: VertexShaderPrecision;
			createSourceCodeMainContent: (
				variables: Readonly<{
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
			precision: FragmentShaderPrecision;
			createSourceCodeMainContent: (
				variables: Readonly<{
					ins: {
						[CurrentVariableName in VaryingVariableName]: `v_${CurrentVariableName}`;
					};
					outs: {
						[CurrentVariableName in OutputVariableName]: `o_${CurrentVariableName}`;
					};
				}>,
			) => FragmentShaderSourceCodeMainContent;
		}>,
		outputVariableNameToVariableType: VariableNameToVariableType<OutputVariableName>,
		// attributeVariablesComputers: AttributeVariablesComputersToUse,
		attributeVariablesComputers: AttributeVariablesComputers<
			AttributeVariableName,
			Triangle,
			AttributeVariableNameToVariableType
		>,
	) {
		const vertexShaderSourceCode = createVertexShaderSourceCode(
			vertexShaderData.precision,
			{} as const,
			attributeVariableNameToVariableType,
			varyingVariableNameToVariableType,
			vertexShaderData.createSourceCodeMainContent,
		);
		const fragmentShaderSourceCode = createFragmentShaderSourceCode(
			fragmentShaderData.precision,
			{} as const,
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
		const programWrapper = new WithoutUniformsWebGlProgramWrapper(
			program,
			attributeVariablesComputers,
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
	) {
		this.program = program;
		this.attributeVariablesComputers = attributeVariablesComputers;
	}
	private readonly program: WebGLProgram;
	private readonly attributeVariablesComputers: AttributeVariablesComputers<
		AttributeVariableName,
		Triangle,
		AttributeVariableNameToVariableType
	>;
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
	public draw(gl: WebGL2RenderingContext, triangles: readonly Triangle[]): void {
		gl.useProgram(this.program);
		const bufferData = this.computeBufferData(triangles);
		gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
		gl.drawArrays(gl.TRIANGLES, 0, triangles.length * 3);
	}
}
