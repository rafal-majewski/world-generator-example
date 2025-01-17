import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
export class ForgettingContextCombinedDrawable<Scene, Context>
	implements ForgettingContextDrawable<Scene, Context>
{
	private readonly firstDrawable: ForgettingContextDrawable<Scene, Context>;
	private readonly restDrawable: WithoutContextDrawable<Scene>;
	public constructor(
		firstDrawable: ForgettingContextDrawable<Scene, Context>,
		restDrawable: WithoutContextDrawable<Scene>,
	) {
		this.firstDrawable = firstDrawable;
		this.restDrawable = restDrawable;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene, context: Context): undefined {
		this.firstDrawable.draw(gl, scene, context);
		this.restDrawable.draw(gl, scene);
	}
}
