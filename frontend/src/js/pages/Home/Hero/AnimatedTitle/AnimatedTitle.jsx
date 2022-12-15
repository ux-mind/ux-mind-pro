import React from 'react';
import Title from '../../../../components/Title';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const AnimatedTitle = () => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const isUltraWide = useMediaQuery({
		query: `(min-width: 1920px)`
	});

	return (
		<div className="hero-title">
			<div className="hero-title__wrapper">
				<Title size="xl">UX Mind</Title>
			</div>
			<motion.div
				className="hero-title_animated"
				animate={{
					translateX: ['0%', '-100%']
				}}
				transition={{
					duration: isMobile ? 5 : isUltraWide ? 7 : 9,
					ease: 'linear',
					repeat: Infinity
				}}
			>
				<Title size="xl">
					<span className="title_transparent">UX Mind UX Mind&nbsp;</span>
				</Title>
			</motion.div>
			<motion.div
				className="hero-title_animated hero-title_animated-last"
				animate={{
					translateX: ['100%', '0%']
				}}
				transition={{
					duration: isMobile ? 5 : isUltraWide ? 7 : 9,
					ease: 'linear',
					repeat: Infinity
				}}
			>
				<Title size="xl">
					<span className="title_transparent">UX Mind UX Mind&nbsp;</span>
				</Title>
			</motion.div>
			{(isMobile || isUltraWide) && (
				<motion.div
					className="hero-title_animated"
					animate={{
						translateX: ['200%', '100%']
					}}
					transition={{
						duration: isMobile ? 5 : isUltraWide ? 7 : 9,
						ease: 'linear',
						repeat: Infinity
					}}
				>
					<Title size="xl">
						<span className="title_transparent">UX Mind UX Mind&nbsp;</span>
					</Title>
				</motion.div>
			)}
		</div>
	);
};

export default AnimatedTitle;
