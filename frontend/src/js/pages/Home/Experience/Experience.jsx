import React, { useLayoutEffect } from 'react';
import useExperienceAnimation from '../../../hooks/animationHooks/useExperienceAnimation';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
	// useExperienceAnimation();

	useLayoutEffect(() => {
		ScrollTrigger.create({
			trigger: '#experience',
			pin: true,
			start: 'top top',
			end: '+=200px',
			markers: true,
			scrub: 1
		});
	}, []);

	return (
		<div className="experience" id="experience">
			<div className="experience-text">
				<div className="container">
					<div
						id="experience-text"
						className="experience-text__wrapper text_blue text_size-xl"
					>
						<p>
							UX Mind Creative Agency's team with&nbsp;
							<strong>7+&nbsp;years of experience</strong> in&nbsp;UX/UI
							web&nbsp;&&nbsp;mobile design, NFT projects and SAAs. <br />
							We create style.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
