import {terrainProgramWrapperBuilder} from "./terrainProgramWrapperBuilder.ts";
import {depthTestInitializable} from "./web-gl/depthTestInitializable.ts";
import {WebGlWrapperBuilder} from "./web-gl/WebGlWrapperBuilder.ts";
export const mainWebGlWrapperBuilder = new WebGlWrapperBuilder()
	.startConfiguringInitializing()
	.add(depthTestInitializable)
	.startConfiguringDrawing()
	// .addWithoutContext(skyboxProgramWrapperCreator)
	.addWithoutContext(terrainProgramWrapperBuilder);
// .addWithoutContext(grassProgramWrapperCreator)
// .addWithoutContext(terrainFromSunProgramWrapperCreator)
