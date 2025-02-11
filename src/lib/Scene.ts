import type {World} from "./World.ts";
import type {PerspectiveCamera} from "./PerspectiveCamera.ts";
export type Scene = Readonly<{
	world: World;
	camera: PerspectiveCamera;
}>;
