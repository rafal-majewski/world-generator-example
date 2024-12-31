import type {VariableName} from "./VariableName.ts";
import type {VariableType} from "../variable-type/VariableType.ts";
import type {FragmentWebGlProgramWrapperShaderSourceCodeData} from "./FragmentWebGlProgramWrapperShaderSourceCodeData.ts";
import type {ShaderPrecision} from "./ShaderPrecision.ts";
import type {ShaderSourceCodeMainContent} from "./ShaderSourceCodeMainContent.ts";
import type {VertexWebGlProgramWrapperShaderSourceCodeData} from "./VertexWebGlProgramWrapperShaderSourceCodeData.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {VertexSelectors} from "./VertexSelectors.ts";
import type {Serializer} from "./Serializer.ts";
import {createProgramForWrapper} from "./createProgramForWrapper.ts";
import {computeBufferData} from "./computeBufferData.ts";
import type {SupportedVariableTypeToVariableValue} from "./VariableSpecification.ts";

export class WebGlProgramWrapper<Scene, Triangle, Vertex> {
	public static create<
		AttributeVariableName extends VariableName,
		AttributeVariableNameToVariableType extends Record<AttributeVariableName, VariableType>,
		VertexShaderPrecision extends ShaderPrecision,
		VaryingVariableName extends VariableName,
		VertexShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
		VaryingVariableNameToVariableType extends Record<VaryingVariableName, VariableType>,
		FragmentShaderPrecision extends ShaderPrecision,
		OutputVariableName extends VariableName,
		FragmentShaderSourceCodeMainContent extends ShaderSourceCodeMainContent,
		OutputVariableNameToVariableType extends Record<VaryingVariableName, VariableType>,
		Scene,
		Triangle,
		Vertex,
	>(
		gl: WebGL2RenderingContext,
		attributeVariableNameToVariableType: AttributeVariableNameToVariableType,
		vertexShaderData: VertexWebGlProgramWrapperShaderSourceCodeData<
			VertexShaderPrecision,
			{
				attribute: AttributeVariableName;
				uniform: never;
				outputVarying: VaryingVariableName;
			},
			VertexShaderSourceCodeMainContent
		>,
		varyingVariableNameToVariableType: VaryingVariableNameToVariableType,
		fragmentShaderData: FragmentWebGlProgramWrapperShaderSourceCodeData<
			FragmentShaderPrecision,
			{
				uniform: never;
				inputVarying: VaryingVariableName;
				output: OutputVariableName;
			},
			FragmentShaderSourceCodeMainContent
		>,
		outputVariableNameToVariableType: OutputVariableNameToVariableType,
		trianglesSelector: TrianglesSelector<Scene, Triangle>,
		vertexSelectors: VertexSelectors<Triangle, Vertex>,
		attributeVariableNameToVariableValueComputer: {
			[VariableNameToUse in AttributeVariableName]: (
				vertex: Vertex,
			) => SupportedVariableTypeToVariableValue[AttributeVariableNameToVariableType[VariableNameToUse]];
		},
	) {
		const program = createProgramForWrapper(
			gl,
			// 	vertexShaderData,
			// 	{} as const,
			// 	attributeVariableNameToVariableType,
			// 	varyingVariableNameToVariableType,
			// 	fragmentShaderData,
			// 	varyingVariableNameToVariableType,
			// 	outputVariableNameToVariableType,
			// );
		);
		const attributeVariableNames: readonly AttributeVariableName[] = Object.keys(
			attributeVariableNameToVariableType,
		) as AttributeVariableName[];
		const vertexSerializers = attributeVariableNames.map((attributeVariableName) => ());
		const programWrapper = new WebGlProgramWrapper(
			program,
			// attributeVariablesComputers,
			trianglesSelector,
			vertexSelectors,
			vertexSerializers,
		);
		return programWrapper;
	}
	private constructor(
		program: WebGLProgram,
		trianglesSelector: TrianglesSelector<Scene, Triangle>,
		vertexSelectors: VertexSelectors<Triangle, Vertex>,
		vertexSerializers: readonly Serializer<Vertex>[],
	) {
		this.program = program;
		this.trianglesSelector = trianglesSelector;
		this.vertexSelectors = vertexSelectors;
		this.vertexSerializers = vertexSerializers;
	}
	private readonly program: WebGLProgram;
	private readonly trianglesSelector: TrianglesSelector<Scene, Triangle>;
	private readonly vertexSelectors: VertexSelectors<Triangle, Vertex>;
	private readonly vertexSerializers: readonly Serializer<Vertex>[];
	public draw(gl: WebGL2RenderingContext, scene: Scene): void {
		gl.useProgram(this.program);
		const triangles = this.trianglesSelector(scene);
		const bufferData = computeBufferData(triangles, this.vertexSelectors, this.vertexSerializers);
		gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
		gl.drawArrays(gl.TRIANGLES, 0, triangles.length * 3);
	}
}

// type VariableValueComputer<Datum, VariableTypeToUse extends VariableType> = (
// 	datum: Datum,
// ) => VariableTypeToVariableValue[VariableTypeToUse];

// class VecSerializer<Datum, A extends "vec2" | "vec3" | "vec4"> implements Serializer<Datum> {
// 	private readonly valueComputer: VariableValueComputer<Datum, A>;
// 	public constructor(valueComputer: VariableValueComputer<Datum, A>) {
// 		this.valueComputer = valueComputer;
// 	}
// 	public serialize(datum: Datum): readonly number[] {
// 		const variableValue = this.valueComputer(datum);
// 		return variableValue;
// 	}
// }
// class MatSerializer<Datum, A extends "mat2" | "mat3" | "mat4"> implements Serializer<Datum> {
// 	private readonly valueComputer: VariableValueComputer<Datum, A>;
// 	public constructor(valueComputer: VariableValueComputer<Datum, A>) {
// 		this.valueComputer = valueComputer;
// 	}
// 	public serialize(datum: Datum): readonly number[] {
// 		const variableValue = this.valueComputer(datum);
// 		const serializedVariableValue: readonly number[] = variableValue.flat();
// 		return serializedVariableValue;
// 	}
// }
// type VariableSerializationDatum<VariableTypeToUse extends VariableType, Datum> = Readonly<{
// 	variableType: VariableTypeToUse;
// 	variableValueComputer: VariableValueComputer<Datum, VariableTypeToUse>;
// }>;
// function createSerializers<
// 	Datum,
// >(
// 	variableSerializationData: readonly VariableSerializationDatum<Datum>[],
// ): readonly Serializer<Vertex>[] {
// 	const vertexSerializers = variableSerializationData.map(({variableType, variableValueComputer}) => {

// 	}
// }

// function createSerializer<
// VariableTypeToUse extends VariableType,
// 	Datum,
// >(
// 	variableSerializationDatum: VariableSerializationDatum<VariableTypeToUse, Datum>,
// ): Serializer<Datum> {
// 	switch (variableSerializationDatum.variableType) {
// 		case "float": {
// 			const serializer = new FloatSerializer(variableSerializationDatum.variableValueComputer);
// 			return serializer;
// 		}
// 		case "vec2":
// 		case "vec3":
// 		case "vec4": {
// 			const serializer = new VecSerializer(variableSerializationDatum.variableValueComputer);
// 			return serializer;
// 		}
// 		case "mat2":
// 		case "mat3":
// 		case "mat4": {
// 			const serializer = new MatSerializer(variableSerializationDatum.variableValueComputer);
// 			return serializer;
// 		}
// 	}
// }
