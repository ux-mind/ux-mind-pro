import { useState, useEffect } from 'react';
import { useTransform, useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { getCoords } from '../../functions/functions';

const useExperienceAnimation = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const [experienceBlock, setExperienceBlock] = useState(null);

	const { scrollY } = useScroll();

	const [offsetY, setOffsetY] = useState(() => (isMobile ? [0, 0] : [0, 0, 0, 0, 0]));

	// Animation values for the Experience block
	const topValues = isMobile ? [0, 800] : [0, 800, 1600, 1800, 2100];
	const heightValues = isMobile ? [375, 812] : [560, 1000, 1000, 1000, 1000];

	const minHeight = useTransform(scrollY, offsetY, heightValues);
	const topPosition = useTransform(scrollY, offsetY, topValues);

	// Animation values for the Experience background
	const heightBgValues = isMobile ? ['100%', '100%'] : ['100%', '100%', '0%', '0%', '0%'];
	const widthBgValues = isMobile ? ['100%', '100%'] : ['100%', '100%', '0%', '0%', '0%'];
	const leftBgValues = isMobile ? ['0%', '0%'] : ['0%', '0%', '50%', '50%', '50%'];

	const heightBgPosition = useTransform(scrollY, offsetY, heightBgValues);
	const maxBgWidth = useTransform(scrollY, offsetY, widthBgValues);
	const leftBgPosition = useTransform(scrollY, offsetY, leftBgValues);

	// Animation values for the Experience text
	const textColorValues = isMobile
		? ['#0D08FF', '#0D08FF']
		: ['#0D08FF', '#0D08FF', '#FFF', '#FFF', 'rgba(255, 255, 255, 0)'];
	const textTopValues = isMobile ? ['50%', '50%'] : ['50%', '50%', '50%', '50%', '0%'];
	const textScaleValues = isMobile ? [1, 1] : [1, 1, 1, 1, 0.6];

	const textColor = useTransform(scrollY, offsetY, textColorValues);
	const textTop = useTransform(scrollY, offsetY, textTopValues);
	const textScale = useTransform(scrollY, offsetY, textScaleValues);

	const animationValuesLength = topValues.length;
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

	return {
		minHeight,
		topPosition,
		heightBgPosition,
		maxBgWidth,
		leftBgPosition,
		textColor,
		textTop,
		textScale,
		animationValuesLength,
		maxScrollValue
	};
};

export default useExperienceAnimation;
