import React from 'react';
import Hero from './Hero/Hero';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Banner from './Banner/Banner';
import Request from './Request/Request';
import Customers from './Customers/Customers';
import Share from './Share/Share';

import useExperienceAnimation from '../../hooks/animationHooks/useExperienceAnimation';

const Home = () => {
	const { experienceRef, experienceText } = useExperienceAnimation();

	return (
		<div className='home'>
			<Hero />
			<Experience experienceRef={experienceRef} experienceText={experienceText} />
			<Projects />
			<Banner />
			<Request />
			<Customers />
			<Share />
		</div>
	);
};

export default Home;
