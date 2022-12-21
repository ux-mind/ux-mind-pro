// Here are stored all functions that can be reused
export function getCoords(el) {
	const box = el.getBoundingClientRect();

	return {
		top: box.top + window.pageYOffset,
		right: box.right + window.pageXOffset,
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset
	};
}

export function getViewportCoords(el) {
	const box = el.getBoundingClientRect();

	return {
		top: box.top,
		right: box.right,
		bottom: box.bottom,
		left: box.left
	};
}

export function getDocumentHeight() {
	const body = document.body;
	const html = document.documentElement;

	const documentHeight = Math.max(
		body.scrollHeight,
		body.offsetHeight,
		html.clientHeight,
		html.scrollHeight,
		html.offsetHeight
	);

	return documentHeight;
}
