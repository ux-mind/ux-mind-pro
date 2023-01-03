import React, { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { getCoords } from '../../../../functions/functions';

const ProjectScroll = ({ data, attributes }) => {
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

	const { scrollY } = useScroll();

	const [offsetY, setOffsetY] = useState(() => new Array(data.length).fill(0));

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
					{attributes.latest_projects_info_items.map((project, idx, arr) => {
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
								<h3 className="title title_size-sm">{project.title}</h3>
								<p>{project.text}</p>
							</div>
						);
					})}
				</div>
				<div className="latest-projects-scroll__image" ref={imageContainer}>
					<div>
						{attributes.latest_projects_images.map(({ id, image }, idx) => {
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
										src={'http://localhost:1337' + image.data.attributes.formats.medium.url}
										srcSet={`http://localhost:1337${image.data.attributes.formats.medium.url} 1x, http://localhost:1337${image.data.attributes.url} 2x`}
										alt="project"
									/>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectScroll;
