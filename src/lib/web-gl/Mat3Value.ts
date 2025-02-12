import type {Value} from "./Value.ts";
export abstract class Mat3Value implements Value {
	public readonly type = "mat3";
	public abstract stringify(): string;
}
