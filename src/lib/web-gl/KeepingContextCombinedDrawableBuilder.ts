import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import {KeepingContextCombinedDrawable} from "./KeepingContextCombinedDrawable.ts";
export class KeepingContextCombinedDrawableBuilder<Scene, Context>
	implements ForgettingContextDrawableBuilder<Scene, Context>
{
	private readonly firstCreator: ForgettingContextDrawableBuilder<Scene, Context>;
	private readonly restBuilder: ForgettingContextDrawableBuilder<Scene, Context>;
	public constructor(
		firstCreator: ForgettingContextDrawableBuilder<Scene, Context>,
		restBuilder: ForgettingContextDrawableBuilder<Scene, Context>,
	) {
		this.firstCreator = firstCreator;
		this.restBuilder = restBuilder;
	}
	public build(gl: WebGL2RenderingContext): KeepingContextCombinedDrawable<Scene, Context> {
		const firstDrawable = this.firstCreator.build(gl);
		const restDrawable = this.restBuilder.build(gl);
		const combinedDrawable = new KeepingContextCombinedDrawable(firstDrawable, restDrawable);
		return combinedDrawable;
	}
}
