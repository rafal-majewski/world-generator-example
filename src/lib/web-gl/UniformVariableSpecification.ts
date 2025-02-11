import type {VariableSpecification} from "./VariableSpecification.ts";
export interface UniformVariableSpecification<Scene> extends VariableSpecification {
	setUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation, scene: Scene): undefined;
}
