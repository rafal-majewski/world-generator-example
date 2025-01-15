import type {Initializable} from "./Initializable.ts";
import {WebGlWrapper} from "./WebGlWrapper.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class WebGlWrapperCreator<Scene> {
	private readonly drawableCreator: WithoutContextDrawableCreator<Scene>;
	private readonly initializables: readonly Initializable[];
	public constructor(
		initializables: readonly Initializable[],
		drawableCreator: WithoutContextDrawableCreator<Scene>,
	) {
		this.initializables = initializables;
		this.drawableCreator = drawableCreator;
	}
	public create(gl: WebGL2RenderingContext): WebGlWrapper<Scene> {
		for (const initializable of this.initializables) {
			initializable.initialize(gl);
		}
		const drawable = this.drawableCreator.create(gl);
		const wrapper = new WebGlWrapper(gl, drawable);
		return wrapper;
	}
}
