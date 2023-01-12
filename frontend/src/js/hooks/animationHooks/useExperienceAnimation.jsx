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
	const [offsetY, setOffsetY] = useState([0, 0]);

	const maxScroll = 800;

	// Animation values for the Experience block
	const topValues = [-maxScroll, 0];
	// const heightValues = isMobile ? [375, 812] : [560, 1000];
	const heightValues = isMobile ? ['46.1822vh', '100vh'] : [560, 1000];

	const topPosition = useTransform(scrollY, offsetY, topValues);
	const minHeight = useTransform(scrollY, offsetY, heightValues);

	// Animation values for the Experience background
	const experienceBgHeight = isMobile ? 812 : 1000;
	const heightBgValues = isMobile ? [-437, 0] : [-440, 0];

	const heightBgPosition = useTransform(scrollY, offsetY, heightBgValues);

	// Animation values for the Experience text
	const textTop = '50%';
	const textPositionValues = isMobile ? [-218, 0] : [-220, 0];

	const textPosition = useTransform(scrollY, offsetY, textPositionValues);

	// Animation values for the Projects block
	const projectsTranslateYValues = isMobile ? [-437 - maxScroll, 0] : [-440 - maxScroll, 0];

	const projectsTranslateY = useTransform(scrollY, offsetY, projectsTranslateYValues);

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
		maxScroll,
		minHeight,
		topPosition,
		experienceBgHeight,
		heightBgPosition,
		// projectsMarginTop,
		projectsTranslateY,
		textTop,
		// textColor,
		// textScale,
		textPosition,
		animationValuesLength: offsetY.length,
		maxScrollValue
	};
};

export default useExperienceAnimation;
