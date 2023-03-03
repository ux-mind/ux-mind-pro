import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';


const SmoothScrollComponent = ({ children }) => {
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

		const smoother = ScrollSmoother.create({
			wrapper: '#smooth-wrapper',
			content: '#smooth-content',
			smooth: 1,
			effects: true,
			smoothTouch: 1
		});

		return () => smoother.kill();
	}, []);

	return (
		<div id='smooth-wrapper'>
			<div id='smooth-content'>
				{children}
			</div>
		</div>
	);
};

export default SmoothScrollComponent;
