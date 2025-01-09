import type {RgbColorComponent} from "./RgbColorComponent.ts";
export type RgbColor = Readonly<{
	red: RgbColorComponent;
	green: RgbColorComponent;
	blue: RgbColorComponent;
}>;
