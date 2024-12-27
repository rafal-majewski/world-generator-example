import type {VariableName} from "../../../VariableName.ts";
import type {VariableNameToVariableType} from "../../../VariableNameToVariableType.ts";
import type {WithoutUniformsWebGlProgramWrapper} from "../../../program-wrapper/WithoutUniformsWebGlProgramWrapper.ts";
import type {WebGlWrapperComponent} from "../../WebGlWrapperComponent.ts";
export class WithoutUniformsWebGlWrapperComponent<
	Scene,
	AttributeVariableName extends VariableName,
	AttributeVariableNameToVariableType extends VariableNameToVariableType<AttributeVariableName>,
	Triangle,
> implements WebGlWrapperComponent<Scene>
{
	private readonly programWrapper: WithoutUniformsWebGlProgramWrapper<
		AttributeVariableName,
		AttributeVariableNameToVariableType,
		Triangle
	>;
	private readonly selectTriangles: (scene: Scene) => readonly Triangle[];
	public constructor(
		programWrapper: WithoutUniformsWebGlProgramWrapper<
			AttributeVariableName,
			AttributeVariableNameToVariableType,
			Triangle
		>,
		selectTriangles: (scene: Scene) => readonly Triangle[],
	) {
		this.programWrapper = programWrapper;
		this.selectTriangles = selectTriangles;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene): void {
		const triangles = this.selectTriangles(scene);
		this.programWrapper.draw(gl, triangles);
	}
}
