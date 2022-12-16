import React from 'react';
import ArrowBtn from '../../../components/ArrowBtn';
import { projects } from '../../../data/publicRoutes';

import project1 from '../../../../assets/images/project1.png';
import project1_2x from '../../../../assets/images/project1@2x.png';
import project2 from '../../../../assets/images/project2.png';
import project2_2x from '../../../../assets/images/project2@2x.png';
import project3 from '../../../../assets/images/project3.png';
import project3_2x from '../../../../assets/images/project3@2x.png';

const Projects = () => {
	return (
		<section className="latest-projects">
			<div className="container">
				<div className="latest-projects-wrapper">
					<div className="latest-projects-header">
						<h2 className="title title_size-l">
							Our latest <br />
							<span className="title_transparent">projects</span>
						</h2>
						<div className="latest-projects-header__count">
							<p className="title title_size-xs">150+ projects</p>
						</div>
					</div>
					<div className="latest-projects-slider__wrapper">
						<div className="latest-projects-slider">
							<div className="latest-projects-slider__content">
								<div className="text-block">
									<span className="chapter text_size-s">Ecommerce</span>
									<h3 className="title title_size-sm">Headphone Store</h3>
									<p>
										All the Lorem Ipsum generators on the Internet tend to
										repeat predefined chunks as necessary, making this the first
										true generator on the Internet.
									</p>
								</div>
							</div>
							<div className="latest-projects-slider__image">
								<img
									width="835"
									height="626"
									src={project1}
									srcSet={`${project1} 1x, ${project1_2x} 2x`}
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
					<div className="latest-projects__link">
						<ArrowBtn type="link" to="/projects">
							See more projects
						</ArrowBtn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
