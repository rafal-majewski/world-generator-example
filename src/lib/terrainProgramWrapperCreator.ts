import type {Scene} from "./Scene.ts";
import type {TerrainVertex} from "./TerrainVertex.ts";
import {FloatVariableSpecification} from "./web-gl/FloatVariableSpecification.ts";
import {Mat4VariableSpecification} from "./web-gl/Mat4VariableSpecification.ts";
import {ProgramWrapperCreator} from "./web-gl/ProgramWrapperCreator.ts";
import type {Triangle} from "./web-gl/Triangle.ts";
import type {Vec3} from "./web-gl/Vec3.ts";
import {Vec3VariableSpecification} from "./web-gl/Vec3VariableSpecification.ts";
export const terrainProgramWrapperCreator = new ProgramWrapperCreator(
	{
		projection: new Mat4VariableSpecification((scene: Scene) => scene.camera.projection),
		sunDirection: new Vec3VariableSpecification((scene: Scene) => {
			const angleRadians = scene.sun.angleRadians;
			const sunDirection: Vec3 = [0, -Math.sin(angleRadians), -Math.cos(angleRadians)];
			return sunDirection;
		}),
		sunColor: new Vec3VariableSpecification((scene: Scene) => [
			scene.sun.color.red,
			scene.sun.color.green,
			scene.sun.color.blue,
		]),
	},
	{
		position: new Vec3VariableSpecification((vertex: TerrainVertex) => [
			vertex.position.x,
			vertex.position.y,
			vertex.position.z,
		]),
		sandiness: new FloatVariableSpecification((vertex: TerrainVertex) =>
			vertex.material === "sand" ? 1 : 0,
		),
		dirtiness: new FloatVariableSpecification((vertex: TerrainVertex) =>
			vertex.material === "dirt" ? 1 : 0,
		),
		normal: new Vec3VariableSpecification((vertex: TerrainVertex) => [
			vertex.normal.x,
			vertex.normal.y,
			vertex.normal.z,
		]),
	},
	{
		dirtiness: "float",
		sandiness: "float",
		normal: "vec3",
		position: "vec3",
	},
	"",
	({uniforms, ins, outs}) => `
gl_Position = ${uniforms.projection} * vec4(${ins.position}, 1.0);
${outs.dirtiness} = ${ins.dirtiness};
${outs.sandiness} = ${ins.sandiness};
${outs.normal} = ${ins.normal};
${outs.position} = ${ins.position};
`,
	"highp",
	{
		color: "vec4",
	},
	`
`,
	({uniforms, ins, outs}) =>
		`
vec3 baseTerrainColor = ${ins.dirtiness} * vec3(0.29, 0.13, 0.4) + ${ins.sandiness} * vec3(0.87, 0.85, 0.51);
float lightIntensity = max(dot(${uniforms.sunDirection}, -normalize(${ins.normal})), 0.0);
vec3 diffuse = ${uniforms.sunColor} * lightIntensity;
vec3 terrainColor = baseTerrainColor * diffuse;
${outs.color} = vec4(terrainColor, 1.0);
`,
	"highp",
	// (scene: Scene): readonly Triangle[] => {
	// 	const triangles = scene.blocks.flatMap(computeTrianglesFromBlock);
	// 	return triangles;
	// },
	(scene: Scene): readonly Triangle<TerrainVertex>[] => scene.world.terrainTriangles,
);
