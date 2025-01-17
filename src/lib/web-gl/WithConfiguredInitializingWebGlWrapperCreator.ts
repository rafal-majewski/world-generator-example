import type {Initializable} from "./Initializable.ts";
import {WebGlWrapper} from "./WebGlWrapper.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class WithConfiguredInitializingWebGlWrapperCreator<Scene> {
	private readonly drawableCreator: WithoutContextDrawableCreator<Scene>;
	private readonly initializable: Initializable;
	public constructor(
		initializable: Initializable,
		drawableCreator: WithoutContextDrawableCreator<Scene>,
	) {
		this.initializable = initializable;
		this.drawableCreator = drawableCreator;
	}
	public create(gl: WebGL2RenderingContext): WebGlWrapper<Scene> {
		this.initializable.initialize(gl);
		const drawable = this.drawableCreator.create(gl);
		const wrapper = new WebGlWrapper(gl, drawable);
		return wrapper;
	}
}
