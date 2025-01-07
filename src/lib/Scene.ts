import type {Block} from "./Block.ts";
import type {Camera} from "./Camera.ts";
import type {Sun} from "./Sun.ts";
export type Scene = Readonly<{
	blocks: readonly Block[];
	camera: Camera;
	sun: Sun;
}>;
