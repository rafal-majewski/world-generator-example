// import type {GrassVertex} from "./GrassVertex.ts";
// import {Mat4VariableSpecification} from "./web-gl/Mat4VariableSpecification.ts";
// import type {Scene} from "./Scene.ts";
// import type {Vec3} from "./web-gl/Vec3.ts";
// import {Vec3VariableSpecification} from "./web-gl/Vec3VariableSpecification.ts";
// import type {Triangle} from "./web-gl/Triangle.ts";
// import {WithoutContextProgramWrapperCreator} from "./web-gl/WithoutContextProgramWrapperCreator.ts";
// export const grassProgramWrapperCreator = new WithoutContextProgramWrapperCreator(
// 	{
// 		projection: new Mat4VariableSpecification((scene: Scene) => scene.camera.projection),
// 		sunDirection: new Vec3VariableSpecification((scene: Scene) => {
// 			const angleRadians = scene.sun.angleRadians;
// 			const sunDirection: Vec3 = [0, -Math.sin(angleRadians), -Math.cos(angleRadians)];
// 			return sunDirection;
// 		}),
// 		sunColor: new Vec3VariableSpecification((scene: Scene) => [
// 			scene.sun.color.red,
// 			scene.sun.color.green,
// 			scene.sun.color.blue,
// 		]),
// 	},
// 	{
// 		position: new Vec3VariableSpecification((vertex: GrassVertex) => [
// 			vertex.position.x,
// 			vertex.position.y,
// 			vertex.position.z,
// 		]),
// 		normal: new Vec3VariableSpecification((vertex: GrassVertex) => [
// 			vertex.normal.x,
// 			vertex.normal.y,
// 			vertex.normal.z,
// 		]),
// 	},
// 	{
// 		normal: "vec3",
// 	},
// 	"",
// 	({uniforms, ins, outs}) => `gl_Position = ${uniforms.projection} * vec4(${ins.position}, 1.0);
// ${outs.normal} = ${ins.normal};`,
// 	"highp",
// 	{
// 		color: "vec4",
// 	},
// 	"",
// 	({uniforms, ins, outs}) =>
// 		`float lightIntensity = max(dot(${uniforms.sunDirection}, -normalize(${ins.normal})), 0.0);
// vec3 diffuse = ${uniforms.sunColor} * lightIntensity;
// ${outs.color} = vec4(diffuse * vec3(0.0, 1.0, 0.0), 1.0);`,
// 	"highp",
// 	// (scene: Scene): readonly Triangle[] => {
// 	// 	const triangles = scene.blocks.flatMap(computeTrianglesFromBlock);
// 	// 	return triangles;
// 	// },
// 	(scene: Scene): readonly Triangle<GrassVertex>[] => scene.mainWorldChunk.trianl,
// );
