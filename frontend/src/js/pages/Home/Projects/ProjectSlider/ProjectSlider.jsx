import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper';

const ProjectSlider = ({ data, attributes }) => {
	const paginationRef = useRef(null);

	return (
		<div className="latest-projects-slider">
			<div className="latest-projects-slider__wrapper">
				<Swiper
					modules={[EffectFade, Pagination]}
					pagination={{
						el: '.latest-projects-slider__pagination'
					}}
					// onBeforeInit={(swiper) => {
					// 	swiper.params.pagination.el = paginationRef.current;
					// }}
					effect="fade"
				>
					{attributes.latest_projects_info_items.map((project, idx) => (
						<SwiperSlide key={project.id}>
							<div className="latest-projects-slider__image">
								<img
									width="835"
									height="626"
									src={'http://localhost:1337' + attributes.latest_projects_images[idx].image.data.attributes.formats.medium.url}
									srcSet={`http://localhost:1337${attributes.latest_projects_images[idx].image.data.attributes.formats.medium.url} 1x, http://localhost:1337${attributes.latest_projects_images[idx].image.data.attributes.url} 2x`}
									alt="project"
								/>
							</div>
							<div className="latest-projects-slider__content">
								<div className="text-block">
									<span className="chapter text_size-s">{project.industry}</span>
									<h3 className="title title_size-sm">{project.title}</h3>
									<p>{project.text}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="latest-projects-slider__pagination" ref={paginationRef}></div>
		</div>
	);
};

export default ProjectSlider;
