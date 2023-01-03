import React from 'react';
import Hero from './Hero/Hero';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Banner from './Banner/Banner';
import Request from './Request/Request';
import Customers from './Customers/Customers';
import Share from './Share/Share';
import useFetch from '../../hooks/useFetch';

const Home = () => {
	const data = useFetch(
		'http://localhost:1337/api/home-page?populate[reviews_items][populate]=*&populate[latest_projects_info_items][populate]=*&populate[latest_projects_images][populate]=*&populate[big_banner_image][populate]=*&populate[request_list_items][populate]=*',
		{}
	);

	if (data.data) {
		const attributes = data.data.data.attributes;
		return (
			<div className="home">
				<Hero attributes={attributes} />
				<Experience attributes={attributes} />
				<Projects attributes={attributes} />
				<Banner attributes={attributes} />
				<Request attributes={attributes} />
				<Customers attributes={attributes} />
				<Share attributes={attributes} />
			</div>
		);
	} else {
		return '';
	}
};

export default Home;
