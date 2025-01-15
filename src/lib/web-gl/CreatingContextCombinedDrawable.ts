import type {CreatingContextDrawable} from "./CreatingContextDrawable.ts";
import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
export class CreatingContextCombinedDrawable<Scene, Context>
	implements WithoutContextDrawable<Scene>
{
	private readonly headDrawable: CreatingContextDrawable<Scene, Context>;
	private readonly tailDrawable: ForgettingContextDrawable<Scene, Context>;
	public constructor(
		headDrawable: CreatingContextDrawable<Scene, Context>,
		tailDrawable: ForgettingContextDrawable<Scene, Context>,
	) {
		this.headDrawable = headDrawable;
		this.tailDrawable = tailDrawable;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene): void {
		const context = this.headDrawable.draw(gl, scene);
		this.tailDrawable.draw(gl, scene, context);
	}
}
