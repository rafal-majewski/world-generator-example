import type {PerspectiveCamera} from "./PerspectiveCamera.ts";
import type {Sun} from "./Sun.ts";
import type {World} from "./World.ts";
export type Scene = Readonly<{
	world: World;
	camera: PerspectiveCamera;
	sun: Sun;
}>;
