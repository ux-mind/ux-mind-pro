import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useExperienceAnimation from '../../../hooks/animationHooks/useExperienceAnimation';

import { useSelector } from 'react-redux';

const Experience = () => {
	const scroll = useSelector((state) => state.scroll.scrollValues);

	const animationValues = useExperienceAnimation(scroll);

	return (
		<motion.div
			className="experience"
			id="experience"
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
