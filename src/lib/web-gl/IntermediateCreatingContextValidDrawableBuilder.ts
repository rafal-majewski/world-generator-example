import {CreatingContextCombinedDrawableBuilder} from "./CreatingContextCombinedDrawableBuilder.ts";
import type {CreatingContextDrawableBuilder} from "./CreatingContextDrawableBuilder.ts";
import type {CreatingContextValidDrawableBuilder} from "./CreatingContextValidDrawableBuilder.ts";
import type {WithoutContextDrawableBuilder} from "./WithoutContextDrawableBuilder.ts";
import {IntermediateCreatingContextInvalidDrawableBuilder} from "./IntermediateCreatingContextInvalidDrawableBuilder.ts";
import type {WithContextValidDrawableBuilder} from "./WithContextValidDrawableBuilder.ts";
import type {CreatingContextCombinedDrawable} from "./CreatingContextCombinedDrawable.ts";
export class IntermediateCreatingContextValidDrawableBuilder<Scene, CurrentContext>
	implements CreatingContextValidDrawableBuilder<Scene>
{
	private readonly builder: CreatingContextDrawableBuilder<Scene, CurrentContext>;
	private readonly restBuilder: WithContextValidDrawableBuilder<Scene, CurrentContext>;
	public constructor(
		builder: CreatingContextDrawableBuilder<Scene, CurrentContext>,
		restBuilder: WithContextValidDrawableBuilder<Scene, CurrentContext>,
	) {
		this.builder = builder;
		this.restBuilder = restBuilder;
	}
	public build(gl: WebGL2RenderingContext): CreatingContextCombinedDrawable<Scene, CurrentContext> {
		const combinedBuilder = new CreatingContextCombinedDrawableBuilder(
			this.builder,
			this.restBuilder,
		);
		const drawable = combinedBuilder.build(gl);
		return drawable;
	}
	public addWithoutContext(
		builder: WithoutContextDrawableBuilder<Scene>,
	): IntermediateCreatingContextValidDrawableBuilder<Scene, CurrentContext> {
		const newBuilderRestBuilder = this.restBuilder.addWithoutContext(builder);
		const newBuilder = new IntermediateCreatingContextValidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
	public addCreatingContext<AddingContext>(
		builder: CreatingContextDrawableBuilder<Scene, AddingContext>,
	): IntermediateCreatingContextInvalidDrawableBuilder<Scene, CurrentContext, AddingContext> {
		const newBuilderRestBuilder = this.restBuilder.addCreatingContext(builder);
		const newBuilder = new IntermediateCreatingContextInvalidDrawableBuilder(
			this.builder,
			newBuilderRestBuilder,
		);
		return newBuilder;
	}
}
