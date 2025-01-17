import type {ForgettingContextDrawableCreator} from "./ForgettingContextDrawableCreator.ts";
import {KeepingContextCombinedDrawable} from "./KeepingContextCombinedDrawable.ts";
export class KeepingContextCombinedDrawableCreator<Scene, Context>
	implements ForgettingContextDrawableCreator<Scene, Context>
{
	private readonly firstCreator: ForgettingContextDrawableCreator<Scene, Context>;
	private readonly restCreator: ForgettingContextDrawableCreator<Scene, Context>;
	public constructor(
		firstCreator: ForgettingContextDrawableCreator<Scene, Context>,
		restCreator: ForgettingContextDrawableCreator<Scene, Context>,
	) {
		this.firstCreator = firstCreator;
		this.restCreator = restCreator;
	}
	public create(gl: WebGL2RenderingContext): KeepingContextCombinedDrawable<Scene, Context> {
		const firstDrawable = this.firstCreator.create(gl);
		const restDrawable = this.restCreator.create(gl);
		const combinedDrawable = new KeepingContextCombinedDrawable(firstDrawable, restDrawable);
		return combinedDrawable;
	}
}
