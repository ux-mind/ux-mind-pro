import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import useExperienceAnimation from '../../../hooks/animationHooks/useExperienceAnimation';

const Experience = () => {
	const animationValues = useExperienceAnimation();

	return (
		<motion.div
			className="experience"
			id="experience"
			style={{
				marginTop: animationValues.topPosition,
				height: animationValues.minHeight
			}}
		>
			<motion.div
				className="experience-bg"
				style={{
					maxWidth: animationValues.maxBgWidth,
					height: animationValues.heightBgPosition,
					left: animationValues.leftBgPosition
				}}
			></motion.div>
			<motion.div
				className="experience-text"
				style={{
					top: animationValues.textTop,
					scale: animationValues.textScale,
					translateY: '-50%'
				}}
			>
				<div className="container">
					<div className="experience-text__wrapper text_blue text_size-xl">
						<motion.p style={{ color: animationValues.textColor }}>
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
