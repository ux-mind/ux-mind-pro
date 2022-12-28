import React, { useRef, useEffect, useState } from 'react';
import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import { getViewportCoords, getCoords } from '../../../functions/functions';

import banner from '../../../../assets/images/home-banner.png';
import banner2x from '../../../../assets/images/home-banner@2x.png';

const Banner = () => {
	const bannerRef = useRef(null);
	const bannerWrapperRef = useRef(null);

	const isInView = useInView(bannerRef);

	const { scrollY } = useScroll();

	const [bannerShown, setBannerShown] = useState(0);

	const [offsetY, setOffsetY] = useState(() => [0, 0]);

	const topValues = [0, 1200];
	const heightValues = ['54.4%', '100%'];

	const topPosition = useTransform(scrollY, offsetY, topValues);
	const minHeight = useTransform(scrollY, offsetY, heightValues);

	useEffect(() => {
		if (bannerWrapperRef) {
			const banner = bannerWrapperRef.current;

			const viewportHeight = window.innerHeight;

			window.addEventListener('scroll', () => {
				const { top } = getViewportCoords(banner);

				console.log(window.scrollY);

				const bannerShown = -top + viewportHeight >= banner.offsetHeight / 4;

				setBannerShown(bannerShown);
			});
		}

		return () => {
			window.removeEventListener('scroll', () => {
				const { top } = getViewportCoords(bannerWrapperRef.current);

				const bannerShown =
					-top + window.innerHeight >= bannerWrapperRef.current.offsetHeight / 4;

				setBannerShown(bannerShown);
			});
		};
	}, [bannerWrapperRef]);

	useEffect(() => {
		if (bannerRef) {
			const bannerBlock = bannerRef.current;

			let { top } = getCoords(bannerBlock);

			top = top - topValues[topValues.length - 1];

			let offsetArr = new Array(topValues.length).fill(top);

			offsetArr = offsetArr.map((value, idx) => value + topValues[idx]);

			setOffsetY(offsetArr);
		}
	}, [bannerRef]);

	return (
		<motion.div
			id="banner"
			className="home-banner"
			ref={bannerRef}
			style={{ opacity: bannerShown ? '1' : '0', transition: 'opacity 1s' }}
		>
			<motion.div className="home-banner__block" style={{ marginTop: topPosition }}>
				<motion.div
					className="home-banner__wrapper"
					ref={bannerWrapperRef}
					style={{ height: minHeight }}
				>
					<img
						width="100%"
						height="544"
						src={banner}
						srcSet={`${banner} 1x, ${banner2x} 2x`}
						alt="baner"
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Banner;
