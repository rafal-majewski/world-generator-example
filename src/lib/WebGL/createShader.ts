export function createShader(
	gl: WebGL2RenderingContext,
	type: typeof gl.VERTEX_SHADER | typeof gl.FRAGMENT_SHADER,
	sourceCode: string,
): WebGLShader {
	const shader = gl.createShader(type);
	if (shader === null) {
		throw new Error("Could not create WebGL shader.");
	}

	gl.shaderSource(shader, sourceCode);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		const reason = gl.getShaderInfoLog(shader);
		throw new Error(`Could not compile WebGL shader.${reason === null ? "" : `\n\n${reason}`}`);
	}

	return shader;
}
