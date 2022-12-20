import React from 'react';
import Title from '../../../components/Title';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../../../data/publicRoutes';
import ArrowBtn from '../../../components/ArrowBtn';

const Share = () => {
	return (
		<section className="section share">
			<div className="container">
				<div className="section-wrapper share-wrapper">
					<div className="share-title">
						<Title size="l">
							<span className="title_transparent">Have an idea?</span>
							<br />
							<span className="title_underlined">Tell us about it</span>
						</Title>
					</div>
					<div className="share-link">
						<ArrowBtn type="link" to={PUBLIC_ROUTES.contact}>
							Let’s talk
						</ArrowBtn>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Share;
