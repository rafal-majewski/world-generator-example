import {createProgramFromShaderSourceCodes} from "./createProgramFromShaderSourceCodes.ts";
import {createFragmentShaderSourceCode} from "./createFragmentShaderSourceCode.ts";
import {createVertexShaderSourceCode} from "./createVertexShaderSourceCode.ts";
import type {ShaderPrecision} from "../ShaderPrecision.ts";
import type {VariableNameToVariableType} from "./VariableNameToVariableType.ts";
import type {VariableName} from "../VariableName.ts";
import {setUpBuffer} from "../../webgl-wrapper/setUpBuffer.ts";
import {setUpAttributes} from "./setting-up-attributes/setUpAttributes.ts";
import {createUniforms} from "./creating-uniforms/createUniforms.ts";
import type {VariableNameToUniformVariableLocation} from "./VariableNameToUniformVariableLocation.ts";
import type {variableTypeToVariableSize} from "./variableTypeToVariableSize.ts";
export class ProgramWrapper<
	UniformVariableName extends VariableName,
	UniformVariableNameToVariableType extends VariableNameToVariableType<UniformVariableName>,
	Context,
	ContextSerializers extends Readonly<{
		[CurrentVariableName in UniformVariableName]: (context: Context) => readonly number[] &
			Readonly<{
				length: (typeof variableTypeToVariableSize)[UniformVariableNameToVariableType[CurrentVariableName]];
			}>;
	}>,
	AttributeVariableName extends VariableName,
	AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
	Triangle,
	VertexSerializers extends Readonly<{
		[CurrentVariableName in AttributeVariableName]: Readonly<
			Record<
				1 | 2 | 3,
				(triangle: Triangle) => readonly number[] &
					Readonly<{
						length: (typeof variableTypeToVariableSize)[AttributeVariableNameToVariableType[CurrentVariableName]];
					}>
			>
		>;
	}>,
> {
	public static create<
		UniformVariableName extends VariableName,
		UniformVariableNameToVariableType extends VariableNameToVariableType<UniformVariableName>,
		VertexShaderPrecision extends ShaderPrecision,
		AttributeVariableName extends VariableName,
		AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
		VertexShaderSourceCodeMainContent extends string,
		VaryingVariableName extends VariableName,
		FragmentShaderPrecision extends ShaderPrecision,
		OutputVariableName extends VariableName,
		FragmentShaderSourceCodeMainContent extends string,
		Triangle,
		Context,
	>(
		gl: WebGL2RenderingContext,
		uniformVariableNameToVariableType: UniformVariableNameToVariableType,
		attributeVariableNameToVariableType: AttributeVariableNameToVariableType,
		vertexShaderData: Readonly<{
			precision: VertexShaderPrecision;
			createSourceCodeMainContent: (
				variables: Readonly<{
					uniforms: Readonly<{
						[CurrentVariableName in UniformVariableName]: `u_${CurrentVariableName}`;
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
			precision: FragmentShaderPrecision;
			createSourceCodeMainContent: (
				variables: Readonly<{
					uniforms: {
						[CurrentVariableName in UniformVariableName]: `u_${CurrentVariableName}`;
					};
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
		vertexSerializers: Readonly<{
			[CurrentVariableName in AttributeVariableName]: Readonly<
				Record<
					1 | 2 | 3,
					(triangle: Triangle) => readonly number[] &
						Readonly<{
							length: (typeof variableTypeToVariableSize)[(typeof attributeVariableNameToVariableType)[CurrentVariableName]];
						}>
				>
			>;
		}>,
		contextSerializers: Readonly<{
			[CurrentVariableName in UniformVariableName]: (context: Context) => readonly number[] &
				Readonly<{
					length: (typeof variableTypeToVariableSize)[(typeof uniformVariableNameToVariableType)[CurrentVariableName]];
				}>;
		}>,
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
		const variableNameToUniformVariableLocation: VariableNameToUniformVariableLocation<UniformVariableName> =
			createUniforms();
		const programWrapper = new ProgramWrapper<
			UniformVariableName,
			UniformVariableNameToVariableType,
			Context,
			typeof contextSerializers,
			AttributeVariableName,
			AttributeVariableNameToVariableType,
			Triangle,
			typeof vertexSerializers
		>(program, variableNameToUniformVariableLocation, contextSerializers, vertexSerializers);
		return programWrapper;
	}
	private constructor(
		program: WebGLProgram,
		variableNameToUniformVariableLocation: VariableNameToUniformVariableLocation<UniformVariableName>,
		contextSerializers: ContextSerializers,
		vertexSerializers: VertexSerializers,
	) {
		this.program = program;
		this.variableNameToUniformVariableLocation = variableNameToUniformVariableLocation;
		this.contextSerializers = contextSerializers;
		this.vertexSerializers = vertexSerializers;
	}
	private readonly program: WebGLProgram;
	private readonly variableNameToUniformVariableLocation: VariableNameToUniformVariableLocation<UniformVariableName>;
	private readonly contextSerializers: ContextSerializers;
	private readonly vertexSerializers: VertexSerializers;
	private serializeTriangle(triangle: Triangle): readonly number[] {
		const serialziedTriangle: readonly number[] = (
			Object.values(this.vertexSerializers) as readonly Record<
				1 | 2 | 3,
				(triangle: Triangle) => readonly number[] &
					Readonly<{
						length: (typeof variableTypeToVariableSize)[AttributeVariableNameToVariableType[AttributeVariableName]];
					}>
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
		gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
		gl.drawArrays(gl.TRIANGLES, 0, triangles.length * 3);
	}
}
