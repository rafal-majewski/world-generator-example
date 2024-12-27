import type {VariableName} from "../../../variable-name/VariableName.ts";
import type {VariableNameToVariableType} from "../../../variable-name-to-variable-type/VariableNameToVariableType.ts";
import type {WithoutUniformsWebGlProgramWrapper} from "../../../program-wrapper/WithoutUniformsWebGlProgramWrapper.ts";
import type {WebGlWrapperComponent} from "../../WebGlWrapperComponent.ts";
import type {TrianglesSelector} from "../../triangles-selector/TrianglesSelector.ts";
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
	private readonly selectTriangles: TrianglesSelector<Scene, Triangle>;
	public constructor(
		programWrapper: WithoutUniformsWebGlProgramWrapper<
			AttributeVariableName,
			AttributeVariableNameToVariableType,
			Triangle
		>,
		selectTriangles: TrianglesSelector<Scene, Triangle>,
	) {
		this.programWrapper = programWrapper;
		this.selectTriangles = selectTriangles;
	}
	public draw(gl: WebGL2RenderingContext, scene: Scene): void {
		const triangles = this.selectTriangles(scene);
		this.programWrapper.draw(gl, triangles);
	}
}
