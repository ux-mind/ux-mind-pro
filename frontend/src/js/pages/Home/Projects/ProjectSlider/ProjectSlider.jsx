import React from 'react';

const ProjectSlider = ({ data }) => {
	// TODO: ADD SLIDER
	return (
		<div className="latest-projects-slider">
			<div className="latest-projects-slider__wrapper">
				<div className="latest-projects-slider__content">
					<div className="text-block">
						<span className="chapter text_size-s">Ecommerce</span>
						<h3 className="title title_size-sm">Headphone Store</h3>
						<p>
							All the Lorem Ipsum generators on the Internet tend to repeat predefined
							chunks as necessary, making this the first true generator on the
							Internet.
						</p>
					</div>
				</div>
				<div className="latest-projects-slider__image">
					<img
						width="835"
						height="626"
						src={data[0].img.x1}
						srcSet={`${data[0].img.x1} 1x, ${data[0].img.x2} 2x`}
						alt="project"
					/>
				</div>
			</div>
			<div className="latest-projects-slider__pagination">
				<span className="pagination-tab pagination-tab_active"></span>
				<span className="pagination-tab"></span>
				<span className="pagination-tab"></span>
			</div>
		</div>
	);
};

export default ProjectSlider;
