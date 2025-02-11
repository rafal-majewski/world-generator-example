import type {Initializable} from "./Initializable.ts";
import {ValidConfiguringInitializingWebGlWrapperBuilder} from "./ValidConfiguringInitializingWebGlWrapperBuilder.ts";
export class EmptyConfiguringInitializingWebGlWrapperBuilder {
	public add(initializable: Initializable): ValidConfiguringInitializingWebGlWrapperBuilder {
		const newBuilder = new ValidConfiguringInitializingWebGlWrapperBuilder(initializable);
		return newBuilder;
	}
}
