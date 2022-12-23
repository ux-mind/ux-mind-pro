import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper';

const ProjectSlider = ({ data }) => {
	const paginationRef = useRef(null);

	return (
		<div className="latest-projects-slider">
			<div className="latest-projects-slider__wrapper">
				<Swiper
					modules={[EffectFade, Pagination]}
					pagination={{
						el: paginationRef.current
					}}
					onBeforeInit={(swiper) => {
						swiper.params.pagination.el = paginationRef.current;
					}}
					effect="fade"
				>
					{data.map((project) => (
						<SwiperSlide key={project.id}>
							<div className="latest-projects-slider__image">
								<img
									width="835"
									height="626"
									src={project.img.x1}
									srcSet={`${project.img.x1} 1x, ${project.img.x2} 2x`}
									alt="project"
								/>
							</div>
							<div className="latest-projects-slider__content">
								<div className="text-block">
									<span className="chapter text_size-s">{project.industry}</span>
									<h3 className="title title_size-sm">{project.name}</h3>
									<p>{project.content}</p>
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
