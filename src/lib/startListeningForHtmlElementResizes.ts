import type {Dimensions} from "./Dimensions.ts";
export function startListeningForHtmlElementResizes(
	element: HTMLElement,
	handleResize: (dimensions: Dimensions) => undefined,
): () => undefined {
	const observer = new ResizeObserver(function handleResizeObservation(entries) {
		for (const entry of entries) {
			handleResize({
				width: entry.contentRect.width,
				height: entry.contentRect.height,
			});
		}
	});
	observer.observe(element);
	return function stopListeningForHtmlElementResizes(): undefined {
		observer.disconnect();
	};
}
