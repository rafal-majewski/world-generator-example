import type {CreatingContextDrawable} from "./CreatingContextDrawable.ts";
import type {ForgettingContextDrawable} from "./ForgettingContextDrawable.ts";
import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
export class CreatingContextCombinedDrawable<Scene, Context>
	implements WithoutContextDrawable<Scene>
{
	private readonly firstDrawable: CreatingContextDrawable<Scene, Context>;
	private readonly restDrawable: ForgettingContextDrawable<Scene, Context>;
	public constructor(
		firstDrawable: CreatingContextDrawable<Scene, Context>,
		restDrawable: ForgettingContextDrawable<Scene, Context>,
	) {
		this.firstDrawable = firstDrawable;
		this.restDrawable = restDrawable;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene): undefined {
		const context = this.firstDrawable.draw(gl, scene);
		this.restDrawable.draw(gl, scene, context);
	}
}
