import React, { useState, useEffect, useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { getCoords } from '../../../functions/functions';

const Experience = () => {
	const experienceRef = useRef(null);
	const [offsetY, setOffsetY] = useState([0, 0, 0]);

	const { scrollY } = useScroll();

	// Animation values for the Experience text block
	const topTextValues = [0, 600, 1000]; // 1600
	const heightTextValues = [560, 1000, 0]; // 0
	const widthTextValues = ['100%', '100%', '0%']; // '0%'
	const leftTextValues = ['0%', '0%', '50%']; // '50%'

	const minHeight = useTransform(scrollY, offsetY, heightTextValues);
	const topPosition = useTransform(scrollY, offsetY, topTextValues);
	const maxWidth = useTransform(scrollY, offsetY, widthTextValues);
	const leftPosition = useTransform(scrollY, offsetY, leftTextValues);

	// Animation values for the Experience text
	const textColorValues = ['#0D08FF', '#0D08FF', '#FFF']; // '#fff'

	const textColor = useTransform(scrollY, offsetY, textColorValues);

	useEffect(() => {
		if (experienceRef) {
			let { top } = getCoords(experienceRef.current);

			top = top - topTextValues[topTextValues.length - 1];

			setOffsetY([top, top + 600, top + 1000]);
		}
	}, [experienceRef]);

	// For controlling scroll value TODO: remove
	useEffect(() => {
		window.onscroll = () => {
			console.log(scrollY.current);
		};
	}, []);

	return (
		<div className="experience">
			<motion.div
				className="experience-bg"
				ref={experienceRef}
				style={{
					height: minHeight,
					marginTop: topPosition,
					maxWidth: maxWidth,
					left: leftPosition
				}}
			></motion.div>
			<div className="experience-text">
				<div className="container">
					<div className="experience-text__wrapper text_blue text_size-xl">
						<motion.p style={{ color: textColor }}>
							UX Mind Creative Agency's team with&nbsp;
							<strong>7+&nbsp;years of experience</strong> in&nbsp;UX/UI
							web&nbsp;&&nbsp;mobile design, NFT projects and SAAs. <br />
							We create style.
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
