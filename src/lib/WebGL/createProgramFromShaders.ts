export function createProgramFromShaders(
	gl: WebGL2RenderingContext,
	vertexShader: WebGLShader,
	fragmentShader: WebGLShader,
): WebGLProgram {
	const program = gl.createProgram();
	if (program === null) {
		throw new Error("Could not create WebGL program.");
	}
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		const reason = gl.getProgramInfoLog(program);
		throw new Error(`Could not compile WebGL program.${reason === null ? "" : `\n\n${reason}`}`);
	}
	return program;
}
