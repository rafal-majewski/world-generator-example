import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
export class ForgettingContextCombinedDrawable<Scene, Context>
	implements ForgettingContextDrawable<Scene, Context>
{
	private readonly headDrawable: ForgettingContextDrawable<Scene, Context>;
	private readonly tailDrawable: WithoutContextDrawable<Scene>;
	public constructor(
		headDrawable: ForgettingContextDrawable<Scene, Context>,
		tailDrawable: WithoutContextDrawable<Scene>,
	) {
		this.headDrawable = headDrawable;
		this.tailDrawable = tailDrawable;
	}
	public draw(gl: WebGL2RenderingContext, context: Context, scene: Scene): undefined {
		this.headDrawable.draw(gl, context, scene);
		this.tailDrawable.draw(gl, scene);
	}
}
