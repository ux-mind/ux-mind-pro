import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { getCoords, getViewportCoords } from '../../../../functions/functions';

import { useSelector } from 'react-redux';

const ProjectScroll = ({ data }) => {
	const scroll = useSelector((state) => state.scroll.scrollValues);

	const imageContainer = useRef(null);
	const firstProjectText = useRef(null);
	const lastProjectText = useRef(null);

	const contentBlockRef = useRef(null);

	const [imageTopPadding, setImageTopPadding] = useState(0);

	const [paddingTop, setPaddingTop] = useState(0);
	const [paddingBottom, setPaddingBottom] = useState(0);

	const [scrollTopValue, setScrollTopValue] = useState(0);
	const [scrollBottomValue, setScrollBottomValue] = useState(0);

	const [imageTransformValue, setImageTransformValue] = useState(0);

	const imageTransformMotionValue = useMotionValue(imageTransformValue);

	useEffect(() => {
		if (imageContainer) {
			const imageHeight = imageContainer.current.offsetHeight;

			const imageTopPadding = (window.innerHeight - imageHeight) / 2;

			setImageTopPadding(imageTopPadding);
		}
	}, [imageContainer]);

	useEffect(() => {
		imageTransformMotionValue.set(imageTransformValue);
	}, [imageTransformValue]);

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

	const scrollY = useMotionValue(scroll.offset.y);

	const [offsetY, setOffsetY] = useState(() => new Array(data.length).fill(0));

	useEffect(() => {
		scrollY.set(scroll.offset.y);
	}, [scroll]);

	useEffect(() => {
		if (imageContainer && scrollBlockRef && imageTopPadding > 0) {
			const { top } = getViewportCoords(imageContainer.current);

			const sectionHeight = scrollBlockRef.current.offsetHeight;

			if (top <= imageTopPadding && !scrollTopValue && !scrollBottomValue) {
				setScrollTopValue(scrollY.current);
				setScrollBottomValue(
					scrollY.current + sectionHeight - imageContainer.current.offsetHeight
				);
			}

			if (scrollTopValue && scrollBottomValue) {
				if (scrollY.current >= scrollTopValue && scrollY.current < scrollBottomValue) {
					setImageTransformValue(scrollY.current - scrollTopValue);
				}
			}
		}
	}, [scrollY.current, imageContainer, scrollBlockRef]);

	useEffect(() => {
		if (contentBlockRef && imageTopPadding > 0) {
			const block = contentBlockRef.current;

			const newTextScrolls = [];

			Array.from(block.children).forEach((element) => {
				const { top } = getCoords(element);

				const scrollValue = top - imageTopPadding - (paddingTop + paddingBottom) / 2;

				newTextScrolls.push(scrollValue);
			}, []);

			setOffsetY(newTextScrolls);
		}
	}, [contentBlockRef, paddingBottom, paddingTop]);

	const imageTransform = useTransform(scrollY, offsetY, [
		0,
		(scrollBottomValue - scrollTopValue) / 2,
		scrollBottomValue - scrollTopValue
	]);

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
				<motion.div
					className="latest-projects-scroll__image"
					style={{ translateY: imageTransform }}
					ref={imageContainer}
				>
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
				</motion.div>
			</div>
		</div>
	);
};

export default ProjectScroll;
