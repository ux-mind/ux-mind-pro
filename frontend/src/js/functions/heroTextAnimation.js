function heroTextAnimation(type) {
	const animationInstance = {};

	if (type === 'mobile') {
		const topValues = [0, 800];
		const heightValues = [375, 812];

		// Animation values for the Experience background
		const heightBgValues = ['100%', '100%'];
		const widthBgValues = ['100%', '100%'];
		const leftBgValues = ['0%', '0%'];

		// Animation values for the Experience text
		const textColorValues = isMobile
			? ['#0D08FF', '#0D08FF']
			: ['#0D08FF', '#0D08FF', '#FFF', '#FFF', 'rgba(255, 255, 255, 0)'];
		const textTopValues = isMobile ? ['50%', '50%'] : ['50%', '50%', '50%', '50%', '0%'];
		const textScaleValues = isMobile ? [1, 1] : [1, 1, 1, 1, 0.6];
	}
}

export default heroTextAnimation;
