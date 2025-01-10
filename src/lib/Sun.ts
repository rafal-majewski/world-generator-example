import {OrthographicCamera} from "./OrthographicCamera.ts";
import type {RgbColor} from "./RgbColor.ts";
export class Sun {
	public readonly angleRadians: number;
	public readonly color: RgbColor;
	public readonly camera: OrthographicCamera;
	public constructor(angleRadians: number, color: RgbColor) {
		this.angleRadians = angleRadians;
		this.color = color;
		const distance = 20;
		this.camera = new OrthographicCamera(
			{
				x: 0,
				y: distance * Math.sin(angleRadians),
				z: distance * Math.cos(angleRadians),
			},
			{
				horizontalRadians: Math.PI,
				verticalRadians: -angleRadians,
			},
			{
				width: 30,
				height: 30,
			},
		);
	}
}
