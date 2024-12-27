import type {VertexSerializer} from "./vertex/VertexSerializer.ts";
export type TriangleSerializer<Triangle, Length extends number> = Readonly<
	Record<1 | 2 | 3, VertexSerializer<Triangle, Length>>
>;
