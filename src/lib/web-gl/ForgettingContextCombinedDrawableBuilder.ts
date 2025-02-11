import {ForgettingContextCombinedDrawable} from "./ForgettingContextCombinedDrawable.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export class ForgettingContextCombinedDrawableBuilder<Scene, Context>
	implements ForgettingContextDrawableBuilder<Scene, Context>
{
	private readonly firstCreator: ForgettingContextDrawableBuilder<Scene, Context>;
	private readonly restBuilder: WithoutContextDrawableBuilder<Scene>;
	public constructor(
		firstCreator: ForgettingContextDrawableBuilder<Scene, Context>,
		restBuilder: WithoutContextDrawableBuilder<Scene>,
	) {
		this.firstCreator = firstCreator;
		this.restBuilder = restBuilder;
	}
	public build(gl: WebGL2RenderingContext): ForgettingContextCombinedDrawable<Scene, Context> {
		const firstDrawable = this.firstCreator.build(gl);
		const restDrawable = this.restBuilder.build(gl);
		const combinedDrawable = new ForgettingContextCombinedDrawable(firstDrawable, restDrawable);
		return combinedDrawable;
	}
}
