import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import useBannerAnimation from '../../../hooks/animationHooks/useBannerAnimation';
import { useMediaQuery } from 'react-responsive';
import { ScrollContext } from '../../../context/ScrollContext';

import banner from '../../../../assets/images/home-banner.png';
import banner2x from '../../../../assets/images/home-banner@2x.png';

const Banner = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const context = useContext(ScrollContext);

	const { bannerShown, topPosition, minHeight, mobileHeight } = useBannerAnimation(context);

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
