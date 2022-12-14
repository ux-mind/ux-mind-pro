import React, { useState, useEffect, useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { getCoords } from '../../../functions/functions';

const Experience = () => {
	const experienceRef = useRef(null);
	const [offsetY, setOffsetY] = useState([0, 0, 0, 0]);

	const { scrollY } = useScroll();

	// Animation values for the Experience text block
	const topTextValues = [0, 800, 1600, 2100]; // 1600
	const heightTextValues = [560, 1000, 1000, 0]; // 0
	const heightBgValues = ['100%', '100%', '0%', '0%'];
	const widthBgValues = ['100%', '100%', '0%', '0%']; // '0%'
	const leftBgValues = ['0%', '0%', '50%', '50%']; // '50%'

	const minHeight = useTransform(scrollY, offsetY, heightTextValues);
	const topPosition = useTransform(scrollY, offsetY, topTextValues);
	const heightBgPosition = useTransform(scrollY, offsetY, heightBgValues);
	const maxBgWidth = useTransform(scrollY, offsetY, widthBgValues);
	const leftBgPosition = useTransform(scrollY, offsetY, leftBgValues);

	// Animation values for the Experience text
	const textColorValues = ['#0D08FF', '#0D08FF', '#FFF', '#FFF']; // '#fff'

	const textColor = useTransform(scrollY, offsetY, textColorValues);

	useEffect(() => {
		if (experienceRef) {
			let { top } = getCoords(experienceRef.current);

			top = top - topTextValues[topTextValues.length - 1];

			setOffsetY([top, top + 800, top + 1600, top + 2100]);
		}
	}, [experienceRef]);

	// For controlling scroll value TODO: remove
	useEffect(() => {
		window.onscroll = () => {
			console.log(scrollY.current);
		};
	}, []);

	return (
		<motion.div
			className="experience"
			ref={experienceRef}
			style={{
				marginTop: topPosition,
				height: minHeight
			}}
		>
			<motion.div
				className="experience-bg"
				style={{ maxWidth: maxBgWidth, height: heightBgPosition, left: leftBgPosition }}
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
		</motion.div>
	);
};

export default Experience;
