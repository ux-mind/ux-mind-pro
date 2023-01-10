import { useState, useEffect } from 'react';
import { useTransform, useMotionValue } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { getCoords } from '../../functions/functions';

const useExperienceAnimation = (context) => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const scrollY = useMotionValue(context.offset.y);

	const [experienceBlock, setExperienceBlock] = useState(null);
	const [offsetY, setOffsetY] = useState([0, 0, 0, 0]);

	// Animation values for the Experience block
	const topValues = isMobile ? [0, 800, 800, 800] : [0, 800, 1600, 2100];
	const heightValues = isMobile ? [375, 812, 812, 812] : [560, 1000, 1000, 0];

	const topPosition = useTransform(scrollY, offsetY, topValues);
	const minHeight = useTransform(scrollY, offsetY, heightValues);

	// Animation values for the Experience background
	const heightBgValues = isMobile ? ['100%', '100%', '100%', '100%'] : [-440, 0, -1000, -1000];

	const heightBgPosition = useTransform(scrollY, offsetY, heightBgValues);

	// Animation values for the Experience text
	const textColorValues = isMobile
		? ['#0D08FF', '#0D08FF', '#0D08FF', '#0D08FF']
		: ['#0D08FF', '#0D08FF', '#FFF', 'rgba(255, 255, 255, 0)'];
	const textTopValues = isMobile ? ['50%', '50%', '50%', '50%'] : ['50%', '50%', '50%', '0%'];
	const textScaleValues = isMobile ? [1, 1, 1, 1] : [1, 1, 1, 0.65];
	const textPositionValues = isMobile ? [-218, 0, 0, 0] : [-220, 0, 0, 0];

	const textColor = useTransform(scrollY, offsetY, textColorValues);
	const textTop = useTransform(scrollY, offsetY, textTopValues);
	const textScale = useTransform(scrollY, offsetY, textScaleValues);
	const textPosition = useTransform(scrollY, offsetY, textPositionValues);

	const maxScrollValue = topValues.reduce((maxValue, value) => {
		return Math.max(maxValue, value);
	}, 0);

	useEffect(() => {
		const experienceBlock = document.querySelector('#experience');

		if (experienceBlock) {
			setExperienceBlock(experienceBlock);
		}
	}, []);

	useEffect(() => {
		if (experienceBlock) {
			let { top } = getCoords(experienceBlock);

			top = top - topValues[topValues.length - 1];

			let offsetArr = new Array(topValues.length).fill(top);

			offsetArr = offsetArr.map((value, idx) => value + topValues[idx]);

			setOffsetY(offsetArr);
		}
	}, [experienceBlock]);

	useEffect(() => {
		scrollY.set(context.offset.y);
	}, [context]);

	return {
		minHeight,
		topPosition,
		heightBgPosition,
		textColor,
		textTop,
		textScale,
		textPosition,
		animationValuesLength: offsetY.length,
		maxScrollValue
	};
};

export default useExperienceAnimation;
