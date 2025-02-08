import type {Scene} from "./Scene.ts";
import type {TerrainTriangle} from "./TerrainTriangle.ts";
import type {TerrainVertex} from "./TerrainVertex.ts";
import {LiteralFloatValue} from "./web-gl/LiteralFloatValue.ts";
import {Mat4TimesVec4ResultingInVec4Value} from "./web-gl/Mat4TimesVec4ResultingInVec4Value.ts";
import {Mat4VariableSpecification} from "./web-gl/Mat4VariableSpecification.ts";
import {ProgramWrapperCreatorBuilder} from "./web-gl/ProgramWrapperCreatorBuilder.ts";
import {Vec3AndFloatConstructingVec4Value} from "./web-gl/Vec3AndFloatConstructingVec4Value.ts";
import {Vec3VariableSpecification} from "./web-gl/Vec3VariableSpecification.ts";
export const terrainProgramWrapperCreator = new ProgramWrapperCreatorBuilder<Scene, TerrainVertex>()
	.specifyUniforms({
		projection: new Mat4VariableSpecification((scene: Scene) => scene.camera.projection),
	})
	.specifyTrianglesSelector(
		(scene: Scene): readonly TerrainTriangle[] => scene.mainWorldChunk.triangles,
	)
	.specifyAttributes({
		position: new Vec3VariableSpecification((vertex: TerrainVertex) => [
			vertex.position.x,
			vertex.position.y,
			vertex.position.z,
		]),
		color: new Vec3VariableSpecification((vertex: TerrainVertex) => [
			vertex.color.red,
			vertex.color.green,
			vertex.color.blue,
		]),
		normal: new Vec3VariableSpecification((vertex: TerrainVertex) => [
			vertex.normal.x,
			vertex.normal.y,
			vertex.normal.z,
		]),
	})
	.declareVaryings({
		color: "vec3",
		normal: "vec3",
		position: "vec3",
	})
	.specifyVertexShader((builder) =>
		builder.setPrecision("high").specifyMain((builder) =>
			builder.finalize(({variables}) => ({
				gl_Position: new Mat4TimesVec4ResultingInVec4Value(
					variables.uniforms.projection,
					new Vec3AndFloatConstructingVec4Value(variables.ins.position, new LiteralFloatValue(1.0)),
				),
				outs: {
					color: variables.ins.color,
					normal: variables.ins.normal,
					position: variables.ins.position,
				},
			})),
		),
	)
	.declareOutputs({
		color: "vec4",
	})
	.specifyFragmentShader((builder) =>
		builder.setPrecision("high").specifyMain((mainBuilder) =>
			mainBuilder.finalize(({variables}) => ({
				outs: {
					color: new Vec3AndFloatConstructingVec4Value(
						variables.ins.color,
						new LiteralFloatValue(1.0),
					),
				},
			})),
		),
	)
	.build();
