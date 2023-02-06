import React, { useLayoutEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import banner from '../../../../assets/images/home-banner.png';
import banner2x from '../../../../assets/images/home-banner@2x.png';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const tl = useRef(null);
	const bannerRef = useRef(null);

	const viewportHeight = window.innerHeight;

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: '#banner',
					pin: true,
					start: 'top top',
					end: `+=${600}px`,
					scrub: 0.6
				},
				ease: 'none'
			});

			if (isMobile) {
				tl.current.fromTo('#banner img', { y: '-70%', scale: 1 }, { y: '-50%', scale: 2 });
			} else {
				tl.current.to('.home-banner__bottom', { y: '100%' });
			}
		});

		return () => ctx.revert();
	}, [isMobile]);

	return (
		<div id="banner" className="home-banner" ref={bannerRef}>
			<div
				className="home-banner__block"
				// style={{
				// 	opacity: bannerShown ? '1' : '0',
				// 	transition: 'opacity 1s'
				// }}
			>
				<img
					width="100%"
					height="544"
					src={banner}
					srcSet={`${banner} 1x, ${banner2x} 2x`}
					alt="banner"
				/>
				<div className="home-banner__bottom"></div>
			</div>
		</div>
	);
};

export default Banner;
