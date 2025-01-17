import {grassProgramWrapperCreator} from "./grassProgramWrapperCreator.ts";
import {skyboxProgramWrapperCreator} from "./skyboxWebGlProgramWrapperCreator.ts";
import {terrainFromSunProgramWrapperCreator} from "./terrainFromSunProgramWrapperCreator.ts";
import {terrainProgramWrapperCreator} from "./terrainProgramWrapperCreator.ts";
import {depthTestInitializable} from "./web-gl/depthTestInitializable.ts";
import {WebGlWrapperCreatorBuilder} from "./web-gl/WebGlWrapperCreatorBuilder.ts";
export const mainWebGlWrapperCreator = new WebGlWrapperCreatorBuilder()
	.startConfiguringInitializing()
	.add(depthTestInitializable)
	.startConfiguringDrawing()
	.addWithoutContext(skyboxProgramWrapperCreator)
	.addWithoutContext(terrainProgramWrapperCreator)
	.addWithoutContext(grassProgramWrapperCreator)
	.addWithoutContext(terrainFromSunProgramWrapperCreator)
	.build();
