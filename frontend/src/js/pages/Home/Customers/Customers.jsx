import React from 'react';
import Title from '../../../components/Title';
import CustomersRow from './CustomersRow/CustomersRow';
import ReviewsSwiper from './ReviewsSwiper/ReviewsSwiper';
import { Link } from 'react-router-dom';

const Customers = ({ attributes }) => {
	return (
		<section className="section customers">
			<div className="container">
				<div className="customers-title">
					<Title size="l" color="blue">
						{attributes.customers_title_bold_before}<br />
						<span className="title_transparent">{attributes.customers_title_transparent}</span>
						&nbsp;{attributes.customers_title_bold_after}
					</Title>
				</div>
			</div>
			<CustomersRow attributes={attributes} />
			<div className="container">
				<div className="reviews">
					<div className="reviews-link">
						<Link className="reviews-link__link link-primary text_blue" to={attributes.reviews_link_url}>
							{attributes.reviews_link_text}
						</Link>
					</div>
					<ReviewsSwiper attributes={attributes} />
				</div>
			</div>
		</section>
	);
};

export default Customers;
