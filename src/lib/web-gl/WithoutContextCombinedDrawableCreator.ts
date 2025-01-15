import {WithoutContextCombinedDrawable} from "./WithoutContextCombinedDrawable.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class WithoutContextCombinedDrawableCreator<Scene> {
	private readonly headCreator: WithoutContextDrawableCreator<Scene>;
	private readonly tailCreator: WithoutContextDrawableCreator<Scene>;
	public constructor(
		headCreator: WithoutContextDrawableCreator<Scene>,
		tailCreators: WithoutContextDrawableCreator<Scene>,
	) {
		this.headCreator = headCreator;
		this.tailCreator = tailCreators;
	}
	public create(gl: WebGL2RenderingContext): WithoutContextCombinedDrawable<Scene> {
		const headDrawable = this.headCreator.create(gl);
		const tailDrawable = this.tailCreator.create(gl);
		const combinedDrawable = new WithoutContextCombinedDrawable(headDrawable, tailDrawable);
		return combinedDrawable;
	}
}
