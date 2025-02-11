import {computeBaseBlockColor} from "./computeBaseBlockColor.ts";
import type {RgbColor} from "./RgbColor.ts";
import {shadeColorRandomly} from "./shadeColorRandomly.ts";
export function computeTerrainColor(terrainHeight: number): RgbColor {
	const baseTerrainColor = computeBaseBlockColor(terrainHeight);
	const terrainColor = shadeColorRandomly(baseTerrainColor);
	return terrainColor;
}
