import {computeProjection} from "./computeProjection.ts";
import {computeTrianglesFromBlock} from "./computeTrianglesFromBlock.ts";
import {Mat4VariableDefinition} from "./Mat4VariableDefinition.ts";
import type {Scene} from "./Scene.ts";
import type {Triangle} from "./Triangle.ts";
import {Vec3VariableDefinition} from "./Vec3VariableDefinition.ts";
import type {Vertex} from "./Vertex.ts";
import type {WebGlProgramWrapperConfiguration} from "./WebGlProgramWrapperConfiguration.ts";
export class BlockWebGlProgramWrapperConfiguration
	implements
		WebGlProgramWrapperConfiguration<
			"projection",
			"position" | "color",
			Vertex,
			"color",
			"color",
			Scene,
			Triangle
		>
{
	public readonly uniformVariableNameToVariableDefinition = {
		projection: new Mat4VariableDefinition((scene: Scene) => {
			const projection = computeProjection(scene.camera);
			return projection;
		}),
	};
	public readonly attributeVariableNameToVariableDefinition = {
		position: new Vec3VariableDefinition((vertex: Vertex) => [
			vertex.position.x,
			vertex.position.y,
			vertex.position.z,
		]),
		color: new Vec3VariableDefinition((vertex: Vertex) => [
			vertex.color.red,
			vertex.color.green,
			vertex.color.blue,
		]),
	};
	public readonly varyingVariableNameToVariableType = {
		color: "vec3",
	};
	public readonly vertexShaderPrecision = "highp";
	public createVertexShaderMainContent({uniforms, ins, outs}) {
		return `gl_Position = ${uniforms.projection} * vec4(${ins.position}, 1.0);
${outs.color} = ${ins.color};`;
	}
	public readonly outputVariableNameToVariableType = {
		color: "vec4",
	};
	public readonly fragmentShaderPrecision = "highp";
	public createFragmentShaderMainContent({ins, outs}) {
		return `${outs.color} = vec4(${ins.color}, 1.0);`;
	}
	trianglesSelector(scene: Scene) {
		return scene.blocks.flatMap(computeTrianglesFromBlock);
	}
	verticesSelector(triangle: Triangle) {
		return {
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
		};
	}
}
