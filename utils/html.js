export function BackgroundLoad(url) {
	return new Promise((resolve) => {
		const Img = new Image();

		Img.addEventListener('load', () => {
			resolve({ url: Img.src });
		});

		Img.src = url.default || url;
	});
}
