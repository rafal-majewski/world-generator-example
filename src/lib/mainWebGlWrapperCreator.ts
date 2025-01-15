import {grassProgramWrapperCreator} from "./grassProgramWrapperCreator.ts";
import {skyboxProgramWrapperCreator} from "./skyboxWebGlProgramWrapperCreator.ts";
import {terrainProgramWrapperCreator} from "./terrainProgramWrapperCreator.ts";
import {depthTestInitializable} from "./web-gl/depthTestInitializable.ts";
import {WebGlWrapperCreatorBuilder} from "./web-gl/WebGlWrapperCreatorBuilder.ts";
export const mainWebGlWrapperCreator = new WebGlWrapperCreatorBuilder()
	.startConfiguringInitializing()
	.add(depthTestInitializable)
	.startConfiguringDrawing()
	// .addCreatingContext(terrainFromSunProgramWrapperCreator)
	.addWithoutContext(skyboxProgramWrapperCreator)
	.addWithoutContext(terrainProgramWrapperCreator)
	.addWithoutContext(grassProgramWrapperCreator)
	.build();
