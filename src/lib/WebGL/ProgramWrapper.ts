import {createProgramFromShaderSourceCodes} from "./createProgramFromShaderSourceCodes.ts";
import {createFragmentShaderSourceCode} from "./createFragmentShaderSourceCode.ts";
import {createVertexShaderSourceCode} from "./createVertexShaderSourceCode.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {VariableType} from "./VariableType.ts";
import {variableTypeToSize} from "./variableTypeToSize.ts";
import type {VariableNameToVariableType} from "./VariableNameToVariableType.ts";
import type {VariableName} from "./VariableName.ts";

export class ProgramWrapper {
	public static create<
		UniformVariableName extends VariableName,
		UniformVariableNameToVariableType extends VariableNameToVariableType<UniformVariableName>,
		VertexShaderPrecision extends ShaderPrecision,
		AttributeVariableName extends VariableName,
		AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
		VertexShaderSourceCodeMainContent extends string,
		VaryingVariableName extends VariableName,
		VaryingVariableNameToVariableType extends VariableNameToVariableType<VaryingVariableName>,
		FragmentShaderPrecision extends ShaderPrecision,
		OutputVariableName extends VariableName,
		OutputVariableNameToVariableType extends VariableNameToVariableType<OutputVariableName>,
		FragmentShaderSourceCodeMainContent extends string,
		Vertex,
		Context,
	>(
		gl: WebGL2RenderingContext,
		uniformVariableNameToVariableType: UniformVariableNameToVariableType,
		vertexShaderData: Readonly<{
			attributeVariableNameToVariableType: AttributeVariableNameToVariableType;
			precision: VertexShaderPrecision;
			createSourceCodeMainContent: (
				variables: Readonly<{
					uniforms: Readonly<{
						[Name in UniformVariableName]: `u_${Name}`;
					}>;
					ins: Readonly<{
						[Name in AttributeVariableName]: `a_${Name}`;
					}>;
					outs: Readonly<{
						[Name in VaryingVariableName]: `v_${Name}`;
					}>;
				}>,
			) => VertexShaderSourceCodeMainContent;
		}>,
		varyingTypeMapping: VaryingVariableNameToVariableType,
		fragmentShaderData: Readonly<{
			outputVariableNameToVariableType: OutputVariableNameToVariableType;
			precision: FragmentShaderPrecision;
			createSourceCodeMainContent: (
				variables: Readonly<{
					uniforms: {
						[Name in UniformVariableName]: `u_${Name}`;
					};
					ins: {
						[Name in VaryingVariableName]: `v_${Name}`;
					};
					outs: {
						[Name in OutputVariableName]: `o_${Name}`;
					};
				}>,
			) => FragmentShaderSourceCodeMainContent;
		}>,
		vertexSerializers: Readonly<{
			[Name in AttributeVariableName]: (vertex: Vertex) => readonly number[] &
				Readonly<{
					length: (typeof variableTypeToSize)[(typeof vertexShaderData.attributeVariableNameToVariableType)[Name]];
				}>;
		}>,
		contextSerializers: Readonly<{
			[Name in UniformVariableName]: (context: Context) => readonly number[] &
				Readonly<{
					length: (typeof variableTypeToSize)[(typeof uniformVariableNameToVariableType)[Name]];
				}>;
		}>,
	) {
		const vertexShaderSourceCode = createVertexShaderSourceCode(
			vertexShaderData.precision,
			uniformVariableNameToVariableType,
			vertexShaderData.attributeVariableNameToVariableType,
			varyingTypeMapping,
			vertexShaderData.createSourceCodeMainContent,
		);

		const fragmentShaderSourceCode = createFragmentShaderSourceCode(
			fragmentShaderData.precision,
			uniformVariableNameToVariableType,
			varyingTypeMapping,
			fragmentShaderData.outputVariableNameToVariableType,
			fragmentShaderData.createSourceCodeMainContent,
		);

		const program = createProgramFromShaderSourceCodes(
			gl,
			vertexShaderSourceCode,
			fragmentShaderSourceCode,
		);

		this.setupBuffer(gl);
		const attributeLocationMapping = this.setupAttributes();
		const uniformLocationMapping = this.setupUniforms();

		// const programWrapper = new ProgramWrapper(
		// 	gl,
		// 	uniformLocations,
		// 	attributeLocations,
		// 	serializers,
		// );

		// return programWrapper;
	}

	private static setupBuffer(gl: WebGL2RenderingContext) {
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	}

	private constructor(
		gl: WebGL2RenderingContext,
		uniformLocations: Readonly<Record<keyof Uniforms, WebGLUniformLocation>>,
		attributeLocations: Readonly<Record<keyof Attributes, GLint>>,
		serializers: Readonly<{
			[Name in keyof Attributes]: (
				vertex: Vertex,
			) => readonly number[] & Readonly<{length: (typeof variableTypeToSize)[Attributes[Name]]}>;
		}>,
	) {
		this.gl = gl;
		this.attributeLocations = attributeLocations;
		this.uniformLocations = uniformLocations;
	}

	private gl: WebGL2RenderingContext;
	private attributeLocations: Readonly<Record<string, GLint>>;
	private uniformLocations: Readonly<Record<string, WebGLUniformLocation>>;

	private static setupAttributes<AttributeName extends VariableName>(
		attributeNames: readonly AttributeName[],
		attributeTypeMapping: Readonly<Record<AttributeName, VariableType>>,
		gl: WebGL2RenderingContext,
		program: WebGLProgram,
	): Readonly<Record<AttributeName, GLint>> {
		const attributeTypes = Object.values(attributeTypeMapping);
		const strideBytes = this.computeStrideBytes(attributeTypes);
		const attributeLocationMapping = this.getAttributeLocationMapping(attributeNames, gl, program);

		this.configureAttributes(
			attributeNames,
			attributeTypeMapping,
			attributeLocationMapping,
			gl,
			strideBytes,
		);

		return attributeLocationMapping;
	}

	private static computeStrideBytes(types: readonly VariableType[]): number {
		const stride = types.reduce(
			(accumulatedStride, type) => accumulatedStride + variableTypeToSize[type],
			0,
		);

		return stride * Float32Array.BYTES_PER_ELEMENT;
	}

	private static configureAttributes<AttributeName extends VariableName>(
		attributeNames: readonly AttributeName[],
		attributeTypes: Readonly<Record<AttributeName, VariableType>>,
		attributeLocations: Readonly<Record<AttributeName, GLint>>,
		gl: WebGL2RenderingContext,
		strideBytes: number,
	) {
		let offsetBytes = 0;

		for (const name of attributeNames) {
			const location = attributeLocations[name];
			const size = variableTypeToSize[attributeTypes[name]];
			gl.enableVertexAttribArray(location);
			gl.vertexAttribPointer(location, size, gl.FLOAT, false, strideBytes, offsetBytes);
			offsetBytes += size * Float32Array.BYTES_PER_ELEMENT;
		}
	}

	private static getAttributeLocationMapping<AttributeName extends VariableName>(
		attributeNames: readonly AttributeName[],
		gl: WebGL2RenderingContext,
		program: WebGLProgram,
	): Readonly<Record<AttributeName, GLint>> {
		const attributeLocationMapping = Object.fromEntries(
			attributeNames.map((name) => [name, gl.getAttribLocation(program, `a_${name}`)]),
		) as Readonly<Record<AttributeName, GLint>>;

		return attributeLocationMapping;
	}

	// 	const attributeLocationsEntries = Object.entries(attributeLocations) as readonly [
	// 		keyof AttributeLocations,
	// 		GLint,
	// 	][];

	// 	const uniformsLocations = Object.fromEntries(
	// 		Object.keys(uniforms).map((name) => [name, gl.getUniformLocation(program, name)]),
	// 	) as Readonly<Record<keyof Uniforms, WebGLUniformLocation>>;

	// 	const programWrapper = new WebGlProgramWrapper(gl, program, serializers);

	// 	return programWrapper;
	// }

	// private constructor(
	// 	gl: WebGL2RenderingContext,
	// 	program: WebGLProgram,
	// 	serializers: Readonly<{
	// 		[Key in keyof Attributes]: (
	// 			triangle: Triangle,
	// 			vertexIndex: 0 | 1 | 2,
	// 		) => BuildArray<(typeof variableTypeToNumberCount)[Attributes[Key]], number>;
	// 	}>,
	// ) {
	// 	this.gl = gl;
	// 	this.program = program;
	// 	this.serializers = serializers;
	// }

	// private gl: WebGL2RenderingContext;
	// private program: WebGLProgram;
	// private serializers: Readonly<{
	// 	[Key in keyof Attributes]: (
	// 		triangle: Triangle,
	// 		vertexIndex: 0 | 1 | 2,
	// 	) => BuildArray<(typeof variableTypeToNumberCount)[Attributes[Key]], number>;
	// }>;

	// private computeBufferData(triangles: readonly Triangle[]): Float32Array {
	// 	return new Float32Array(
	// 		triangles.flatMap((triangle) =>
	// 			Object.values(this.serializers).flatMap((serializer) => [
	// 				...serializer(triangle, 0),
	// 				...serializer(triangle, 1),
	// 				...serializer(triangle, 2),
	// 			]),
	// 		),
	// 	);
	// }

	// public draw(triangles: readonly Triangle[]): void {
	// 	this.gl.useProgram(this.program);
	// 	const bufferData = this.computeBufferData(triangles);
	// 	this.gl.bufferData(this.gl.ARRAY_BUFFER, bufferData, this.gl.STATIC_DRAW);
	// 	this.gl.drawArrays(this.gl.TRIANGLES, 0, triangles.length * 3);
	// }
}
