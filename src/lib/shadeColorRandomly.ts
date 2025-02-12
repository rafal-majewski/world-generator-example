import {computeRandomNormalizedNumberDeterministically} from "./random/computeRandomNumberDeterministically.ts";
import type {RgbColor} from "./RgbColor.ts";
import type {XyCoordinates} from "./XyCoordinates.ts";
export function shadeColorRandomly(color: RgbColor, position: XyCoordinates): RgbColor {
	return {
		red: Math.max(
			0,
			Math.min(
				1,
				color.red +
					(2 *
						(computeRandomNormalizedNumberDeterministically(position.x) *
							computeRandomNormalizedNumberDeterministically(position.y)) -
						1) *
						0.05,
			),
		),
		green: Math.max(
			0,
			Math.min(
				1,
				color.green +
					(2 *
						(computeRandomNormalizedNumberDeterministically(position.x) *
							computeRandomNormalizedNumberDeterministically(position.y)) -
						1) *
						0.05,
			),
		),
		blue: Math.max(
			0,
			Math.min(
				1,
				color.blue +
					(2 *
						(computeRandomNormalizedNumberDeterministically(position.x) *
							computeRandomNormalizedNumberDeterministically(position.y)) -
						1) *
						0.05,
			),
		),
	};
}
