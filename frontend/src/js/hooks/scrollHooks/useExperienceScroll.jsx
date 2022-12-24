import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useExperienceScroll = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const scrollValues = isMobile ? [0, 800] : [0, 800, 1600, 1800, 2100];

	return scrollValues;
};

export default useExperienceScroll;
