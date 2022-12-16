import React from 'react';

import banner from '../../../../assets/images/home-banner.png';
import banner2x from '../../../../assets/images/home-banner@2x.png';

const Banner = () => {
	return (
		<div className="home-banner">
			<img
				width="100%"
				height="544"
				src={banner}
				srcSet={`${banner} 1x, ${banner2x} 2x`}
				alt="baner"
			/>
		</div>
	);
};

export default Banner;
