import React from 'react';
import ArrowBtn from '../../../components/ArrowBtn';
import ProjectScroll from './ProjectScroll/ProjectScroll';
import ProjectSlider from './ProjectSlider/ProjectSlider';
import { motion } from 'framer-motion';
import useExperienceAnimation from '../../../hooks/animationHooks/useExperienceAnimation';

import { useSelector } from 'react-redux';

import projects from '../../../data/projects';

const Projects = () => {
	const scroll = useSelector((state) => state.scroll.scrollValues);

	const { projectsTranslateY, projectsMarginTop, textTop, topPosition } =
		useExperienceAnimation(scroll);

	return (
		<motion.section
			className="section latest-projects"
			style={{
				// translateY: projectsTranslateY
				// marginTop: projectsMarginTop
				translateY: projectsTranslateY
			}}
		>
			<div className="container">
				<div className="section-wrapper latest-projects-wrapper">
					<div className="latest-projects-header">
						<h2 className="title title_size-l">
							Our latest <br />
							<span className="title_transparent">projects</span>
						</h2>
						<div className="latest-projects-header__count">
							<p className="title title_size-xs">150+ projects</p>
						</div>
					</div>

					{/* Desktop scroll */}
					<ProjectScroll data={projects} />

					{/* Mobile slider */}
					<ProjectSlider data={projects} />

					<div className="latest-projects__link">
						<ArrowBtn type="link" to="/projects">
							See more projects
						</ArrowBtn>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Projects;
