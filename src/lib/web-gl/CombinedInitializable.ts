import type {Initializable} from "./Initializable.ts";
export class CombinedInitializable implements Initializable {
	private readonly firstInitializable: Initializable;
	private readonly restInitializable: Initializable;
	public constructor(firstInitializable: Initializable, restInitializable: Initializable) {
		this.firstInitializable = firstInitializable;
		this.restInitializable = restInitializable;
	}
	public initialize(gl: WebGL2RenderingContext): undefined {
		this.firstInitializable.initialize(gl);
		this.restInitializable.initialize(gl);
	}
}
