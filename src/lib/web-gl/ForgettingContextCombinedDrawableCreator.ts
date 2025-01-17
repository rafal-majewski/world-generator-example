import {ForgettingContextCombinedDrawable} from "./ForgettingContextCombinedDrawable.ts";
import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import type {WithoutContextDrawableCreator} from "./WithoutContextDrawableCreator.ts";
export class ForgettingContextCombinedDrawableCreator<Scene, Context>
	implements ForgettingContextDrawableCreator<Scene, Context>
{
	private readonly firstCreator: ForgettingContextDrawableCreator<Scene, Context>;
	private readonly restCreator: WithoutContextDrawableCreator<Scene>;
	public constructor(
		firstCreator: ForgettingContextDrawableCreator<Scene, Context>,
		restCreator: WithoutContextDrawableCreator<Scene>,
	) {
		this.firstCreator = firstCreator;
		this.restCreator = restCreator;
	}
	public create(gl: WebGL2RenderingContext): ForgettingContextCombinedDrawable<Scene, Context> {
		const firstDrawable = this.firstCreator.create(gl);
		const restDrawable = this.restCreator.create(gl);
		const combinedDrawable = new ForgettingContextCombinedDrawable(firstDrawable, restDrawable);
		return combinedDrawable;
	}
}
