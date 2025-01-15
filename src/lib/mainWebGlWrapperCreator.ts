import {grassProgramWrapperCreator} from "./grassProgramWrapperCreator.ts";
import type {Scene} from "./Scene.ts";
import {skyboxProgramWrapperCreator} from "./skyboxWebGlProgramWrapperCreator.ts";
import {terrainFromSunProgramWrapperCreator} from "./terrainFromSunProgramWrapperCreator.ts";
import {terrainProgramWrapperCreator} from "./terrainProgramWrapperCreator.ts";
import {depthTestInitializable} from "./web-gl/depthTestInitializable.ts";
import {WebGlWrapperCreatorBuilder} from "./web-gl/WebGlWrapperCreatorBuilder.ts";
class CustomProgramWrapper
export const mainWebGlWrapperCreator = new WebGlWrapperCreatorBuilder<Scene>()
	.startConfiguringInitializing()
	.add(depthTestInitializable)
	.startConfiguringDrawing()
	.addForgettingContext(skyboxProgramWrapperCreator)
	.addKeepingContext(terrainProgramWrapperCreator)
	.addKeepingContext(grassProgramWrapperCreator)
	.addCreatingContext(terrainFromSunProgramWrapperCreator)
	.build();
