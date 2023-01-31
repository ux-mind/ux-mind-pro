import React, { useLayoutEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const tl = useRef(null);
	const experienceRef = useRef(null);
	const experienceText = useRef(null);

	const textPaddings = isMobile ? 130 : 144;
	const viewportHeight = window.innerHeight;
	const initialBgHeight = experienceText.current
		? experienceText.current.offsetHeight + textPaddings * 2
		: 560;
	const initialExperienceBgHeight = viewportHeight - initialBgHeight;

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: '#experience',
					pin: true,
					pinSpacer: true,
					start: 'top top',
					end: `+=${viewportHeight}px`,
					scrub: 0.6
				},
				ease: 'none'
			});

			tl.current
				.fromTo(
					'.experience-bg',
					{
						y: -initialExperienceBgHeight
					},
					{
						y: 0
					},
					0
				)
				.fromTo(
					'#experience-text p',
					{
						y: initialExperienceBgHeight / 2
					},
					{
						y: 0
					},
					0
				)
				.to(
					'.experience-bg',
					{
						y: -viewportHeight,
						ease: 'none',
						duration: 0.7
					},
					'>0.12'
				);
		}, experienceRef);

		return () => ctx.revert();
	}, []);

	return (
		<div className="experience" id="experience" ref={experienceRef}>
			<div className="experience-bg">
				<div className="experience-text">
					<div className="container">
						<div
							id="experience-text"
							className="experience-text__wrapper text_blue text_size-xl"
						>
							<p ref={experienceText}>
								UX Mind Creative Agency's team with&nbsp;
								<strong>7+&nbsp;years of experience</strong> in&nbsp;UX/UI
								web&nbsp;&&nbsp;mobile design, NFT projects and SAAs. <br />
								We create style.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
