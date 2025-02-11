import {ChangingContextCombinedDrawable} from "./ChangingContextCombinedDrawable.ts";
import type {ChangingContextDrawableBuilder} from "./ChangingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
export class ChangingContextCombinedDrawableBuilder<Scene, OldContext, NewContext>
	implements ForgettingContextDrawableBuilder<Scene, OldContext>
{
	private readonly headCreator: ChangingContextDrawableBuilder<Scene, OldContext, NewContext>;
	private readonly tailCreator: ForgettingContextDrawableBuilder<Scene, NewContext>;
	public constructor(
		headCreator: ChangingContextDrawableBuilder<Scene, OldContext, NewContext>,
		tailCreator: ForgettingContextDrawableBuilder<Scene, NewContext>,
	) {
		this.headCreator = headCreator;
		this.tailCreator = tailCreator;
	}
	public build(
		gl: WebGL2RenderingContext,
	): ChangingContextCombinedDrawable<Scene, OldContext, NewContext> {
		const headDrawable = this.headCreator.build(gl);
		const tailDrawable = this.tailCreator.build(gl);
		const combinedDrawable = new ChangingContextCombinedDrawable(headDrawable, tailDrawable);
		return combinedDrawable;
	}
}
