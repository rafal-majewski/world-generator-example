import type {KeyCodesState} from "./KeyCodesState.ts";
export type KeyboardState = Readonly<{
	keyCodesStates: KeyCodesState;
}>;
