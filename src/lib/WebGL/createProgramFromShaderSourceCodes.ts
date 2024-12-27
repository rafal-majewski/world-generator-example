import {createProgramFromShaders} from "./createProgramFromShaders.ts";
import {createShader} from "./createShader.ts";
export function createProgramFromShaderSourceCodes(
	gl: WebGL2RenderingContext,
	vertexShaderSourceCode: string,
	fragmentShaderSourceCode: string,
): WebGLProgram {
	const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSourceCode);
	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSourceCode);
	const program = createProgramFromShaders(gl, vertexShader, fragmentShader);
	return program;
}