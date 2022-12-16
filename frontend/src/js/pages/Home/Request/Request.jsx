import React from 'react';
import Title from '../../../components/Title';

const requestList = [
	{ id: 0, text: 'UX/UI' },
	{ id: 1, text: 'web & mobile app design' },
	{ id: 2, text: 'graphic design' },
	{ id: 3, text: 'motion design' },
	{ id: 4, text: '2D&3D design' },
	{ id: 5, text: 'design for NFT and crypto space' },
	{ id: 6, text: 'usability audit and A/B testing' },
	{ id: 7, text: 'full-stack development from scratch' }
];

const Request = () => {
	return (
		<section className="section request">
			<div className="container">
				<div className="section-wrapper request-wrapper">
					<div className="request-top">
						<div className="request-top__link">
							<button className="link-primary">Leave a request</button>
						</div>
						<div>
							<Title size="s">
								<span className="title_transparent">Smart design</span>
								<br />& development solutions for the digital environment
							</Title>
						</div>
					</div>
					<div className="request-content">
						<ul className="request-list">
							{requestList.map(({ id, text }) => {
								return (
									<li className="request-list__item" key={id}>
										{text}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Request;
