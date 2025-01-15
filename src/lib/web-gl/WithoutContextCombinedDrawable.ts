import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
export class WithoutContextCombinedDrawable<Scene> {
	private readonly headDrawable: WithoutContextDrawable<Scene>;
	private readonly tailDrawable: WithoutContextDrawable<Scene>;
	public constructor(
		headDrawable: WithoutContextDrawable<Scene>,
		tailDrawable: WithoutContextDrawable<Scene>,
	) {
		this.headDrawable = headDrawable;
		this.tailDrawable = tailDrawable;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene): void {
		this.headDrawable.draw(gl, scene);
		this.tailDrawable.draw(gl, scene);
	}
}
