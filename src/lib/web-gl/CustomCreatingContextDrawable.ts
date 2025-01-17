import type {CreatingContextDrawable} from "./CreatingContextDrawable.ts";
export class CustomCreatingContextDrawable<Scene, Context>
	implements CreatingContextDrawable<Scene, Context>
{
	private readonly drawer: (gl: WebGL2RenderingContext, scene: Scene) => Context;
	public constructor(drawer: (gl: WebGL2RenderingContext, scene: Scene) => Context) {
		this.drawer = drawer;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene): Context {
		const context = this.drawer(gl, scene);
		return context;
	}
}
