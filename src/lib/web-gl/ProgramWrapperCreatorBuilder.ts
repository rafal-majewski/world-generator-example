import type {VariablesSpecifications} from "./VariablesSpecifications.ts";
import {WithSpecifiedUniformsProgramWrapperCreatorBuilder} from "./WithSpecifiedUniformsProgramWrapperCreatorBuilder.ts";
export class ProgramWrapperCreatorBuilder<Scene, Vertex> {
	public specifyUniforms<UniformsSpecifications extends VariablesSpecifications<Scene>>(
		uniformsSpecifications: UniformsSpecifications,
	): WithSpecifiedUniformsProgramWrapperCreatorBuilder<Scene, Vertex, UniformsSpecifications> {
		const newBuilder = new WithSpecifiedUniformsProgramWrapperCreatorBuilder<
			Scene,
			Vertex,
			UniformsSpecifications
		>(uniformsSpecifications);
		return newBuilder;
	}
}
