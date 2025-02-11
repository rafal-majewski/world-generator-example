import {WithoutContextCombinedDrawable} from "./WithoutContextCombinedDrawable.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
export class WithoutContextCombinedDrawableBuilder<Scene>
	implements WithoutContextDrawableBuilder<Scene>
{
	private readonly headCreator: WithoutContextDrawableBuilder<Scene>;
	private readonly tailCreator: WithoutContextDrawableBuilder<Scene>;
	public constructor(
		headCreator: WithoutContextDrawableBuilder<Scene>,
		tailCreators: WithoutContextDrawableBuilder<Scene>,
	) {
		this.headCreator = headCreator;
		this.tailCreator = tailCreators;
	}
	public build(gl: WebGL2RenderingContext): WithoutContextCombinedDrawable<Scene> {
		const headDrawable = this.headCreator.build(gl);
		const tailDrawable = this.tailCreator.build(gl);
		const combinedDrawable = new WithoutContextCombinedDrawable(headDrawable, tailDrawable);
		return combinedDrawable;
	}
}
