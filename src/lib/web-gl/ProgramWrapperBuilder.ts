import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import {uniformVariablesSpecificationsConstructors} from "./uniformVariablesSpecificationsConstructors.ts";
import type {UniformVariablesSpecificationsCreator} from "./UniformVariablesSpecificationsCreator.ts";
import {WithSpecifiedUniformsProgramWrapperBuilder} from "./WithSpecifiedUniformsProgramWrapperBuilder.ts";
export class ProgramWrapperBuilder<Scene, Vertex> {
	public specifyUniforms<
		UniformVariablesSpecificationsToUse extends UniformVariablesSpecifications<Scene>,
	>(
		builder: UniformVariablesSpecificationsCreator<Scene, UniformVariablesSpecificationsToUse>,
	): WithSpecifiedUniformsProgramWrapperBuilder<
		Scene,
		Vertex,
		UniformVariablesSpecificationsToUse
	> {
		const uniformVariablesSpecifications = builder(uniformVariablesSpecificationsConstructors);
		const newProgramWrapperBuilder = new WithSpecifiedUniformsProgramWrapperBuilder<
			Scene,
			Vertex,
			UniformVariablesSpecificationsToUse
		>(uniformVariablesSpecifications);
		return newProgramWrapperBuilder;
	}
}
