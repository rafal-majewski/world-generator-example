import {CreatingContextCombinedDrawable} from "./CreatingContextCombinedDrawable.ts";
import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class CreatingContextCombinedDrawableCreator<Scene, Context>
	implements WithoutContextDrawableCreator<Scene>
{
	private readonly headCreator: CreatingContextDrawableCreator<Scene, Context>;
	private readonly tailCreator: ForgettingContextDrawableCreator<Scene, Context>;
	public constructor(
		headCreator: CreatingContextDrawableCreator<Scene, Context>,
		tailCreator: ForgettingContextDrawableCreator<Scene, Context>,
	) {
		this.headCreator = headCreator;
		this.tailCreator = tailCreator;
	}
	public create(gl: WebGL2RenderingContext): CreatingContextCombinedDrawable<Scene, Context> {
		const headDrawable = this.headCreator.create(gl);
		const tailDrawable = this.tailCreator.create(gl);
		const combinedDrawable = new CreatingContextCombinedDrawable(headDrawable, tailDrawable);
		return combinedDrawable;
	}
}
