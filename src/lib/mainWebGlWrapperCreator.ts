import type {Scene} from "./Scene.ts";
// import type {ChangingContextDrawable} from "./web-gl/ChangingContextDrawable.ts";
// import type {ChangingContextDrawableCreator} from "./web-gl/ChangingContextDrawableCreator.ts";
import type {CreatingContextDrawable} from "./web-gl/CreatingContextDrawable.ts";
import type {CreatingContextDrawableCreator} from "./web-gl/CreatingContextDrawableCreator.ts";
import {depthTestInitializable} from "./web-gl/depthTestInitializable.ts";
import type {ForgettingContextDrawable} from "./web-gl/ForgettingContextDrawable.ts";
import type {ForgettingContextDrawableCreator} from "./web-gl/ForgettingContextDrawableCreator.ts";
import type {KeepingContextDrawable} from "./web-gl/KeepingContextDrawable.ts";
import type {KeepingContextDrawableCreator} from "./web-gl/KeepingContextDrawableCreator.ts";
import {WebGlWrapperCreatorBuilder} from "./web-gl/WebGlWrapperCreatorBuilder.ts";
// import type {WithoutContextDrawable} from "./web-gl/WithoutContextDrawable.ts";
// import type {WithoutContextDrawableCreator} from "./web-gl/WithoutContextDrawableCreator.ts";
// class CustomChangingContextDrawable<Scene, OldContext, NewContext>
// 	implements ChangingContextDrawable<Scene, OldContext, NewContext>
// {
// 	private readonly drawer: (
// 		gl: WebGL2RenderingContext,
// 		context: OldContext,
// 		scene: Scene,
// 	) => NewContext;
// 	public constructor(
// 		drawer: (gl: WebGL2RenderingContext, scene: Scene, context: OldContext) => NewContext,
// 	) {
// 		this.drawer = drawer;
// 	}
// 	public draw(gl: WebGL2RenderingContext, scene: Scene, context: OldContext): NewContext {
// 		const newContext = this.drawer(gl, scene, context);
// 		return newContext;
// 	}
// }
// class CustomChangingContextDrawableCreator<Scene, OldContext, NewContext>
// 	implements ChangingContextDrawableCreator<Scene, OldContext, NewContext>
// {
// 	private readonly drawer: (
// 		gl: WebGL2RenderingContext,
// 		context: OldContext,
// 		scene: Scene,
// 	) => NewContext;
// 	public constructor(
// 		drawer: (gl: WebGL2RenderingContext, scene: Scene, context: OldContext) => NewContext,
// 	) {
// 		this.drawer = drawer;
// 	}
// 	public create(): ChangingContextDrawable<Scene, OldContext, NewContext> {
// 		const drawable = new CustomChangingContextDrawable(this.drawer);
// 		return drawable;
// 	}
// }
class CustomKeepingContextDrawable<Scene, Context>
	implements KeepingContextDrawable<Scene, Context>
{
	private readonly drawer: (
		gl: WebGL2RenderingContext,
		scene: Scene,
		context: Context,
	) => undefined;
	public constructor(
		drawer: (gl: WebGL2RenderingContext, scene: Scene, context: Context) => undefined,
	) {
		this.drawer = drawer;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene, context: Context): Context {
		this.drawer(gl, scene, context);
		return context;
	}
}
class CustomKeepingContextDrawableCreator<Scene, Context>
	implements KeepingContextDrawableCreator<Scene, Context>
{
	private readonly drawer: (
		gl: WebGL2RenderingContext,
		scene: Scene,
		context: Context,
	) => undefined;
	public constructor(
		drawer: (gl: WebGL2RenderingContext, scene: Scene, context: Context) => undefined,
	) {
		this.drawer = drawer;
	}
	public create(): CustomKeepingContextDrawable<Scene, Context> {
		const drawable = new CustomKeepingContextDrawable(this.drawer);
		return drawable;
	}
}
class CustomCreatingContextDrawable<Scene, Context>
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
class CustomCreatingContextDrawableCreator<Scene, Context>
	implements CreatingContextDrawableCreator<Scene, Context>
{
	private readonly drawer: (gl: WebGL2RenderingContext, scene: Scene) => Context;
	public constructor(drawer: (gl: WebGL2RenderingContext, scene: Scene) => Context) {
		this.drawer = drawer;
	}
	public create(): CustomCreatingContextDrawable<Scene, Context> {
		const drawable = new CustomCreatingContextDrawable(this.drawer);
		return drawable;
	}
}
class CustomForgettingContextDrawable<Scene, Context>
	implements ForgettingContextDrawable<Scene, Context>
{
	private readonly drawer: (
		gl: WebGL2RenderingContext,
		scene: Scene,
		context: Context,
	) => undefined;
	public constructor(
		drawer: (gl: WebGL2RenderingContext, scene: Scene, context: Context) => undefined,
	) {
		this.drawer = drawer;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene, context: Context): undefined {
		this.drawer(gl, scene, context);
	}
}
class CustomForgettingContextDrawableCreator<Scene, Context>
	implements ForgettingContextDrawableCreator<Scene, Context>
{
	private readonly drawer: (
		gl: WebGL2RenderingContext,
		scene: Scene,
		context: Context,
	) => undefined;
	public constructor(
		drawer: (gl: WebGL2RenderingContext, scene: Scene, context: Context) => undefined,
	) {
		this.drawer = drawer;
	}
	public create(): CustomForgettingContextDrawable<Scene, Context> {
		const drawable = new CustomForgettingContextDrawable(this.drawer);
		return drawable;
	}
}
// class CustomWithoutContextDrawable<Scene> implements WithoutContextDrawable<Scene> {
// 	private readonly drawer: (gl: WebGL2RenderingContext, scene: Scene) => undefined;
// 	public constructor(drawer: (gl: WebGL2RenderingContext, scene: Scene) => undefined) {
// 		this.drawer = drawer;
// 	}
// 	public draw(gl: WebGL2RenderingContext, scene: Scene): undefined {
// 		this.drawer(gl, scene);
// 	}
// }
// class CustomWithoutContextDrawableCreator<Scene> implements WithoutContextDrawableCreator<Scene> {
// 	private readonly drawer: (gl: WebGL2RenderingContext, scene: Scene) => undefined;
// 	public constructor(drawer: (gl: WebGL2RenderingContext, scene: Scene) => undefined) {
// 		this.drawer = drawer;
// 	}
// 	public create(): WithoutContextDrawable<Scene> {
// 		const drawable = new CustomWithoutContextDrawable(this.drawer);
// 		return drawable;
// 	}
// }
export const mainWebGlWrapperCreator = new WebGlWrapperCreatorBuilder<Scene>()
	.startConfiguringInitializing()
	.add(depthTestInitializable)
	// FIX with mapping
	.startConfiguringDrawing()
	.addCreatingContext(new CustomCreatingContextDrawableCreator(() => 5))
	.addKeepingContext(
		new CustomKeepingContextDrawableCreator((gl, c) => {
			console.log(c);
		}),
	)
	.addForgettingContext(new CustomForgettingContextDrawableCreator((gl, c) => {}));
// // .addWithoutContext(new CustomWithoutContextDrawableCreator(() => {}));
// // .addForgettingContext(skyboxProgramWrapperCreator)
// // .addKeepingContext(terrainProgramWrapperCreator)
// // .addKeepingContext(grassProgramWrapperCreator)
// // // .addCreatingContext(terrainFromSunProgramWrapperCreator)
// .build();
