// import type {Scene} from "./Scene.ts";
// import type {TerrainVertex} from "./TerrainVertex.ts";
// import {Mat4VariableSpecification} from "./web-gl/Mat4VariableSpecification.ts";
// import {ProgramWrapperCreator} from "./web-gl/ProgramWrapperCreator.ts";
// import type {Triangle} from "./web-gl/Triangle.ts";
// import {Vec3VariableSpecification} from "./web-gl/Vec3VariableSpecification.ts";
// export const terrainFromSunWebGlProgramWrapperCreator = new ProgramWrapperCreator(
// 	{
// 		projection: new Mat4VariableSpecification((scene: Scene) => scene.sun.camera.projection),
// 	},
// 	{
// 		position: new Vec3VariableSpecification((vertex: TerrainVertex) => [
// 			vertex.position.x,
// 			vertex.position.y,
// 			vertex.position.z,
// 		]),
// 	},
// 	{
// 		distance: "float",
// 	},
// 	"",
// 	({uniforms, ins, outs}) => `
// gl_Position = ${uniforms.projection} * vec4(${ins.position}, 1.0);
// ${outs.distance} = gl_Position.z;
// `,
// 	"highp",
// 	{
// 		color: "vec4",
// 	},
// 	`
// `,
// 	({ins, outs}) =>
// 		`
// ${outs.color} = vec4((vec3(${ins.distance}) + 1.0) / 2.0, 1.0);
// `,
// 	"highp",
// 	(scene: Scene): readonly Triangle<TerrainVertex>[] => scene.world.terrainTriangles,
// );
