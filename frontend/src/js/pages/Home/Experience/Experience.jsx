import React from 'react';
import { motion } from 'framer-motion';
import useExperienceAnimation from '../../../hooks/animationHooks/useExperienceAnimation';

const Experience = ({ attributes }) => {
	const animationValues = useExperienceAnimation();

	if ({ attributes }) {
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
						height: animationValues.heightBgPosition
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
							<motion.p style={{ color: animationValues.textColor }} dangerouslySetInnerHTML={{__html: attributes.experience_text}}>
							</motion.p>
						</div>
					</div>
				</motion.div>
			</motion.div>
		);
	}
};

export default Experience;
