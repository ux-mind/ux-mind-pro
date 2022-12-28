import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getViewportCoords, getCoords } from '../../../functions/functions';
import useBannerAnimation from '../../../hooks/animationHooks/useBannerAnimation';

import banner from '../../../../assets/images/home-banner.png';
import banner2x from '../../../../assets/images/home-banner@2x.png';

const Banner = () => {
	const { bannerShown, topPosition, minHeight } = useBannerAnimation();

	return (
		<motion.div
			id="banner"
			className="home-banner"
			style={{ opacity: bannerShown ? '1' : '0', transition: 'opacity 1s' }}
		>
			<motion.div className="home-banner__block" style={{ marginTop: topPosition }}>
				<motion.div
					id="banner-wrapper"
					className="home-banner__wrapper"
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
