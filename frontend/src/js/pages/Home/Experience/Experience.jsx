import React, { useLayoutEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
// import useExperienceAnimation from '../../../hooks/animationHooks/useExperienceAnimation';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const tl = useRef(null);
	const experienceText = useRef(null);

	const textPaddings = isMobile ? 130 : 144;
	const viewportHeight = window.innerHeight;
	const initialBgHeight = experienceText.current
		? experienceText.current.offsetHeight + textPaddings * 2
		: 560;
	const initialExperienceBgHeight = viewportHeight - initialBgHeight;

	function start() {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#experience',
				pin: true,
				start: 'top top',
				end: `+=${viewportHeight - initialBgHeight}px`,
				markers: true,
				scrub: 1
			}
		});

		tl.fromTo(
			'.experience-bg',
			{
				y: -initialExperienceBgHeight
			},
			{
				y: 0
			}
		).fromTo(
			'#experience-text p',
			{
				y: initialExperienceBgHeight / 2
			},
			{
				y: 0
			},
			0
		);

		return tl;
	}

	function end() {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#experience',
				pin: true,
				start: `+=${viewportHeight - initialBgHeight}px`,
				end: `+=${(viewportHeight - initialBgHeight) * 2}px`,
				markers: true,
				scrub: 1
			}
		});
	}

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline();

			tl.current.add(start()).add(end());

			// tl.current.from('#experience', {
			// 	scrollTrigger: {
			// 		trigger: '#experience',
			// 		pin: true,
			// 		start: 'top top',
			// 		end: '+=500px',
			// 		markers: true,
			// 		scrub: 1
			// 	}
			// })
		});

		// const trigger = ScrollTrigger.create({
		// 	trigger: '#experience',
		// 	pin: true,
		// 	start: 'top top',
		// 	end: '+=200px',
		// 	markers: true,
		// 	scrub: 1
		// });

		return () => {
			ctx.revert();
			// trigger.kill();
		};
	}, []);

	return (
		<div className="experience" id="experience">
			<div
				className="experience-bg"
				style={{
					height: viewportHeight
				}}
			>
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
