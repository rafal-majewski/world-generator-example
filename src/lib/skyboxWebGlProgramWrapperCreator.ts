import type {Scene} from "./Scene.ts";
import {FloatVariableSpecification} from "./web-gl/FloatVariableSpecification.ts";
import {Mat4VariableSpecification} from "./web-gl/Mat4VariableSpecification.ts";
import {ProgramWrapperCreator} from "./web-gl/ProgramWrapperCreator.ts";
import {Vec2VariableSpecification} from "./web-gl/Vec2VariableSpecification.ts";
import {Vec3VariableSpecification} from "./web-gl/Vec3VariableSpecification.ts";
import type {XyCoordinates} from "./XyCoordinates.ts";
export const skyboxProgramWrapperCreator = new ProgramWrapperCreator(
	{
		projection: new Mat4VariableSpecification((scene: Scene) => scene.camera.projection),
		sunDirection: new Vec3VariableSpecification((scene: Scene) => {
			const sunDirectionX = 0;
			const sunDirectionY = Math.sin(scene.sun.angleRadians);
			const sunDirectionZ = Math.cos(scene.sun.angleRadians);
			return [sunDirectionX, sunDirectionY, sunDirectionZ];
		}),
		sunAngleRadians: new FloatVariableSpecification((scene: Scene) =>
			Math.min(scene.sun.angleRadians % (2 * Math.PI), Math.PI),
		),
		importanceOfDistanceToSun: new FloatVariableSpecification((scene: Scene) => {
			const importanceOfDistanceToSun =
				(Math.max(0, -Math.sin(scene.sun.angleRadians) + 0.5) / 1.5) * 20;
			return importanceOfDistanceToSun;
		}),
		sunColor: new Vec3VariableSpecification((scene: Scene) => [
			scene.sun.color.red,
			scene.sun.color.green,
			scene.sun.color.blue,
		]),
	},
	{
		position: new Vec2VariableSpecification((vertex: XyCoordinates) => [vertex.x, vertex.y]),
	},
	{
		position: "vec2",
	},
	"",
	({outs, ins}) =>
		`
gl_Position = vec4(${ins.position}, 0.999, 1.0);
${outs.position} = ${ins.position};
`,
	"highp",
	{
		color: "vec4",
	},
	`
const int starCount = 200;
const vec3 starDirections[starCount] = vec3[starCount](
	vec3(0.888959, 0.355895, 0.288254),
	vec3(-0.661501, 0.747315, -0.062742),
	vec3(0.941677, -0.206958, 0.265354),
	vec3(-0.601177, 0.722312, -0.341835),
	vec3(0.332708, -0.290501, 0.897170),
	vec3(0.696870, 0.713647, 0.071276),
	vec3(-0.406470, 0.283693, -0.868505),
	vec3(-0.679571, -0.607355, -0.411465),
	vec3(-0.764185, -0.607980, 0.215365),
	vec3(0.594886, -0.609421, 0.524134),
	vec3(0.885439, 0.060318, 0.460825),
	vec3(0.096671, -0.672611, -0.733655),
	vec3(0.703709, -0.596142, -0.386533),
	vec3(-0.724799, -0.629939, 0.279005),
	vec3(0.339201, -0.590089, 0.732624),
	vec3(-0.669729, -0.176116, 0.721420),
	vec3(-0.308054, 0.816829, -0.487743),
	vec3(-0.481388, 0.733492, -0.479849),
	vec3(0.024532, -0.949775, -0.311970),
	vec3(0.128418, 0.555039, 0.821852),
	vec3(-0.593839, 0.341187, -0.728661),
	vec3(-0.471158, 0.769475, 0.431182),
	vec3(0.433964, -0.896288, 0.091337),
	vec3(0.889892, -0.432541, -0.144916),
	vec3(0.662188, 0.287502, 0.691989),
	vec3(0.411601, -0.867272, -0.280044),
	vec3(0.986671, 0.116182, -0.113936),
	vec3(-0.042429, -0.996714, 0.069001),
	vec3(0.904459, 0.153486, -0.397990),
	vec3(0.938634, 0.221060, -0.264760),
	vec3(-0.457926, 0.858268, 0.231690),
	vec3(0.709216, 0.323932, -0.626164),
	vec3(-0.360615, 0.750435, -0.553898),
	vec3(0.133010, -0.638739, 0.757839),
	vec3(-0.860253, -0.291199, 0.418530),
	vec3(-0.648452, -0.575791, 0.497971),
	vec3(-0.679489, -0.685821, 0.260660),
	vec3(-0.489703, 0.871889, -0.000198),
	vec3(-0.503437, -0.660541, 0.556990),
	vec3(-0.746185, 0.448273, -0.492198),
	vec3(0.812138, 0.572121, -0.114496),
	vec3(0.072152, -0.250237, 0.965493),
	vec3(-0.464901, -0.779004, -0.420737),
	vec3(0.141691, 0.471189, 0.870577),
	vec3(-0.717847, 0.321836, 0.617347),
	vec3(0.778330, 0.390891, 0.491332),
	vec3(-0.770886, -0.325847, -0.547320),
	vec3(0.560075, -0.824086, 0.084848),
	vec3(-0.734083, -0.538118, -0.414188),
	vec3(0.825808, 0.103578, 0.554358),
	vec3(0.894557, 0.387909, 0.222023),
	vec3(-0.115452, -0.301612, 0.946415),
	vec3(0.829685, -0.381270, -0.407746),
	vec3(-0.091729, 0.823566, -0.559754),
	vec3(0.654444, -0.576707, -0.488991),
	vec3(0.843166, -0.417672, -0.338558),
	vec3(-0.611546, 0.398920, -0.683282),
	vec3(0.057755, -0.648976, -0.758614),
	vec3(0.688945, -0.158930, 0.707175),
	vec3(-0.318193, 0.521435, 0.791744),
	vec3(0.546748, -0.699908, -0.459561),
	vec3(0.735173, 0.674932, -0.063144),
	vec3(-0.409924, 0.732615, 0.543357),
	vec3(0.705305, 0.355182, -0.613506),
	vec3(0.204011, -0.002073, -0.978966),
	vec3(-0.613354, 0.783516, -0.099498),
	vec3(-0.393851, 0.339323, 0.854249),
	vec3(-0.080509, 0.565308, 0.820941),
	vec3(0.731221, 0.229631, -0.642329),
	vec3(0.429733, -0.830994, 0.353238),
	vec3(-0.039592, -0.130162, 0.990702),
	vec3(-0.089092, 0.980910, -0.172855),
	vec3(0.603234, 0.653164, -0.457697),
	vec3(-0.322725, -0.797184, -0.510242),
	vec3(0.576596, -0.477034, -0.663306),
	vec3(-0.670156, 0.116182, -0.733071),
	vec3(0.535316, -0.831406, -0.149001),
	vec3(-0.204286, 0.491774, 0.846419),
	vec3(-0.529918, 0.827283, -0.186521),
	vec3(-0.346330, -0.329704, 0.878266),
	vec3(-0.665827, -0.235794, -0.707867),
	vec3(0.257646, -0.566327, 0.782875),
	vec3(0.644977, -0.492294, 0.584509),
	vec3(0.002676, 0.714621, -0.699506),
	vec3(0.063368, -0.613008, 0.787532),
	vec3(-0.646810, -0.162284, -0.745185),
	vec3(-0.682050, -0.600572, 0.417279),
	vec3(0.817962, -0.530167, 0.223296),
	vec3(0.759235, -0.544927, -0.355832),
	vec3(0.062035, 0.904200, -0.422580),
	vec3(0.827939, -0.344907, -0.442218),
	vec3(0.644880, 0.721265, -0.252798),
	vec3(-0.093640, -0.953147, 0.287649),
	vec3(0.187514, 0.948930, -0.253715),
	vec3(0.754479, -0.118113, -0.645609),
	vec3(-0.575857, 0.423141, 0.699529),
	vec3(-0.068133, 0.356291, 0.931888),
	vec3(0.281883, -0.365877, -0.886948),
	vec3(-0.605402, -0.704300, -0.370742),
	vec3(0.448547, 0.868342, 0.211632),
	vec3(-0.430964, -0.866335, 0.252457),
	vec3(-0.883359, -0.436746, 0.170086),
	vec3(-0.819557, -0.432131, -0.376284),
	vec3(0.684739, 0.268023, -0.677713),
	vec3(0.072098, -0.197588, 0.977630),
	vec3(-0.877340, -0.411769, 0.246418),
	vec3(-0.440019, 0.480148, 0.758842),
	vec3(0.753535, -0.083039, -0.652142),
	vec3(-0.101282, 0.681657, 0.724628),
	vec3(0.597418, -0.593571, 0.539226),
	vec3(0.563064, -0.781198, 0.269608),
	vec3(0.126666, 0.831134, -0.541454),
	vec3(0.749376, 0.628612, 0.208044),
	vec3(0.604065, -0.554527, -0.572368),
	vec3(-0.189809, -0.862025, -0.469985),
	vec3(-0.491967, -0.788331, -0.369462),
	vec3(0.522658, -0.762171, 0.381999),
	vec3(0.536821, 0.761264, 0.363731),
	vec3(-0.724648, -0.283350, 0.628171),
	vec3(0.036520, -0.759104, 0.649944),
	vec3(0.344746, 0.759437, -0.551730),
	vec3(-0.552712, -0.666926, -0.499720),
	vec3(0.749264, 0.230099, -0.621013),
	vec3(0.698620, 0.708278, 0.101351),
	vec3(0.110396, -0.711837, -0.693614),
	vec3(-0.343068, -0.000327, -0.939311),
	vec3(0.826879, -0.406626, 0.388493),
	vec3(0.762540, 0.436232, -0.477738),
	vec3(0.925573, -0.344359, -0.157262),
	vec3(-0.046464, -0.684982, 0.727077),
	vec3(-0.171535, -0.855686, -0.488238),
	vec3(-0.917702, 0.388295, 0.083966),
	vec3(-0.459338, -0.885338, -0.072009),
	vec3(-0.642469, -0.463258, -0.610431),
	vec3(0.435085, 0.039251, -0.899533),
	vec3(0.425190, 0.639441, -0.640569),
	vec3(-0.384417, 0.734558, -0.559149),
	vec3(-0.202285, -0.940843, 0.271837),
	vec3(-0.701467, 0.213879, -0.679853),
	vec3(0.275301, -0.858073, 0.433498),
	vec3(-0.479990, 0.617690, 0.622951),
	vec3(0.077981, -0.743331, -0.664363),
	vec3(-0.031352, 0.111279, 0.993295),
	vec3(0.844439, 0.184435, 0.502897),
	vec3(-0.377877, 0.397672, 0.836102),
	vec3(-0.555826, -0.553161, -0.620540),
	vec3(0.896802, 0.272498, 0.348556),
	vec3(0.787639, 0.364044, 0.497089),
	vec3(-0.297734, -0.890469, 0.344121),
	vec3(0.614126, 0.771688, -0.165367),
	vec3(-0.748500, -0.651579, -0.123263),
	vec3(0.363774, 0.113737, -0.924517),
	vec3(0.442120, 0.789800, -0.425141),
	vec3(0.715474, 0.662825, 0.220817),
	vec3(0.428866, -0.392937, 0.813434),
	vec3(-0.750674, -0.622657, 0.220878),
	vec3(0.515061, -0.412407, -0.751421),
	vec3(0.065526, 0.118818, 0.990752),
	vec3(0.626018, 0.358887, 0.692316),
	vec3(-0.278227, 0.045827, 0.959422),
	vec3(-0.294846, 0.793991, -0.531643),
	vec3(0.742119, 0.541656, -0.394802),
	vec3(0.363483, -0.799053, 0.478952),
	vec3(-0.599879, 0.265008, 0.754928),
	vec3(-0.967792, -0.232525, -0.096493),
	vec3(0.210162, 0.926491, 0.312165),
	vec3(-0.031517, -0.821366, 0.569530),
	vec3(-0.121611, -0.740704, 0.660733),
	vec3(0.433176, 0.800030, 0.415103),
	vec3(-0.704415, -0.566596, 0.427515),
	vec3(-0.551868, -0.625669, -0.551344),
	vec3(-0.500462, 0.842368, 0.199886),
	vec3(0.621957, -0.493073, 0.608316),
	vec3(-0.794961, 0.256012, -0.549995),
	vec3(-0.044090, -0.094419, -0.994556),
	vec3(0.239607, -0.025226, 0.970542),
	vec3(0.474216, 0.078947, -0.876862),
	vec3(0.903617, -0.111254, -0.413640),
	vec3(-0.368767, -0.854776, -0.365198),
	vec3(0.543982, 0.648037, 0.533040),
	vec3(-0.820599, -0.560134, 0.113428),
	vec3(-0.630340, -0.369115, -0.682954),
	vec3(-0.095194, -0.370903, -0.923780),
	vec3(-0.528000, 0.762432, 0.374051),
	vec3(0.724668, -0.067761, -0.685758),
	vec3(0.961537, -0.245252, 0.123688),
	vec3(-0.883011, 0.428712, 0.191042),
	vec3(-0.578935, -0.798545, -0.164803),
	vec3(-0.379404, 0.207501, 0.901663),
	vec3(0.624329, -0.459722, 0.631561),
	vec3(-0.259738, 0.579672, -0.772345),
	vec3(-0.234148, -0.520594, 0.821071),
	vec3(-0.332582, -0.442008, -0.833077),
	vec3(0.623621, -0.633176, -0.458460),
	vec3(-0.690959, 0.696186, 0.194680),
	vec3(0.076152, -0.068149, 0.994765),
	vec3(0.137949, -0.392760, 0.909236),
	vec3(0.610054, -0.637977, 0.469914),
	vec3(-0.091238, 0.779116, 0.620205),
	vec3(0.958348, -0.054432, 0.280369)
);
bool checkIfIsStar(vec3 direction) {
    for (int starIndex = 0; starIndex < starCount; starIndex += 1) {
		if (dot(starDirections[starIndex], direction) > 0.99995) {
			return true;
		}
	}
	return false;
}
bool checkIfIsSun(vec3 direction) {
	return dot(u_sunDirection, direction) > 0.999;
}
`,
	({uniforms, ins, outs}) =>
		`
mat4 inversedProjection = inverse(${uniforms.projection});
vec3 rayDirection = normalize((inversedProjection * vec4(${ins.position}, 1.0, 1.0)).xyz);
bool isSun = checkIfIsSun(rayDirection);
if (isSun) {
	${outs.color} = vec4(${uniforms.sunColor}, 1.0);
} else {
	bool isStar = checkIfIsStar(rayDirection);
	vec3 redHorizonColor = vec3(0.58, 0.4, 0.19);
	vec3 standardHorizonColor = vec3(0.64, 0.71, 0.71);
	vec3 standardSkyColor = vec3(0.57, 0.76, 0.9);
	vec3 horizonColor = mix(redHorizonColor, standardHorizonColor, sin(${uniforms.sunAngleRadians}));
	float verticalness = dot(rayDirection, vec3(0.0, 1.0, 0.0));
	float distanceToSun = -(dot(rayDirection, ${uniforms.sunDirection}) - 1.0) / 2.0;
	vec3 baseSkyColor = mix(horizonColor, standardSkyColor, verticalness);
	float visibility = max(0.0, 1.0 - ${uniforms.importanceOfDistanceToSun} * distanceToSun);
	vec3 starOrSkyColor = isStar ? vec3(1.0, 1.0, 1.0) : vec3(0.0, 0.0, 0.0);
	vec3 skyColor = mix(starOrSkyColor, baseSkyColor, visibility);
	${outs.color} = vec4(skyColor, 1.0);
}
`,
	"highp",
	(): readonly (readonly [XyCoordinates, XyCoordinates, XyCoordinates])[] => {
		const center: XyCoordinates = {
			x: 0,
			y: 0,
		};
		const leftBottom: XyCoordinates = {
			x: -1,
			y: -1,
		};
		const rightBottom: XyCoordinates = {
			x: 1,
			y: -1,
		};
		const rightTop: XyCoordinates = {
			x: 1,
			y: 1,
		};
		const leftTop: XyCoordinates = {
			x: -1,
			y: 1,
		};
		return [
			[leftBottom, center, leftTop],
			[rightBottom, center, rightTop],
			[leftBottom, center, rightBottom],
			[leftTop, center, rightTop],
		];
	},
);
