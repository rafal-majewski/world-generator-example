import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import {FinalCreatingContextInvalidDrawableBuilder} from "./FinalCreatingContextInvalidDrawableBuilder.ts";
import {IntermediateWithoutContextInvalidDrawableBuilder} from "./IntermediateWithoutContextInvalidDrawableBuilder.ts";
import {IntermediateWithoutContextValidDrawableBuilder} from "./IntermediateWithoutContextValidDrawableBuilder.ts";
import type {WithoutContextDrawable} from "./WithoutContextDrawable.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
import type {WithoutContextValidDrawableBuilder} from "./WithoutContextValidDrawableBuilder.ts";
export class FinalWithoutContextValidDrawableBuilder<Scene>
	implements WithoutContextValidDrawableBuilder<Scene>
{
	private readonly builder: WithoutContextDrawableBuilder<Scene>;
	public constructor(builder: WithoutContextDrawableBuilder<Scene>) {
		this.builder = builder;
	}
	public build(gl: WebGL2RenderingContext): WithoutContextDrawable<Scene> {
		const drawable = this.builder.build(gl);
		return drawable;
	}
	public addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): IntermediateWithoutContextValidDrawableBuilder<Scene> {
		const newBuilderRestBuilder = new FinalWithoutContextValidDrawableBuilder(builder);
		const newBuilder = new IntermediateWithoutContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<Context>(
		builder: CreatingContextDrawableBuilder<Scene, Context>,
	): IntermediateWithoutContextInvalidDrawableBuilder<Scene, Context> {
		const newBuilderRestBuilder = new FinalCreatingContextInvalidDrawableBuilder(builder);
		const newBuilder = new IntermediateWithoutContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
