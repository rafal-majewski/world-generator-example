import type {ChangingContextDrawable} from "./ChangingContextDrawable.ts";
import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
export class ChangingContextCombinedDrawable<Scene, OldContext, NewContext>
	implements ForgettingContextDrawable<Scene, OldContext>
{
	private readonly headDrawable: ChangingContextDrawable<Scene, OldContext, NewContext>;
	private readonly tailDrawable: ForgettingContextDrawable<Scene, NewContext>;
	public constructor(
		headDrawable: ChangingContextDrawable<Scene, OldContext, NewContext>,
		tailDrawable: ForgettingContextDrawable<Scene, NewContext>,
	) {
		this.headDrawable = headDrawable;
		this.tailDrawable = tailDrawable;
	}
	public draw(gl: WebGL2RenderingContext, context: OldContext, scene: Scene): undefined {
		const newContext = this.headDrawable.draw(gl, context, scene);
		this.tailDrawable.draw(gl, newContext, scene);
	}
}
