import {WebGlWrapper} from "./WebGlWrapper.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class WithoutConfiguredInitializingWebGlWrapperCreator<Scene> {
	private readonly drawableCreator: WithoutContextDrawableCreator<Scene>;
	public constructor(drawableCreator: WithoutContextDrawableCreator<Scene>) {
		this.drawableCreator = drawableCreator;
	}
	public create(gl: WebGL2RenderingContext): WebGlWrapper<Scene> {
		const drawable = this.drawableCreator.create(gl);
		const wrapper = new WebGlWrapper(gl, drawable);
		return wrapper;
	}
}
