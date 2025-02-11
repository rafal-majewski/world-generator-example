import type {AttributeVariablesSpecifications} from "./AttributeVariablesSpecifications.ts";
import type {FinalizedProgramWrapperBuilder} from "./FinalizedProgramWrapperBuilder.ts";
import type {FragmentShaderSourceCode} from "./FragmentShaderSourceCode.ts";
import type {TrianglesSelector} from "./TrianglesSelector.ts";
import type {UniformVariablesSpecifications} from "./UniformVariablesSpecifications.ts";
import type {VertexShaderSourceCode} from "./VertexShaderSourceCode.ts";
import {WithoutContextProgramWrapper} from "./WithoutContextProgramWrapper.ts";
export class WithSetFragmentShaderProgramWrapperBuilder<
	Scene,
	Vertex,
	UniformVariablesSpecificationsToUse extends UniformVariablesSpecifications<Scene>,
	AttributeVariablesSpecificationsToUse extends AttributeVariablesSpecifications<Vertex>,
> implements FinalizedProgramWrapperBuilder<Scene, Vertex>
{
	private readonly uniformVariablesSpecifications: UniformVariablesSpecificationsToUse;
	private readonly trianglesSelector: TrianglesSelector<Scene, Vertex>;
	private readonly attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse;
	private readonly vertexShaderSourceCode: VertexShaderSourceCode;
	private readonly fragmentShaderSourceCode: FragmentShaderSourceCode;
	public constructor(
		uniformVariablesSpecifications: UniformVariablesSpecificationsToUse,
		trianglesSelector: TrianglesSelector<Scene, Vertex>,
		attributeVariablesSpecifications: AttributeVariablesSpecificationsToUse,
		vertexShaderSourceCode: VertexShaderSourceCode,
		fragmentShaderSourceCode: FragmentShaderSourceCode,
	) {
		this.uniformVariablesSpecifications = uniformVariablesSpecifications;
		this.trianglesSelector = trianglesSelector;
		this.attributeVariablesSpecifications = attributeVariablesSpecifications;
		this.vertexShaderSourceCode = vertexShaderSourceCode;
		this.fragmentShaderSourceCode = fragmentShaderSourceCode;
	}
	public build(gl: WebGL2RenderingContext): WithoutContextProgramWrapper<Scene, Vertex> {
		const programWrapper = WithoutContextProgramWrapper.create(
			gl,
			this.uniformVariablesSpecifications,
			this.trianglesSelector,
			this.attributeVariablesSpecifications,
			this.vertexShaderSourceCode,
			this.fragmentShaderSourceCode,
		);
		return programWrapper;
	}
}
