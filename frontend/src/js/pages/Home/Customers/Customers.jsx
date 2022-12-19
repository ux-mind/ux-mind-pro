import React from 'react';
import Title from '../../../components/Title';
import CustomersRow from './CustomersRow/CustomersRow';
import ReviewsSwiper from './ReviewsSwiper/ReviewsSwiper';
import { Link } from 'react-router-dom';

const Customers = () => {
	return (
		<section className="section customers">
			<div className="container">
				<div className="customers-title">
					<Title size="l" color="blue">
						What our <br />
						<span className="title_transparent">customers</span> say
					</Title>
				</div>
			</div>
			<CustomersRow />
			<div className="container">
				<div className="reviews">
					<div className="reviews-link">
						<Link className="reviews-link__link link-primary text_blue" to="">
							See more reviews
						</Link>
					</div>
					<ReviewsSwiper />
				</div>
			</div>
		</section>
	);
};

export default Customers;
