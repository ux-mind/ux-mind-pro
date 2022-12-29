import { useState, useEffect } from 'react';
import { getCoords, getViewportCoords } from '../../functions/functions';
import { useTransform, useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const useBannerAnimation = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const { scrollY } = useScroll();

	const [banner, setBanner] = useState(null);
	const [bannerWrapper, setBannerWrapper] = useState(null);

	const [bannerShown, setBannerShown] = useState(0);

	const [offsetY, setOffsetY] = useState(() => [0, 0]);

	const topValues = [0, 1200];
	const heightValues = isMobile ? ['100%', '100%'] : ['54.4%', '100%'];

	const topPosition = useTransform(scrollY, offsetY, topValues);
	const minHeight = useTransform(scrollY, offsetY, heightValues);

	const mobileHeightValues = isMobile ? [210, 811] : null;

	const mobileHeight = mobileHeightValues
		? useTransform(scrollY, offsetY, mobileHeightValues)
		: null;

	useEffect(() => {
		const banner = document.querySelector('#banner');
		const bannerWrapper = document.querySelector('#banner-wrapper');

		if (banner) {
			setBanner(banner);
		}

		if (bannerWrapper) {
			setBannerWrapper(bannerWrapper);
		}
	}, []);

	useEffect(() => {
		if (bannerWrapper) {
			const viewportHeight = window.innerHeight;

			window.addEventListener('scroll', () => {
				const { top } = getViewportCoords(bannerWrapper);

				const bannerShown = -top + viewportHeight >= bannerWrapper.offsetHeight / 4;

				setBannerShown(bannerShown);
			});
		}

		return () => {
			window.removeEventListener('scroll', () => {
				const { top } = getViewportCoords(bannerWrapper);

				const bannerShown = -top + window.innerHeight >= bannerWrapper.offsetHeight / 4;

				setBannerShown(bannerShown);
			});
		};
	}, [bannerWrapper]);

	useEffect(() => {
		if (banner) {
			let { top } = getCoords(banner);

			top = top - topValues[topValues.length - 1];

			let offsetArr = new Array(topValues.length).fill(top);

			offsetArr = offsetArr.map((value, idx) => value + topValues[idx]);

			setOffsetY(offsetArr);
		}
	}, [banner]);

	return { bannerShown, topPosition, minHeight, mobileHeight };
};

export default useBannerAnimation;
