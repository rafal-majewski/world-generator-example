import {computeProjection} from "./computeProjection.ts";
import {computeTrianglesFromBlock} from "./computeTrianglesFromBlock.ts";
import {Mat4VariableSpecification} from "./Mat4VariableSpecification.ts";
import type {Scene} from "./Scene.ts";
import type {Triangle} from "./Triangle.ts";
import {Vec3VariableSpecification} from "./Vec3VariableSpecification.ts";
import type {Vertex} from "./Vertex.ts";
import {WebGlProgramWrapperConfiguration} from "./WebGlProgramWrapperConfiguration.ts";
export const blockWebGlProgramWrapperConfiguration = new WebGlProgramWrapperConfiguration(
	{
		projection: new Mat4VariableSpecification((scene: Scene) => {
			const projection = computeProjection(scene.camera);
			return projection;
		}),
		sunDirection: new Vec3VariableSpecification((scene: Scene) => {
			const angleRadians = scene.sun.angleRadians;
			return [Math.sin(angleRadians), Math.cos(angleRadians), 0];
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
	},
	{
		color: "vec3",
	},
	({uniforms, ins, outs}) => `gl_Position = ${uniforms.projection} * vec4(${ins.position}, 1.0);
${outs.color} = ${ins.color};`,
	"highp",
	{
		color: "vec4",
	},
	({uniforms, ins, outs}) => `vec3 lightDirection = normalize(${uniforms.sunDirection});
float lightIntensity = max(dot(lightDirection, vec3(0, 0, 1)), 0.0);
vec3 diffuse = ${uniforms.sunColor} * lightIntensity;
${outs.color} = vec4(diffuse * ${ins.color}, 1.0);`,
	"highp",
	(scene: Scene) => {
		const triangles = scene.blocks.flatMap(computeTrianglesFromBlock);
		return triangles;
	},
	(triangle: Triangle) => ({
		1: {
			position: triangle.vertexPositions[1],
			color: triangle.color,
		},
		2: {
			position: triangle.vertexPositions[2],
			color: triangle.color,
		},
		3: {
			position: triangle.vertexPositions[3],
			color: triangle.color,
		},
	}),
);
