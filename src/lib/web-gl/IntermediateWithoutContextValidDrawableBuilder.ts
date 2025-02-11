import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import type {WithoutContextValidDrawableBuilder} from "./WithoutContextValidDrawableBuilder.ts";
import {WithoutContextCombinedDrawableBuilder} from "./WithoutContextCombinedDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
import {IntermediateWithoutContextInvalidDrawableBuilder} from "./IntermediateWithoutContextInvalidDrawableBuilder.ts";
import type {WithoutContextCombinedDrawable} from "./WithoutContextCombinedDrawable.ts";
export class IntermediateWithoutContextValidDrawableBuilder<Scene>
	implements WithoutContextValidDrawableBuilder<Scene>
{
	private readonly builder: WithoutContextDrawableBuilder<Scene>;
	private readonly restBuilder: WithoutContextValidDrawableBuilder<Scene>;
	public constructor(
		builder: WithoutContextDrawableBuilder<Scene>,
		restBuilder: WithoutContextValidDrawableBuilder<Scene>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public build(gl: WebGL2RenderingContext): WithoutContextCombinedDrawable<Scene> {
		const combinedBuilder = new WithoutContextCombinedDrawableBuilder(
			this.builder,
			this.restBuilder,
		);
		const drawable = combinedBuilder.build(gl);
		return drawable;
	}
	public addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): IntermediateWithoutContextValidDrawableBuilder<Scene> {
		const newRestBuilder = this.restBuilder.addWithoutContext(builder);
		const newBuilder = new IntermediateWithoutContextValidDrawableBuilder(
			this.builder,
			newRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<Context>(
		builder: CreatingContextDrawableBuilder<Scene, Context>,
	): IntermediateWithoutContextInvalidDrawableBuilder<Scene, Context> {
		const newRestBuilder = this.restBuilder.addCreatingContext(builder);
		const newBuilder = new IntermediateWithoutContextInvalidDrawableBuilder(
			this.builder,
			newRestBuilder,
		);
		return newBuilder;
	}
}
