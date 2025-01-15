import {ChangingContextCombinedDrawable} from "./ChangingContextCombinedDrawable.ts";
import type {ChangingContextDrawableCreator} from "./ChangingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
export class ChangingContextCombinedDrawableCreator<Scene, OldContext, NewContext>
	implements ForgettingContextDrawableCreator<Scene, OldContext>
{
	private readonly headCreator: ChangingContextDrawableCreator<Scene, OldContext, NewContext>;
	private readonly tailCreator: ForgettingContextDrawableCreator<Scene, NewContext>;
	public constructor(
		headCreator: ChangingContextDrawableCreator<Scene, OldContext, NewContext>,
		tailCreator: ForgettingContextDrawableCreator<Scene, NewContext>,
	) {
		this.headCreator = headCreator;
		this.tailCreator = tailCreator;
	}
	public create(
		gl: WebGL2RenderingContext,
	): ChangingContextCombinedDrawable<Scene, OldContext, NewContext> {
		const headDrawable = this.headCreator.create(gl);
		const tailDrawable = this.tailCreator.create(gl);
		const combinedDrawable = new ChangingContextCombinedDrawable(headDrawable, tailDrawable);
		return combinedDrawable;
	}
}
