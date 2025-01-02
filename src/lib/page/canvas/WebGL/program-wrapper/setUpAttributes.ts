import type {VariableName} from "./VariableName.ts";
import type {VariableSize} from "./VariableSize.ts";
export function setUpAttributes(
	variableNameToVariableSize: Readonly<Record<VariableName, VariableSize>>,
	gl: WebGL2RenderingContext,
	program: WebGLProgram,
): void {
	const strideBytes =
		(Object.values(variableNameToVariableSize) as readonly VariableSize[]).reduce(
			(acumulatedStride, variableSize) => acumulatedStride + variableSize,
			0,
		) * Float32Array.BYTES_PER_ELEMENT;
	let offsetBytes = 0;
	for (const [name, size] of Object.entries(
		variableNameToVariableSize,
	) as unknown as readonly (readonly [VariableName, VariableSize])[]) {
		const location = gl.getAttribLocation(program, `a_${name}`);
		gl.enableVertexAttribArray(location);
		gl.vertexAttribPointer(location, size, gl.FLOAT, false, strideBytes, offsetBytes);
		offsetBytes += size * Float32Array.BYTES_PER_ELEMENT;
	}
}
