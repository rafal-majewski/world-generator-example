import type {Initializable} from "./Initializable.ts";
import {ValidConfiguringInitializingWebGlWrapperCreatorBuilder} from "./ValidConfiguringInitializingWebGlWrapperCreatorBuilder.ts";
export class EmptyConfiguringInitializingWebGlWrapperCreatorBuilder {
	public add(initializable: Initializable): ValidConfiguringInitializingWebGlWrapperCreatorBuilder {
		const newBuilder = new ValidConfiguringInitializingWebGlWrapperCreatorBuilder(initializable);
		return newBuilder;
	}
}
