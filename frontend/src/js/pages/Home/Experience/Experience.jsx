import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTransform, motion, useScroll } from 'framer-motion';
import { getCoords } from '../../../functions/functions';

const Experience = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const experienceRef = useRef(null);

	const [offsetY, setOffsetY] = useState(() => (isMobile ? [0, 0] : [0, 0, 0, 0, 0]));

	const { scrollY } = useScroll();

	// Animation values for the Experience block
	const topValues = isMobile ? [0, 800] : [0, 800, 1600, 1800, 2100];
	const heightValues = isMobile ? [375, 812] : [560, 1000, 1000, 1000, 1000];

	const minHeight = useTransform(scrollY, offsetY, heightValues);
	const topPosition = useTransform(scrollY, offsetY, topValues);

	// Animation values for the Experience background
	const heightBgValues = isMobile ? ['100%', '100%'] : ['100%', '100%', '0%', '0%', '0%'];
	const widthBgValues = isMobile ? ['100%', '100%'] : ['100%', '100%', '0%', '0%', '0%'];
	const leftBgValues = isMobile ? ['0%', '0%'] : ['0%', '0%', '50%', '50%', '50%'];

	const heightBgPosition = useTransform(scrollY, offsetY, heightBgValues);
	const maxBgWidth = useTransform(scrollY, offsetY, widthBgValues);
	const leftBgPosition = useTransform(scrollY, offsetY, leftBgValues);

	// Animation values for the Experience text
	const textColorValues = isMobile
		? ['#0D08FF', '#0D08FF']
		: ['#0D08FF', '#0D08FF', '#FFF', '#FFF', 'rgba(255, 255, 255, 0)'];
	const textTopValues = isMobile ? ['50%', '50%'] : ['50%', '50%', '50%', '50%', '0%'];
	const textScaleValues = isMobile ? [1, 1] : [1, 1, 1, 1, 0.6];

	const textColor = useTransform(scrollY, offsetY, textColorValues);
	const textTop = useTransform(scrollY, offsetY, textTopValues);
	const textScale = useTransform(scrollY, offsetY, textScaleValues);

	useEffect(() => {
		if (experienceRef) {
			let { top } = getCoords(experienceRef.current);

			top = top - topValues[topValues.length - 1];

			if (!isMobile) {
				setOffsetY([top, top + 800, top + 1600, top + 1800, top + 2400]);
			}

			if (isMobile) {
				setOffsetY([top, top + 800]);
			}
		}
	}, [experienceRef]);

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
			<motion.div
				className="experience-text"
				style={{ top: textTop, scale: textScale, translateY: '-50%' }}
			>
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
			</motion.div>
		</motion.div>
	);
};

export default Experience;
