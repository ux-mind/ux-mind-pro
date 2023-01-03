import React from 'react';
import ArrowBtn from '../../../components/ArrowBtn';
import ProjectScroll from './ProjectScroll/ProjectScroll';
import ProjectSlider from './ProjectSlider/ProjectSlider';

import projects from '../../../data/projects';

const Projects = ({ attributes }) => {
	return (
		<section className="section latest-projects">
			<div className="container">
				<div className="section-wrapper latest-projects-wrapper">
					<div className="latest-projects-header">
						<h2 className="title title_size-l">
							{attributes.latest_projects_title_bold} <br />
							<span className="title_transparent">{attributes.latest_projects_title_transparent}</span>
						</h2>
						<div className="latest-projects-header__count">
							<p className="title title_size-xs">{attributes.latest_projects_number}</p>
						</div>
					</div>

					{/* Desktop scroll */}
					<ProjectScroll attributes={attributes} data={projects} />

					{/* Mobile slider */}
					<ProjectSlider attributes={attributes} data={projects} />

					<div className="latest-projects__link">
						<ArrowBtn type="link" to={attributes.latest_projects_link_url}>
							{attributes.latest_projects_link_text}
						</ArrowBtn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
