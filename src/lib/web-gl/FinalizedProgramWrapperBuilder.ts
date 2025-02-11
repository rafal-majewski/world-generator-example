import type {WithoutContextProgramWrapper} from "./WithoutContextProgramWrapper.ts";
export interface FinalizedProgramWrapperBuilder<Scene, Vertex> {
	build(gl: WebGL2RenderingContext): WithoutContextProgramWrapper<Scene, Vertex>;
}
