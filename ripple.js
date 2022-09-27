function ripple(settings={
	'node': this,
	'speed': 1.1,
	'size': .6,
	'maxSize': 1.1}) {

		const decaySpeed = .5;

		const rippleColor = window.getComputedStyle(settings.node).getPropertyValue("color");

		const dimensions = {
			x: settings.node.clientWidth,
			y: settings.node.clientHeight
		}

		const ripple = document.createElement('ripple');
		settings.node.appendChild(ripple);

		const rippleWidth = Math.max(dimensions.x, dimensions.y)

		ripple.style.transform = `scale(${settings.size})`;
		ripple.style.top = window.event.offsetY - rippleWidth / 2 + 'px';
		ripple.style.left = window.event.offsetX - rippleWidth / 2 + 'px';
		ripple.style.width = rippleWidth + 'px'
		ripple.style.height = rippleWidth + 'px'
		ripple.style.background = rippleColor

		setTimeout(function(){
			ripple.style.transition = `top ${settings.speed}s, left ${settings.speed}s, width ${settings.speed}s, height ${settings.speed}s, transform ${.3}s, opacity ${decaySpeed}s`

			ripple.style.top = dimensions.y/2 - rippleWidth/2 + 'px'
			ripple.style.left = dimensions.x/2 - rippleWidth/2 + 'px'
			ripple.style.transform = `scale(${settings.maxSize})`;
		}, 0);

		window.setTimeout(deleteRipple, settings.speed * 1000/2);

		function deleteRipple() {
			ripple.classList.add('ripple-closing');

			setTimeout(function(){
				ripple.remove();
			}, decaySpeed * 1000);
			
		}

}
