// import type {Scene} from "./Scene.ts";
// import type {TerrainTriangle} from "./TerrainTriangle.ts";
// import type {TerrainVertex} from "./TerrainVertex.ts";
// import {Mat4VariableSpecification} from "./web-gl/Mat4VariableSpecification.ts";
// import {Vec3VariableSpecification} from "./web-gl/Vec3VariableSpecification.ts";
// import {WithoutContextProgramWrapperCreator} from "./web-gl/WithoutContextProgramWrapperCreator.ts";
// export const terrainFromSunProgramWrapperCreator = new WithoutContextProgramWrapperCreator(
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
// 	(scene: Scene): readonly TerrainTriangle[] => scene.mainWorldChunk.triangles,
// );
