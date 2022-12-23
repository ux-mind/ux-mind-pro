import React, { useRef, useState, useEffect } from 'react';

const ProjectScroll = ({ data }) => {
	const imageContainer = useRef(null);
	const firstProjectText = useRef(null);
	const lastProjectText = useRef(null);

	const [contentPaddingTop, setContentPaddingTop] = useState(0);
	const [contentPaddingBottom, setContentPaddingBottom] = useState(0);

	useEffect(() => {
		if (imageContainer && firstProjectText && lastProjectText) {
			const halfImageHeight = imageContainer.current.offsetHeight / 2;

			const firstProjectTextHeight = firstProjectText.current.offsetHeight / 2;

			const lastProjectTextHeight = lastProjectText.current.offsetHeight / 2;

			setContentPaddingTop(halfImageHeight - firstProjectTextHeight);
			setContentPaddingBottom(halfImageHeight - lastProjectTextHeight);
		}
	}, [imageContainer, firstProjectText, lastProjectText]);

	return (
		<div className="latest-projects-scroll">
			<div className="latest-projects-scroll__wrapper">
				<div
					className="latest-projects-scroll__content"
					style={{
						paddingTop: `${contentPaddingTop}px`,
						paddingBottom: `${contentPaddingBottom}px`
					}}
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
					{/* <div className="text-block" ref={firstProjectText}>
						<span className="chapter text_size-s">Ecommerce</span>
						<h3 className="title title_size-sm">Headphone Store</h3>
						<p>
							All the Lorem Ipsum generators on the Internet tend to repeat predefined
							chunks as necessary, making this the first true generator on the
							Internet.
						</p>
					</div>
					<div className="text-block">
						<span className="chapter text_size-s">Mobile App</span>
						<h3 className="title title_size-sm">Flight Booking</h3>
						<p>
							All the Lorem Ipsum generators on the Internet tend to repeat predefined
							chunks as necessary, making this the first true generator on the
							Internet.
						</p>
					</div>
					<div className="text-block" ref={lastProjectText}>
						<span className="chapter text_size-s">Web App</span>
						<h3 className="title title_size-sm">Crypto Exchange</h3>
						<p>
							All the Lorem Ipsum generators on the Internet tend to repeat predefined
							chunks as necessary, making this the first true generator on the
							Internet.
						</p>
					</div> */}
				</div>
				<div className="latest-projects-scroll__image" ref={imageContainer}>
					<div>
						{data.map(({ id, img }) => {
							return (
								<img
									width="835"
									height="626"
									src={img.x1}
									srcSet={`${img.x1} 1x, ${img.x2} 2x`}
									alt="project"
									key={id}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectScroll;
