import {computeProjection} from "./computeProjection.ts";
import {computeTrianglesFromBlock} from "./computeTrianglesFromBlock.ts";
import {Mat4VariableSpecification} from "./Mat4VariableSpecification.ts";
import type {Scene} from "./Scene.ts";
import type {Triangle} from "./Triangle.ts";
import type {Vec3} from "./Vec3.ts";
import {Vec3VariableSpecification} from "./Vec3VariableSpecification.ts";
import type {Vertex} from "./Vertex.ts";
import type {VertexSelection} from "./VertexSelection.ts";
import {WebGlProgramWrapperConfiguration} from "./WebGlProgramWrapperConfiguration.ts";
export const blockWebGlProgramWrapperConfiguration = new WebGlProgramWrapperConfiguration(
	{
		projection: new Mat4VariableSpecification((scene: Scene) => {
			const projection = computeProjection(scene.camera);
			return projection;
		}),
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
		position: new Vec3VariableSpecification((vertex: Vertex) => [
			vertex.position.x,
			vertex.position.y,
			vertex.position.z,
		]),
		color: new Vec3VariableSpecification((vertex: Vertex) => [
			vertex.color.red,
			vertex.color.green,
			vertex.color.blue,
		]),
		normal: new Vec3VariableSpecification((vertex: Vertex) => [
			vertex.normal.x,
			vertex.normal.y,
			vertex.normal.z,
		]),
	},
	{
		color: "vec3",
		normal: "vec3",
	},
	"",
	({
		uniforms,
		ins,
		outs,
	}) => `gl_Position = ${uniforms.projection} * vec4(${ins.position} + vec3(-1, 0.0, 0.0), 1.0);
${outs.color} = ${ins.color};
${outs.normal} = ${ins.normal};`,
	"highp",
	{
		color: "vec4",
	},
	"",
	({uniforms, ins, outs}) =>
		`float lightIntensity = max(dot(${uniforms.sunDirection}, -normalize(${ins.normal})), 0.0);
vec3 diffuse = ${uniforms.sunColor} * lightIntensity;
${outs.color} = vec4(diffuse * ${ins.color}, 1.0);`,
	"highp",
	(scene: Scene): readonly Triangle[] => {
		const triangles = scene.blocks.flatMap(computeTrianglesFromBlock);
		return triangles;
	},
	(triangle: Triangle): VertexSelection<Vertex> => [
		{
			...triangle.vertices[0],
			color: triangle.color,
		},
		{
			...triangle.vertices[1],
			color: triangle.color,
		},
		{
			...triangle.vertices[2],
			color: triangle.color,
		},
	],
);
