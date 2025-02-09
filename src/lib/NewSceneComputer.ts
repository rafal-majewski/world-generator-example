import type {Interactions} from "./Interactions.ts";
import type {Scene} from "./Scene.ts";
export interface NewSceneComputer {
	compute(scene: Scene, interactions: Interactions): Scene;
}
