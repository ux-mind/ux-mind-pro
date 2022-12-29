import React, { useRef } from 'react';
import Title from '../../../components/Title';
import { motion, useInView } from 'framer-motion';

const requestList = [
	{ id: 0, text: 'UX/UI' },
	{ id: 1, text: 'web & mobile <br />app design' },
	{ id: 2, text: 'graphic design' },
	{ id: 3, text: 'motion design' },
	{ id: 4, text: '2D&3D design' },
	{ id: 5, text: 'design for NFT <br />and crypto space' },
	{
		id: 6,
		text: 'usability audit <br />and A/B testing'
	},
	{ id: 7, text: 'full-stack development from&nbsp;scratch' }
];

const Request = () => {
	const requestRef = useRef(null);

	const isInView = useInView(requestRef);

	return (
		<section className="section request">
			<div className="container">
				<div className="section-wrapper request-wrapper">
					<div className="request-top">
						<div className="request-top__link">
							<button className="link-primary">Leave a request</button>
						</div>
						<div className="request-top__title">
							<Title size="s">
								<span className="title_transparent">Smart design</span>
								<br />& development solutions <br />
								for the digital environment
							</Title>
						</div>
					</div>
					<div className="request-content">
						<ul className="request-list" ref={requestRef}>
							{requestList.map(({ id, text }, idx) => {
								return (
									<motion.li
										className="request-list__item"
										key={id}
										style={{
											opacity: isInView ? 1 : 0,
											transition: isInView
												? `opacity .4s ${0.5 * idx}s`
												: 'none'
										}}
										// animate={{ opacity: isInView ? 1 : 0 }}
										// transition={{ ease: 'easeOut', duration: 0.5 * idx }}
									>
										<p dangerouslySetInnerHTML={{ __html: text }}></p>
									</motion.li>
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
