import type {RgbColor} from "./RgbColor.ts";
import type {TriangleVertex} from "./TriangleVertex.ts";
export type Triangle = Readonly<{
	vertices: readonly [TriangleVertex, TriangleVertex, TriangleVertex];
	color: RgbColor;
}>;
