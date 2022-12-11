import React from 'react';
import Hero from './Hero/Hero';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Experience />
			<Projects />
		</div>
	);
};

export default Home;
