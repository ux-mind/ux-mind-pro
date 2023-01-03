import React, { useRef, useState, useEffect } from 'react';
import Title from '../../../components/Title';
import { motion, useTransform, useScroll, useInView } from 'framer-motion';
import { getCoords } from '../../../functions/functions';
import { useMediaQuery } from 'react-responsive';

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

const Request = ({ attributes }) => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const requestRef = useRef(null);

	const isInView = useInView(requestRef);

	const { scrollY } = useScroll();

	const [offsetY, setOffsetY] = useState(() => [0, 0]);

	// Animation values for the Request block
	const topValues = [0, 0];

	const topPosition = useTransform(scrollY, offsetY, topValues);

	// Animation values for the Request list
	const listHeightValues = [380, 1306];

	const listMinHeight = useTransform(scrollY, offsetY, listHeightValues);

	// Animation values for the list items
	const itemTransform = useTransform(scrollY, offsetY, [0, 521]);

	useEffect(() => {
		if (requestRef) {
			let { top } = getCoords(requestRef.current);

			const topValue = topValues[topValues.length - 1];

			top = top - topValue;

			let offsetArr = new Array(topValues.length).fill(top);

			offsetArr = [top, top + 1200];

			setOffsetY(offsetArr);
		}
	}, [requestRef]);

	return (
		<motion.section
			className="section request"
			ref={requestRef}
			style={{ marginTop: topPosition }}
		>
			<motion.div className="request-block">
				<div className="container">
					<div className="section-wrapper request-wrapper">
						<div className="request-top">
							<div className="request-top__link">
								<button className="link-primary">{attributes.request_link_text}</button>
							</div>
							<div className="request-top__title">
								<Title size="s">
									<span className="title_transparent">{attributes.request_title_transparent}</span>
									<span dangerouslySetInnerHTML={{ __html: attributes.request_title_bold }}></span>
								</Title>
							</div>
						</div>
						<div className="request-content">
							{isMobile ? (
								<ul className="request-list" ref={requestRef}>
									{attributes.request_list_items.map(({ id, text }, idx) => {
										return (
											<li className="request-list__item" key={id}>
												<p dangerouslySetInnerHTML={{ __html: text }}></p>
											</li>
										);
									})}
								</ul>
							) : (
								<motion.ul
									className="request-list"
									ref={requestRef}
									style={{ height: listMinHeight }}
								>
									{attributes.request_list_items.map(({ id, text }, idx) => {
										return (
											<motion.li
												className="request-list__item"
												key={id}
												style={{
													transition: isInView
														? `opacity .4s ${1 + 0.4 * idx}s`
														: 'none',
													opacity: isInView ? 1 : 0
												}}
											>
												<motion.p
													dangerouslySetInnerHTML={{ __html: text }}
													style={{ top: itemTransform }}
												></motion.p>
											</motion.li>
										);
									})}
								</motion.ul>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Request;
