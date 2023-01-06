import { useState, useEffect } from 'react';
import { getCoords, getViewportCoords } from '../../functions/functions';
import { useTransform, useMotionValue } from 'framer-motion';

const useBannerAnimation = (context) => {
	const [banner, setBanner] = useState(null);
	const [bannerWrapper, setBannerWrapper] = useState(null);

	const scrollY = useMotionValue(context.offset.y);

	const [offsetY, setOffsetY] = useState(() => [0, 0]);

	const [bannerShown, setBannerShown] = useState(0);

	// animation values for the banner block
	const topValues = [0, 1200];
	const heightValues = ['54.4%', '100%'];
	const mobileHeightValues = [210, 811];

	const topPosition = useTransform(scrollY, offsetY, topValues);
	const minHeight = useTransform(scrollY, offsetY, heightValues);
	const mobileHeight = useTransform(scrollY, offsetY, mobileHeightValues);

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
		if (banner) {
			let { top } = getCoords(banner);

			top = top - topValues[topValues.length - 1];

			let offsetArr = new Array(topValues.length).fill(top);

			offsetArr = offsetArr.map((value, idx) => value + topValues[idx]);

			setOffsetY(offsetArr);
		}
	}, [banner]);

	const viewportHeight = window.innerHeight;

	useEffect(() => {
		if (bannerWrapper) {
			scrollY.onChange(() => {
				const { top } = getViewportCoords(bannerWrapper);

				const bannerShown = -top + viewportHeight >= bannerWrapper.offsetHeight / 4;

				setBannerShown(bannerShown);
			});
		}
	}, [bannerWrapper, scrollY.current]);

	useEffect(() => {
		scrollY.set(context.offset.y);
	}, [context]);

	return { bannerShown, topPosition, minHeight, mobileHeight };
};

export default useBannerAnimation;
