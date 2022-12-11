import React from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';

const Experience = () => {
	const { scrollY } = useScroll();

	const offsetY = [0, 500];

	return (
		<section className="experience">
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
		</section>
	);
};

export default Experience;
