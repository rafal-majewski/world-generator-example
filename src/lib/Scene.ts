import type {MainWorldChunk} from "./MainWorldChunk.ts";
import type {PerspectiveCamera} from "./PerspectiveCamera.ts";
export type Scene = Readonly<{
	mainWorldChunk: MainWorldChunk;
	camera: PerspectiveCamera;
}>;
