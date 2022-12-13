import React, { useState, useEffect, useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import { getViewportCoords, getCoords } from '../../../functions/functions';

const Experience = () => {
	const experienceRef = useRef(null);
	const [offsetY, setOffsetY] = useState([0, 0, 0]);

	const { scrollY } = useScroll();

	// Animation values for the Experience block
	const topSizes = [0, 600, 850];
	const heightSizes = [560, 1000, 0];
	// const scale = [1, 1, 0];
	const widthSizes = ['100%', '100%', '0%'];
	const leftSizes = ['0%', '0%', '50%'];

	const minHeight = useTransform(scrollY, offsetY, heightSizes);
	const topPosition = useTransform(scrollY, offsetY, topSizes);
	// const scaleY = useTransform(scrollY, offsetY, scale);
	const maxWidth = useTransform(scrollY, offsetY, widthSizes);
	const leftPosition = useTransform(scrollY, offsetY, leftSizes);

	useEffect(() => {
		if (experienceRef) {
			const { top } = getCoords(experienceRef.current);

			const topValue = top - Math.max(0, Math.max(...topSizes));

			setOffsetY([topValue, topValue + 600, topValue + 1000]);
		}
	}, [experienceRef]);

	return (
		<motion.div
			className="experience"
			ref={experienceRef}
			style={{
				height: minHeight,
				marginTop: topPosition,
				maxWidth: maxWidth,
				left: leftPosition
				// scale: scaleY
			}}
		>
			<div className="container">
				<div className="experience-wrapper text_blue text_size-xl">
					<p>
						UX Mind Creative Agency's team with&nbsp;
						<strong>7+&nbsp;years of experience</strong> in&nbsp;UX/UI
						web&nbsp;&&nbsp;mobile design, NFT projects and SAAs. <br />
						We create style.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Experience;
