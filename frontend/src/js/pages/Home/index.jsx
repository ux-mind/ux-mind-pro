import React from 'react';
import Hero from './Hero/Hero';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Banner from './Banner/Banner';
import Request from './Request/Request';
import Customers from './Customers/Customers';
import Share from './Share/Share';

const Home = () => {
	return (
		<div className="home">
			<Hero />
			<Experience />
			{/* <Projects />
			<Banner /> */}
			<Request />
			<Customers />
			<Share />
		</div>
	);
};

export default Home;
