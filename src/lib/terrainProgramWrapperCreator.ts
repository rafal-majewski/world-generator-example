import type {Scene} from "./Scene.ts";
import type {TerrainTriangle} from "./TerrainTriangle.ts";
import type {TerrainVertex} from "./TerrainVertex.ts";
import {Mat4VariableSpecification} from "./web-gl/Mat4VariableSpecification.ts";
// import type {Vec3} from "./web-gl/Vec3.ts";
import {Vec3VariableSpecification} from "./web-gl/Vec3VariableSpecification.ts";
import {WithoutContextProgramWrapperCreator} from "./web-gl/WithoutContextProgramWrapperCreator.ts";
export const terrainProgramWrapperCreator = new WithoutContextProgramWrapperCreator(
	{
		projection: new Mat4VariableSpecification((scene: Scene) => scene.camera.projection),
		// sunDirection: new Vec3VariableSpecification((scene: Scene) => {
		// 	const angleRadians = scene.sun.angleRadians;
		// 	const sunDirection: Vec3 = [0, -Math.sin(angleRadians), -Math.cos(angleRadians)];
		// 	return sunDirection;
		// }),
		// sunColor: new Vec3VariableSpecification((scene: Scene) => [
		// 	scene.sun.color.red,
		// 	scene.sun.color.green,
		// 	scene.sun.color.blue,
		// ]),
	},
	{
		position: new Vec3VariableSpecification((vertex: TerrainVertex) => [
			vertex.position.x,
			vertex.position.y,
			vertex.position.z,
		]),
		// sandiness: new FloatVariableSpecification((vertex: TerrainVertex) =>
		// 	vertex.material === "sand" ? 1 : 0,
		// ),
		// dirtiness: new FloatVariableSpecification((vertex: TerrainVertex) =>
		// 	vertex.material === "dirt" ? 1 : 0,
		// ),
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
	},
	{
		color: "vec3",
		normal: "vec3",
		position: "vec3",
	},
	"",
	({uniforms, ins, outs}) => `
gl_Position = ${uniforms.projection} * vec4(${ins.position}, 1.0);
${outs.color} = ${ins.color};
${outs.normal} = ${ins.normal};
${outs.position} = ${ins.position};
`,
	"highp",
	{
		color: "vec4",
	},
	`
`,
	({ins, outs}) =>
		`
${outs.color} = vec4(${ins.color}, 1.0);
`,
	"highp",
	// (scene: Scene): readonly Triangle[] => {
	// 	const triangles = scene.blocks.flatMap(computeTrianglesFromBlock);
	// 	return triangles;
	// },
	(scene: Scene): readonly TerrainTriangle[] => scene.mainWorldChunk.triangles,
);
