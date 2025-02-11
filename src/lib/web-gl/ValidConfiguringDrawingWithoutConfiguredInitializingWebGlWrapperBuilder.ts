import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import {InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder} from "./InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder.ts";
import type {ValidDrawableBuilder} from "./ValidDrawableBuilder.ts";
import {WebGlWrapper} from "./WebGlWrapper.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export class ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder<Scene> {
	private readonly drawableBuilder: ValidDrawableBuilder<Scene>;
	public constructor(drawableBuilder: ValidDrawableBuilder<Scene>) {
		this.drawableBuilder = drawableBuilder;
	}
	public addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder<Scene> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addWithoutContext(builder);
		const newBuilder = new ValidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder(
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<NewFinalContext>(
		builder: CreatingContextDrawableBuilder<Scene, NewFinalContext>,
	): InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addCreatingContext(builder);
		const newBuilder =
			new InvalidConfiguringDrawingWithoutConfiguredInitializingWebGlWrapperBuilder(
				newBuilderDrawableBuilder,
			);
		return newBuilder;
	}
	public build(gl: WebGL2RenderingContext): WebGlWrapper<Scene> {
		const drawable = this.drawableBuilder.build(gl);
		const wrapper = new WebGlWrapper(gl, drawable);
		return wrapper;
	}
}
