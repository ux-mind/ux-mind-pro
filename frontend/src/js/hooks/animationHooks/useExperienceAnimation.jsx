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
	const [experienceText, setExperienceText] = useState(null);
	const [offsetY, setOffsetY] = useState([0, 0, 0]);
	const viewportHeight = window.innerHeight;

	const maxScroll = viewportHeight * 2;

	// Declare static initial height of the white block;
	const textPaddings = isMobile ? 130 : 144;
	const initialBgHeight = experienceText ? experienceText.offsetHeight + textPaddings * 2 : 560;

	// Animation values for the Experience block
	const offsetValues = [0, maxScroll / 2, maxScroll];
	const topValues = [-maxScroll / 2, 0, 0];

	const topPosition = useTransform(scrollY, offsetY, topValues);

	// Animation values for the Experience background
	const experienceBgHeight = viewportHeight;
	const initialExperienceBgHeight = viewportHeight - initialBgHeight;

	const heightBgValues = [-initialExperienceBgHeight, 0, 0];

	const heightBgPosition = useTransform(scrollY, offsetY, heightBgValues);

	// Animation values for the Experience text
	const textTop = '50%';
	const textPositionValues = [-initialExperienceBgHeight / 2, 0, 0];

	const textPosition = useTransform(scrollY, offsetY, textPositionValues);

	// Animation values for the Projects block
	const projectsOpacityValues = [0, 0, 3];
	const projectsTranslateYValues = [
		-maxScroll,
		-maxScroll + (viewportHeight + initialExperienceBgHeight),
		0
	];

	const projectsOpacity = useTransform(scrollY, offsetY, projectsOpacityValues);
	const projectsTranslateY = useTransform(scrollY, offsetY, projectsTranslateYValues);

	const maxScrollValue = topValues.reduce((maxValue, value) => {
		return Math.max(maxValue, value);
	}, 0);

	// Get elements to calculate animation values
	useEffect(() => {
		const experienceBlock = document.querySelector('#experience');

		if (experienceBlock) {
			setExperienceBlock(experienceBlock);
		}

		const experienceText = document.querySelector('#experience-text p');

		if (experienceText) {
			setExperienceText(experienceText);
		}
	}, []);

	useEffect(() => {
		if (experienceBlock) {
			let { top } = getCoords(experienceBlock);

			top = top - offsetValues[offsetValues.length - 2];

			let offsetArr = new Array(offsetValues.length).fill(top);

			offsetArr = offsetArr.map((value, idx) => value + offsetValues[idx]);

			setOffsetY(offsetArr);
		}
	}, [experienceBlock]);

	useEffect(() => {
		scrollY.set(context.offset.y);
	}, [context]);

	return {
		offsetY,
		maxScroll,
		topPosition,
		experienceBgHeight,
		heightBgPosition,
		projectsTranslateY,
		projectsOpacity,
		textTop,
		textPosition,
		animationValuesLength: offsetY.length,
		maxScrollValue
	};
};

export default useExperienceAnimation;
