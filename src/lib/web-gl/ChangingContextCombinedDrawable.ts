import type {ChangingContextDrawable} from "./ChangingContextDrawable.ts";
import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
export class ChangingContextCombinedDrawable<Scene, OldContext, NewContext>
	implements ForgettingContextDrawable<Scene, OldContext>
{
	private readonly firstDrawable: ChangingContextDrawable<Scene, OldContext, NewContext>;
	private readonly restDrawable: ForgettingContextDrawable<Scene, NewContext>;
	public constructor(
		firstDrawable: ChangingContextDrawable<Scene, OldContext, NewContext>,
		restDrawable: ForgettingContextDrawable<Scene, NewContext>,
	) {
		this.firstDrawable = firstDrawable;
		this.restDrawable = restDrawable;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene, context: OldContext): undefined {
		const newContext = this.firstDrawable.draw(gl, scene, context);
		this.restDrawable.draw(gl, scene, newContext);
	}
}
