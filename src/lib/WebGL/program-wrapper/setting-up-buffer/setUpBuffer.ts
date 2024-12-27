export function setUpBuffer(gl: WebGL2RenderingContext): void {
	const buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
}
