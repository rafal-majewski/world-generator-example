import type {ShaderSourceCode} from "./ShaderSourceCode.ts";
export function createShader(
	gl: WebGL2RenderingContext,
	type: typeof gl.VERTEX_SHADER | typeof gl.FRAGMENT_SHADER,
	sourceCode: ShaderSourceCode,
): WebGLShader {
	const shader = gl.createShader(type);
	if (shader === null) {
		throw new Error("Could not create WebGL shader.");
	}
	const sourceCodeString = sourceCode.stringify();
	console.log(sourceCodeString);
	gl.shaderSource(shader, sourceCodeString);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		const reason = gl.getShaderInfoLog(shader);
		throw new Error(`Could not compile WebGL shader.${reason === null ? "" : `\n\n${reason}`}`);
	}
	return shader;
}
