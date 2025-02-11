import {CreatingContextCombinedDrawable} from "./CreatingContextCombinedDrawable.ts";
import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import type {ForgettingContextDrawableBuilder} from "./ForgettingContextDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export class CreatingContextCombinedDrawableBuilder<Scene, Context>
	implements WithoutContextDrawableBuilder<Scene>
{
	private readonly firstCreator: CreatingContextDrawableBuilder<Scene, Context>;
	private readonly restBuilder: ForgettingContextDrawableBuilder<Scene, Context>;
	public constructor(
		firstCreator: CreatingContextDrawableBuilder<Scene, Context>,
		restBuilder: ForgettingContextDrawableBuilder<Scene, Context>,
	) {
		this.firstCreator = firstCreator;
		this.restBuilder = restBuilder;
	}
	public build(gl: WebGL2RenderingContext): CreatingContextCombinedDrawable<Scene, Context> {
		const firstDrawable = this.firstCreator.build(gl);
		const restDrawable = this.restBuilder.build(gl);
		const combinedDrawable = new CreatingContextCombinedDrawable(firstDrawable, restDrawable);
		return combinedDrawable;
	}
}
