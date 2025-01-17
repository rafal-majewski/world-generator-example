import {CreatingContextCombinedDrawable} from "./CreatingContextCombinedDrawable.ts";
import type {CreatingContextDrawableCreator} from "./CreatingContextDrawableCreator.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class CreatingContextCombinedDrawableCreator<Scene, Context>
	implements WithoutContextDrawableCreator<Scene>
{
	private readonly firstCreator: CreatingContextDrawableCreator<Scene, Context>;
	private readonly restCreator: ForgettingContextDrawableCreator<Scene, Context>;
	public constructor(
		firstCreator: CreatingContextDrawableCreator<Scene, Context>,
		restCreator: ForgettingContextDrawableCreator<Scene, Context>,
	) {
		this.firstCreator = firstCreator;
		this.restCreator = restCreator;
	}
	public create(gl: WebGL2RenderingContext): CreatingContextCombinedDrawable<Scene, Context> {
		const firstDrawable = this.firstCreator.create(gl);
		const restDrawable = this.restCreator.create(gl);
		const combinedDrawable = new CreatingContextCombinedDrawable(firstDrawable, restDrawable);
		return combinedDrawable;
	}
}
