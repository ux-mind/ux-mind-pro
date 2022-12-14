import React from 'react';
import Title from '../Title';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const AnimatedTextLine = ({ attributes }) => {
	const isUltraWide = useMediaQuery({
		query: `(min-width: 1920px)`
	});

	if (attributes) {
		return (
			<div className="animated-textline">
				<motion.div
					className="animated-textline__line"
					animate={{
						translateX: ['-100%', '0%']
					}}
					transition={{
						duration: isUltraWide ? 7 : 9,
						ease: 'linear',
						repeat: Infinity
					}}
				>
					<Title size="s">
						<span className="title_transparent">
							{attributes.top_banner_text_animated}&nbsp;
						</span>
					</Title>
				</motion.div>
				<motion.div
					className="animated-textline__line"
					animate={{
						translateX: ['-100%', '0%']
					}}
					transition={{
						duration: isUltraWide ? 7 : 9,
						ease: 'linear',
						repeat: Infinity
					}}
				>
					<Title size="s">
						<span className="title_transparent">
							{attributes.top_banner_text_animated}&nbsp;
						</span>
					</Title>
				</motion.div>
				{isUltraWide && (
					<motion.div
						className="animated-textline__line"
						animate={{
							translateX: ['-100%', '0%']
						}}
						transition={{
							duration: 7,
							ease: 'linear',
							repeat: Infinity
						}}
					>
						<Title size="s">
							<span className="title_transparent">
								{attributes.top_banner_text_animated}&nbsp;
							</span>
						</Title>
					</motion.div>
				)}
			</div>
		);
	} else {
		return '';
	}
};

export default AnimatedTextLine;
