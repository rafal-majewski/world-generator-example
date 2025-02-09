import type {KeyboardState} from "./KeyboardState.ts";
import type {MouseState} from "./MouseState.ts";
export type Interactions = Readonly<{
	keyboardState: KeyboardState;
	mouseState: MouseState;
}>;
