import React, { useEffect, useRef, useState } from 'react';
import Title from '../../../components/Title';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { getCoords } from '../../../functions/functions';
import { useMediaQuery } from 'react-responsive';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';

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
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const scroll = useSelector((state) => state.scroll.scrollValues);

	const requestRef = useRef(null);

	const scrollY = useMotionValue(scroll.y);

	const [offsetY, setOffsetY] = useState(() => [0, 0]);

	// Animation values for the Request block
	const topValues = [0, 0];

	const topPosition = useTransform(scrollY, offsetY, topValues);

	// Animation values for the Request list
	const listHeightValues = [380, 1306];

	// Animation values for the list items
	const itemTransform = useTransform(scrollY, offsetY, [0, 521]);

	useEffect(() => {
		ScrollTrigger.matchMedia({
			'(max-width: 991px)': () => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: '.request-content',
						start: '20% 80%',
						end: '20% top',
						scrub: true,
						markers: true
					}
				});

				tl.to('.request-list__item-0', { opacity: 1 })
					.to('.request-list__item-1', { opacity: 1 })
					.to('.request-list__item-2', { opacity: 1 })
					.to('.request-list__item-3', { opacity: 1 })
					.to('.request-list__item-4', { opacity: 1 })
					.to('.request-list__item-5', { opacity: 1 })
					.to('.request-list__item-6', { opacity: 1 })
					.to('.request-list__item-7', { opacity: 1 });
			},
			'(min-width: 992px)': () => {
				gsap.to('.request', {
					backgroundColor: 'white',
					scrollTrigger: {
						scrub: 1,
						trigger: '.customers',
						start: 'top 20%',
						end: 'top 0%'
					}
				});
				gsap.to('.request-content', {
					height: '90vh',
					scrollTrigger: {
						scrub: 1,
						trigger: '.request-content',
						start: 'top 20%',
						end: 'top'
					}
				});
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: '.request-content',
						start: 'top 80%',
						end: 'top 20%',
						scrub: true
					}
				});

				tl.to('.request-list__item-0', { opacity: 1 })
					.to('.request-list__item-1', { opacity: 1 })
					.to('.request-list__item-2', { opacity: 1 })
					.to('.request-list__item-3', { opacity: 1 })
					.to('.request-list__item-4', { opacity: 1 })
					.to('.request-list__item-5', { opacity: 1 })
					.to('.request-list__item-6', { opacity: 1 })
					.to('.request-list__item-7', { opacity: 1 });
			}
		});
	}, []);

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

	useEffect(() => {
		scrollY.set(scroll.y);
	}, [scroll]);

	return (
		<motion.section
			className='section request'
			ref={requestRef}
			style={{ marginTop: topPosition, backgroundColor: '#0d08ff', height: isMobile ? 'auto' : '160vh' }}
		>
			<motion.div className='request-block'>
				<div className='container'>
					<div className='section-wrapper request-wrapper'>
						<div className='request-top'>
							<div className='request-top__link'>
								<button className='link-primary'>Leave a request</button>
							</div>
							<div className='request-top__title'>
								<Title size='s'>
									<span className='title_transparent'>Smart design</span>
									<br />& development solutions <br />
									for the digital environment
								</Title>
							</div>
						</div>
						<div className='request-content'
							 style={{
								 height: isMobile ? 'auto' : '50vh',
								 minHeight: isMobile ? 'auto' : '50vh',
								 paddingBottom: isMobile ? '0' : '100px'
							 }}>
							{isMobile ? (
								<ul className='request-list' ref={requestRef}>
									{requestList.map(({ id, text }) => {
										return (
											<li className={`request-list__item  request-list__item-${id}`} key={id}
												style={{ opacity: 0 }}>
												<p dangerouslySetInnerHTML={{ __html: text }}></p>
											</li>
										);
									})}
								</ul>
							) : (
								<motion.ul
									className='request-list'
									ref={requestRef}
								>
									{requestList.map(({ id, text }) => {
										return (
											<motion.li
												className={`request-list__item request-list__item-${id}`}
												key={id}
												style={{ opacity: 0 }}
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
