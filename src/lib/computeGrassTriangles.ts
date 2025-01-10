import type {Grass} from "./Grass.ts";
import type {GrassVertex} from "./GrassVertex.ts";
import type {Triangle} from "./web-gl/Triangle.ts";
export function computeGrassTriangles(grass: Grass): readonly Triangle<GrassVertex>[] {
	return [
		[
			{
				position: {
					x: grass.plantPosition.x - Math.cos(grass.angleRadians) * 0.1,
					y: grass.plantPosition.y,
					z: grass.plantPosition.z + Math.sin(grass.angleRadians) * 0.1,
				},
				normal: {
					x: Math.cos(grass.angleRadians),
					y: 0.0,
					z: Math.sin(grass.angleRadians),
				},
			},
			{
				position: {
					x: grass.plantPosition.x,
					y: grass.plantPosition.y + grass.height,
					z: grass.plantPosition.z,
				},
				normal: {
					x: Math.cos(grass.angleRadians),
					y: 0.0,
					z: Math.sin(grass.angleRadians),
				},
			},
			{
				position: {
					x: grass.plantPosition.x + Math.cos(grass.angleRadians) * 0.1,
					y: grass.plantPosition.y,
					z: grass.plantPosition.z - Math.sin(grass.angleRadians) * 0.1,
				},
				normal: {
					x: Math.cos(grass.angleRadians),
					y: 0.0,
					z: Math.sin(grass.angleRadians),
				},
			},
		],
	];
}
