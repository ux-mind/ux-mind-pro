import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectScroll = ({ data }) => {
	const imageContainer = useRef(null);
	const firstProjectText = useRef(null);
	const lastProjectText = useRef(null);
	const projectsRef = useRef(null);
	const tl1 = useRef(null);

	const contentBlockRef = useRef(null);

	const [paddingTop, setPaddingTop] = useState(0);
	const [paddingBottom, setPaddingBottom] = useState(0);

	const [imgScrollHeight, setImgScrollHeight] = useState(0);

	useEffect(() => {
		if (imageContainer && projectsRef) {
			const imageHeight = imageContainer.current.offsetHeight;
			const projectsHieght = projectsRef.current.offsetHeight;

			setImgScrollHeight(projectsHieght - imageHeight);
		}
	}, [imageContainer, projectsRef]);

	useEffect(() => {
		if (imageContainer && firstProjectText && lastProjectText) {
			const halfImageHeight = imageContainer.current.offsetHeight / 2;

			const firstProjectTextHeight = firstProjectText.current.offsetHeight / 2;

			const lastProjectTextHeight = lastProjectText.current.offsetHeight / 2;

			setPaddingTop(halfImageHeight - firstProjectTextHeight);
			setPaddingBottom(halfImageHeight - lastProjectTextHeight);
		}
	}, [imageContainer, firstProjectText, lastProjectText]);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			tl1.current = gsap.timeline(
				{
					scrollTrigger: {
						trigger: '#projects-img',
						pin: true,
						start: 'center center',
						end: `+=${imgScrollHeight}px`,
						scrub: true
					},
					ease: 'none'
				},
				imageContainer
			);

			tl1.current
				.add('start')
				.fromTo(`.image-wrapper-1`, { opacity: 1 }, { opacity: 0 }, 'start')
				.fromTo('.image-wrapper-2', { opacity: 0 }, { opacity: 1 }, 'start')
				.fromTo('.image-wrapper-3', { opacity: 0 }, { opacity: 0 }, 'start')
				.add('end', '>')
				.fromTo(`.image-wrapper-1`, { opacity: 0 }, { opacity: 0 }, 'end')
				.fromTo('.image-wrapper-2', { opacity: 1 }, { opacity: 0 }, 'end')
				.fromTo('.image-wrapper-3', { opacity: 0 }, { opacity: 1 }, 'end');
		});

		return () => ctx.revert();
	}, [imgScrollHeight, imageContainer]);

	return (
		<div className="latest-projects-scroll" id="#projects" ref={projectsRef}>
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
					id="projects-img"
					ref={imageContainer}
				>
					{data.map(({ id, img }, idx) => {
						return (
							<motion.div className={`img-wrapper image-wrapper-${idx + 1}`} key={id}>
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
