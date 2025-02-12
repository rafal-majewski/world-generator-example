import {computeBaseBlockColor} from "./computeBaseBlockColor.ts";
import type {RgbColor} from "./RgbColor.ts";
import {shadeColorRandomly} from "./shadeColorRandomly.ts";
import type {XyCoordinates} from "./XyCoordinates.ts";
export function computeTerrainColor(terrainHeight: number, position: XyCoordinates): RgbColor {
	const baseTerrainColor = computeBaseBlockColor(terrainHeight);
	const terrainColor = shadeColorRandomly(baseTerrainColor, position);
	return terrainColor;
}
