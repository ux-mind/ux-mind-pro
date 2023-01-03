import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';

import stiven from '../../../../../assets/images/stiven.png';
import stiven2x from '../../../../../assets/images/stiven@2x.png';

const reviews = [
	{
		id: 0,
		name: 'Stiven Smith',
		position: 'CEO Company',
		text: 'I have been hiring people in this space for a number of years and&nbsp;I&nbsp;have never seen this level of&nbsp;professionalism. It really feels like&nbsp;you are working with a team that can get the job done.',
		avatar: {
			x1: stiven,
			x2: stiven2x
		}
	},
	{
		id: 1,
		name: 'Stiven Smith',
		position: 'CEO Company',
		text: 'It really feels like&nbsp;you are working with a team that can get the job done.',
		avatar: {
			x1: stiven,
			x2: stiven2x
		}
	},
	{
		id: 3,
		name: 'Stiven Smith',
		position: 'CEO Company',
		text: 'I have been hiring people in this space for a number of years and&nbsp;I&nbsp;have never seen this level of&nbsp;professionalism. It really feels like&nbsp;you are working with a team that can get the job done.',
		avatar: {
			x1: stiven,
			x2: stiven2x
		}
	}
];

const ReviewsSwiper = ({ attributes }) => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const prevBtn = useRef(null);
	const nextBtn = useRef(null);

	return (
		<div className="reviews-swiper">
			<Swiper
				modules={[Navigation, EffectFade]}
				effect={'fade'}
				navigation={{
					prevEl: '.reviews-swiper__btn.btn_prev',
					nextEl: '.reviews-swiper__btn.btn_next'
				}}
			>
				{attributes.reviews_items.map((review) => (
					<SwiperSlide key={review.id}>
						<div className="reviews-item">
							<div className="reviews-item__text text_size-l text_blue">
								<p dangerouslySetInnerHTML={{ __html: review.reviews_text }}></p>
							</div>
							<div className="reviews-item-profile">
								<div className="reviews-item-profile__img">
									<img
										src={'http://localhost:1337' + review.reviews_author_photo.data.attributes.formats.thumbnail.url}
										srcSet={`http://localhost:1337${review.reviews_author_photo.data.attributes.formats.thumbnail.url} 1x, http://localhost:1337${review.reviews_author_photo.data.attributes.url} 2x`}
										alt=""
									/>
								</div>
								<div className="reviews-item-profile__info">
									<h4 className="title text_blue">{review.reviews_author_name}</h4>
									<p className="text_blue">{review.reviews_author_post}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="reviews-swiper__pagination">
				<motion.button
					className="reviews-swiper__btn btn_prev"
					whileHover={{
						width: isMobile ? 30 : 48,
						height: isMobile ? 30 : 48,
						transition: { duration: 0.2 }
					}}
					whileTap={{
						width: isMobile ? 30 : 48,
						height: isMobile ? 30 : 48,
						opacity: 0.3,
						transition: { duration: 0.1 }
					}}
					ref={prevBtn}
				>
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M34 33H2M2 33V1M2 33L34 1" stroke="#0D08FF" strokeWidth="2.5" />
					</svg>
				</motion.button>
				<motion.button
					className="reviews-swiper__btn btn_next"
					whileHover={{
						width: isMobile ? 30 : 48,
						height: isMobile ? 30 : 48,
						transition: { duration: 0.2 }
					}}
					whileTap={{
						width: isMobile ? 30 : 48,
						height: isMobile ? 30 : 48,
						opacity: 0.3,
						transition: { duration: 0.1 }
					}}
					ref={nextBtn}
				>
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 2H33M33 2V34M33 2L1 34" stroke="#0D08FF" strokeWidth="2.5" />
					</svg>
				</motion.button>
			</div>
		</div>
	);
};

export default ReviewsSwiper;
