import {ForgettingContextCombinedDrawable} from "./ForgettingContextCombinedDrawable.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class ForgettingContextCombinedDrawableCreator<Scene, Context> {
	private readonly headCreator: ForgettingContextDrawableCreator<Scene, Context>;
	private readonly tailCreator: WithoutContextDrawableCreator<Scene>;
	public constructor(
		headCreator: ForgettingContextDrawableCreator<Scene, Context>,
		tailCreator: WithoutContextDrawableCreator<Scene>,
	) {
		this.headCreator = headCreator;
		this.tailCreator = tailCreator;
	}
	public create(gl: WebGL2RenderingContext): ForgettingContextCombinedDrawable<Scene, Context> {
		const headDrawable = this.headCreator.create(gl);
		const tailDrawable = this.tailCreator.create(gl);
		const combinedDrawable = new ForgettingContextCombinedDrawable(headDrawable, tailDrawable);
		return combinedDrawable;
	}
}
