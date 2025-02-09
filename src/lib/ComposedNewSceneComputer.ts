import type {Interactions} from "./Interactions.ts";
import type {NewSceneComputer} from "./NewSceneComputer.ts";
import type {Scene} from "./Scene.ts";
export class ComposedNewSceneComputer implements NewSceneComputer {
	private readonly computers: readonly NewSceneComputer[];
	public constructor(computers: readonly NewSceneComputer[]) {
		this.computers = computers;
	}
	public compute(scene: Scene, interactions: Interactions): Scene {
		const newScene: Scene = this.computers.reduce<Scene>(
			(accumulatedNewScene: Scene, computer: NewSceneComputer): Scene => {
				const newAccumulatedNewScene: Scene = computer.compute(accumulatedNewScene, interactions);
				return newAccumulatedNewScene;
			},
			scene,
		);
		return newScene;
	}
}
