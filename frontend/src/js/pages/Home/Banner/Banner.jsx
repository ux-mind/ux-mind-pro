import React from 'react';
import { motion } from 'framer-motion';
import useBannerAnimation from '../../../hooks/animationHooks/useBannerAnimation';
import { useMediaQuery } from 'react-responsive';

import banner from '../../../../assets/images/home-banner.png';
import banner2x from '../../../../assets/images/home-banner@2x.png';

import { useSelector } from 'react-redux';

const Banner = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const scroll = useSelector((state) => state.scroll.scrollValues);

	const { bannerShown, topPosition, minHeight, mobileHeight } = useBannerAnimation(scroll);

	return (
		<motion.div id="banner" className="home-banner" style={{ marginTop: topPosition }}>
			<motion.div
				className="home-banner__block"
				style={{
					opacity: bannerShown ? '1' : '0',
					transition: 'opacity 1s'
				}}
			>
				<motion.div
					id="banner-wrapper"
					className="home-banner__wrapper"
					style={{ height: isMobile ? mobileHeight : minHeight }}
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
