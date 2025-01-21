export function computeMInOneDimension(
	chunkSize: number,
	viewerPosition: number,
	chunkCount: number,
): number {
	return chunkSize * Math.floor(viewerPosition / chunkSize - (chunkCount - 1) / 2 + 1 / 2);
}
