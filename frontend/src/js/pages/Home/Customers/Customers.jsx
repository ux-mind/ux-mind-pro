import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Title from '../../../components/Title';
import CustomersRow from './CustomersRow/CustomersRow';
import ReviewsSwiper from './ReviewsSwiper/ReviewsSwiper';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useMediaQuery } from 'react-responsive';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Customers = () => {
	const titleHeight = useRef();
	const customersHeight = useRef();
	const reviewsHeight = useRef();
	const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

	const [containerHeight, setContainerHeight] = useState(100);

	useLayoutEffect(() => {
		ScrollTrigger.matchMedia({
			'(max-width: 991px)': () => {
				gsap.to('.customers', {
					scrollTrigger: {
						pin: true,
						pinnedContainer: '.customers',
						trigger: '.customers',
						start: 'top 0px',
						end: '+=200'
					}
				});

				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: '.customers',
						start: 'top 300',
						end: 'top top',
						toggleActions: 'play none play reverse',
						scrub: 1
					}
				});

				timeline.to('.customers-title-container', { top: '10%' })
					.to('.customers-row-container', { top: 'calc(10% + 200px)' })
					.to('.customers-reviews-container', { top: 'calc(10% + 200px + 100px)' });

				gsap.to('.overlay-white', {
					height: '45%',
					scrollTrigger: {
						trigger: '.customers',
						start: 'bottom-=45% 25%',
						end: 'bottom-=45% 25%',
						scrub: 3,
					}
				});

				gsap.to('.reviews', {
					scrollTrigger: {
						trigger: '.customers',
						toggleClass: 'reviews-white-color',
						start: 'bottom-=45% 25%',
						end: 'bottom+=100%',
					}
				});
			},
			'(min-width: 992px)': () => {
				gsap.to('.customers', {
					scrollTrigger: {
						pin: true,
						pinnedContainer: '.customers',
						trigger: '.customers',
						start: 'top 0px',
						end: '+=200'
					}
				});

				const timeline = gsap.timeline({
					scrollTrigger: {
						trigger: '.customers',
						start: 'top 300',
						end: 'top top',
						toggleActions: 'play none play reverse',
						scrub: 1
					}
				});

				timeline.to('.customers-title-container', { top: '10%' })
					.to('.customers-row-container', { top:  'calc(10% + 350px)' })
					.to('.customers-reviews-container', { top:  'calc(10% + 350px + 150px)' });

				gsap.to('.overlay-white', {
					height: '40%',
					scrollTrigger: {
						trigger: '.customers',
						start: 'bottom-=45% 25%',
						end: 'bottom-=45% 25%',
						scrub: 3
					}
				});

				gsap.to('.reviews', {
					scrollTrigger: {
						trigger: '.customers',
						toggleClass: 'reviews-white-color',
						start: 'bottom-=45% 25%'
					}
				});
			}
		});

	}, []);

	useEffect(() => {
		if (titleHeight && customersHeight && reviewsHeight) {
			setContainerHeight(titleHeight.current?.clientHeight +
				customersHeight.current?.clientHeight +
				reviewsHeight.current?.clientHeight + (isMobile ? 300 : 500));
		}
	}, [titleHeight, customersHeight, reviewsHeight, setContainerHeight]);

	return (
		<section className='section customers'>
			<div style={{ height: containerHeight }}>
				<div ref={titleHeight} className='container customers-title-container' style={{ top: '100%' }}>
					<div className='customers-title'>
						<Title size='l' color='blue'>
							What our <br />
							<span className='title_transparent'>customers</span> say
						</Title>
					</div>
				</div>
				<CustomersRow customersHeight={customersHeight} />
				<div ref={reviewsHeight} className='container customers-reviews-container' style={{ top: '100%' }}>
					<div className='reviews'>
						<div className='reviews-link'>
							<Link className='reviews-link__link link-primary text_blue' to=''>
								See more reviews
							</Link>
						</div>
						<ReviewsSwiper />
					</div>
				</div>
				<div className='overlay-white' style={{ height: '100%' }} />
			</div>
		</section>
	);
};

export default Customers;
