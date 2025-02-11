import type {AttributeVariableSpecification} from "./AttributeVariableSpecification.ts";
import type {Vec3} from "./Vec3.ts";
export class Vec3AttributeVariableSpecification<Vertex>
	implements AttributeVariableSpecification<Vertex>
{
	public readonly size = 3;
	public readonly type = "vec3";
	private readonly extractor: (vertex: Vertex) => Vec3;
	public constructor(extractor: (vertex: Vertex) => Vec3) {
		this.extractor = extractor;
	}
	public serialize(vertex: Vertex): readonly number[] {
		const value = this.extractor(vertex);
		return value;
	}
}
