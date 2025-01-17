import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
export class KeepingContextCombinedDrawable<Scene, Context>
	implements ForgettingContextDrawable<Scene, Context>
{
	private readonly firstDrawable: ForgettingContextDrawable<Scene, Context>;
	private readonly restDrawable: ForgettingContextDrawable<Scene, Context>;
	public constructor(
		firstDrawable: ForgettingContextDrawable<Scene, Context>,
		restDrawable: ForgettingContextDrawable<Scene, Context>,
	) {
		this.firstDrawable = firstDrawable;
		this.restDrawable = restDrawable;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene, context: Context): undefined {
		this.firstDrawable.draw(gl, scene, context);
		this.restDrawable.draw(gl, scene, context);
	}
}
