import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import type {Initializable} from "./Initializable.ts";
import {InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder} from "./InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder.ts";
import type {ValidDrawableBuilder} from "./ValidDrawableBuilder.ts";
import {WebGlWrapper} from "./WebGlWrapper.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export class ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder<Scene> {
	private readonly initializable: Initializable;
	private readonly drawableBuilder: ValidDrawableBuilder<Scene>;
	public constructor(initializable: Initializable, drawableBuilder: ValidDrawableBuilder<Scene>) {
		this.initializable = initializable;
		this.drawableBuilder = drawableBuilder;
	}
	public addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder<Scene> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addWithoutContext(builder);
		const newBuilder = new ValidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder(
			this.initializable,
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<NewFinalContext>(
		builder: CreatingContextDrawableBuilder<Scene, NewFinalContext>,
	): InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder<
		Scene,
		NewFinalContext
	> {
		const newBuilderDrawableBuilder = this.drawableBuilder.addCreatingContext(builder);
		const newBuilder = new InvalidConfiguringDrawingWithConfiguredInitializingWebGlWrapperBuilder(
			this.initializable,
			newBuilderDrawableBuilder,
		);
		return newBuilder;
	}
	public build(gl: WebGL2RenderingContext): WebGlWrapper<Scene> {
		this.initializable.initialize(gl);
		const drawable = this.drawableBuilder.build(gl);
		const wrapper = new WebGlWrapper(gl, drawable);
		return wrapper;
	}
}
