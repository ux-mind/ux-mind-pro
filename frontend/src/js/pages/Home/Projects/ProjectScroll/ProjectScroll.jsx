import React, { useRef, useState, useEffect, useContext } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { getCoords } from '../../../../functions/functions';
import { ScrollContext } from '../../../../context/ScrollContext';

const ProjectScroll = ({ data }) => {
	const context = useContext(ScrollContext);

	const imageContainer = useRef(null);
	const firstProjectText = useRef(null);
	const lastProjectText = useRef(null);

	const contentBlockRef = useRef(null);

	const [paddingTop, setPaddingTop] = useState(0);
	const [paddingBottom, setPaddingBottom] = useState(0);

	useEffect(() => {
		if (imageContainer && firstProjectText && lastProjectText) {
			const halfImageHeight = imageContainer.current.offsetHeight / 2;

			const firstProjectTextHeight = firstProjectText.current.offsetHeight / 2;

			const lastProjectTextHeight = lastProjectText.current.offsetHeight / 2;

			setPaddingTop(halfImageHeight - firstProjectTextHeight);
			setPaddingBottom(halfImageHeight - lastProjectTextHeight);
		}
	}, [imageContainer, firstProjectText, lastProjectText]);

	const scrollBlockRef = useRef(null);

	const scrollY = useMotionValue(context.offset.y);

	const [offsetY, setOffsetY] = useState(() => new Array(data.length).fill(0));

	useEffect(() => {
		scrollY.set(context.offset.y);
	}, [context]);

	useEffect(() => {
		if (contentBlockRef) {
			const block = contentBlockRef.current;

			const newTextScrolls = [];

			Array.from(block.children).forEach((element) => {
				const { top } = getCoords(element);

				const scrollValue = top - 100 - (paddingTop + paddingBottom) / 2;

				newTextScrolls.push(scrollValue);
			}, []);

			setOffsetY(newTextScrolls);
		}
	}, [contentBlockRef, paddingBottom, paddingTop]);

	return (
		<div className="latest-projects-scroll" ref={scrollBlockRef}>
			<div className="latest-projects-scroll__wrapper">
				<div
					className="latest-projects-scroll__content"
					style={{
						paddingTop: `${paddingTop}px`,
						paddingBottom: `${paddingBottom}px`
					}}
					ref={contentBlockRef}
				>
					{data.map((project, idx, arr) => {
						let currentRef = null;

						if (idx === 0) {
							currentRef = firstProjectText;
						}

						if (idx === arr.length - 1) {
							currentRef = lastProjectText;
						}

						return (
							<div className="text-block" ref={currentRef} key={project.id}>
								<span className="chapter text_size-s">{project.industry}</span>
								<h3 className="title title_size-sm">{project.name}</h3>
								<p>{project.content}</p>
							</div>
						);
					})}
				</div>
				<div className="latest-projects-scroll__image" ref={imageContainer}>
					{data.map(({ id, img }, idx) => {
						let opacityValues = new Array(data.length).fill(0);

						opacityValues[idx] = 1;

						const opacity = useTransform(scrollY, offsetY, opacityValues);

						return (
							<motion.div
								className="img-wrapper"
								style={{ opacity: opacity }}
								key={id}
							>
								<img
									width="835"
									height="626"
									src={img.x1}
									srcSet={`${img.x1} 1x, ${img.x2} 2x`}
									alt="project"
								/>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectScroll;
