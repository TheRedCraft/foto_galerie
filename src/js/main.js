const images = document.querySelectorAll('.galerie img');

document.addEventListener('mousemove', ($event) => {
	const { clientX } = $event;
	const percent = calcPercent(clientX);
	images.forEach((image) => moveImageBackground(image, percent));
});

function calcPercent(clientX) {
	return (clientX / window.innerWidth) * 100;
}

function moveImageBackground(image, percent) {
	image.animate(
		{
			objectPosition: `${percent}% 0%`,
		},
		{ fill: 'forwards', duration: 250, easing: 'ease-in' }
	);
}
