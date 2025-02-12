import {computeTerrainTrianglesFromWorldChunk} from "./computeTerrainTrianglesFromChunk.ts";
import type {Scene} from "./Scene.ts";
import type {TerrainTriangle} from "./TerrainTriangle.ts";
import type {TerrainVertex} from "./TerrainVertex.ts";
import {ProgramWrapperBuilder} from "./web-gl/ProgramWrapperBuilder.ts";
export const terrainProgramWrapperBuilder = new ProgramWrapperBuilder<Scene, TerrainVertex>()
	.specifyUniforms((constructors) => ({
		projection: constructors.mat4((scene: Scene) => scene.camera.projection),
	}))
	.specifyTrianglesSelector((scene: Scene): readonly TerrainTriangle[] =>
		[...scene.world.chunks.values()].flatMap((walls) =>
			[...walls.values()].flatMap((rows) =>
				[...rows.values()].flatMap((chunk) => computeTerrainTrianglesFromWorldChunk(chunk)),
			),
		),
	)
	.specifyAttributes((constructors) => ({
		position: constructors.vec3((vertex: TerrainVertex) => [
			vertex.position.x,
			vertex.position.y,
			vertex.position.z,
		]),
		color: constructors.vec3((vertex: TerrainVertex) => [
			vertex.color.red,
			vertex.color.green,
			vertex.color.blue,
		]),
		normal: constructors.vec3((vertex: TerrainVertex) => [
			vertex.normal.x,
			vertex.normal.y,
			vertex.normal.z,
		]),
	}))
	.declareVaryings((types) => ({
		color: types.vec3,
		normal: types.vec3,
		position: types.vec3,
	}))
	.setVertexShaderSourceCode((sourceCodeBuilder) =>
		sourceCodeBuilder
			.setPrecision("high")
			// .defineFunction((builder) => builder.setType((types) => (types.float)).setName("square").setParameters((builder) => builder.addParameter((types) => (types.float), "x")).setBody((builder) => builder.return_(({variables, operators}) => operators.multiply(variables.x, variables.x)))
			.setMain(
				(statementsBuilder) =>
					statementsBuilder
						.defineVariable("test", ({literals}) => new literals.float(1.0))
						.if_(({variables}) => variables.locals.test.greaterThan(variables.locals.test))
						.then_((successSourceCodeBuilder) =>
							successSourceCodeBuilder.finalize(({variables, functionCalls, literals}) => ({
								gl_Position: variables.uniforms.projection.timesVec4(
									new functionCalls.builtIn.vec4FromVec3AndFloat(
										variables.ins.position,
										new literals.float(1.0),
									),
								),
								outs: {
									color: variables.ins.color,
									normal: variables.ins.normal,
									position: variables.ins.position,
								},
							})),
						)
						.else_((failureSourceCodeBuilder) =>
							failureSourceCodeBuilder.finalize(({variables, functionCalls, literals}) => ({
								gl_Position: variables.uniforms.projection.timesVec4(
									new functionCalls.builtIn.vec4FromVec3AndFloat(
										variables.ins.position,
										new literals.float(1.0),
									),
								),
								outs: {
									color: variables.ins.color,
									normal: variables.ins.normal,
									position: variables.ins.position,
								},
							})),
						),
				// .finalize(({variables, operators, functionCalls, literals}) => ({
				// 	gl_Position: new operators.mat4TimesVec4(
				// 		variables.uniforms.projection,
				// 		new functionCalls.builtIn.vec4FromVec3AndFloat(
				// 			variables.ins.position,
				// 			new literals.float(1.0),
				// 		),
				// 	),
				// 	outs: {
				// 		color: variables.ins.color,
				// 		normal: variables.ins.normal,
				// 		position: variables.ins.position,
				// 	},
				// })),
			),
	)
	.declareOutputs({
		color: "vec4",
	})
	.setFragmentShader((builder) =>
		builder.setPrecision("high").setMain((mainBuilder) =>
			mainBuilder
				.if_(({variables, literals}) => variables.ins.color.b().greaterThan(new literals.float(0)))
				.then_((mainBuilder) =>
					mainBuilder.finalize(({variables, literals, functionCalls}) => ({
						outs: {
							color: new functionCalls.builtIn.vec4FromVec3AndFloat(
								variables.ins.color,
								new literals.float(1.0),
							),
						},
					})),
				)
				.else_((mainBuilder) => mainBuilder.discard()),
		),
	);
