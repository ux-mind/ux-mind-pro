import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import useExperienceAnimation from '../../../hooks/animationHooks/useExperienceAnimation';

import { useSelector } from 'react-redux';

const Experience = () => {
	const el = useRef(null);

	const scroll = useSelector((state) => state.scroll.scrollValues);

	const animationValues = useExperienceAnimation(scroll);

	const intersection = useIntersection(el, {
		root: null,
		rootMargin: '0px',
		threshold: 1
	});

	console.log(intersection);

	return (
		<motion.div
			className="experience"
			id="experience"
			ref={el}
			style={{
				marginTop: animationValues.maxScroll / 2,
				translateY: animationValues.topPosition
			}}
		>
			<motion.div
				className="experience-bg"
				style={{
					height: animationValues.experienceBgHeight,
					translateY: animationValues.heightBgPosition
				}}
			></motion.div>
			<motion.div
				className="experience-text"
				style={{
					top: animationValues.textTop,
					translateY: '-50%'
				}}
			>
				<div className="container">
					<div
						id="experience-text"
						className="experience-text__wrapper text_blue text_size-xl"
					>
						<motion.p
							style={{
								translateY: animationValues.textPosition
							}}
						>
							UX Mind Creative Agency's team with&nbsp;
							<strong>7+&nbsp;years of experience</strong> in&nbsp;UX/UI
							web&nbsp;&&nbsp;mobile design, NFT projects and SAAs. <br />
							We create style.
						</motion.p>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Experience;
