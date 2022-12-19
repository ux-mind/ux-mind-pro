import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
		text: 'I have been hiring people in this space for a number of years and&nbsp;I&nbsp;have never seen this level of&nbsp;professionalism. It really feels like&nbsp;you are working with a team that can get the job done.',
		avatar: {
			x1: stiven,
			x2: stiven2x
		}
	}
];

const ReviewsSwiper = () => {
	const prevBtn = useRef(null);
	const nextBtn = useRef(null);

	return (
		<div className="reviews-swiper">
			<Swiper
				modules={[Navigation, EffectFade]}
				effect={'fade'}
				navigation={{ prevEl: prevBtn.current, nextEl: nextBtn.current }}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = prevBtn.current;
					swiper.params.navigation.nextEl = nextBtn.current;
				}}
			>
				{reviews.map((review) => (
					<SwiperSlide key={review.id}>
						<div className="reviews-item">
							<div className="reviews-item__text text_size-l text_blue">
								<p dangerouslySetInnerHTML={{ __html: review.text }}></p>
							</div>
							<div className="reviews-item-profile">
								<div className="reviews-item-profile__img">
									<img
										src={review.avatar.x1}
										srcSet={`${review.avatar.x1} 1x, ${
											review.avatar.x2 ? review.avatar.x2 : review.avatar.x1
										} 2x`}
										alt=""
									/>
								</div>
								<div className="reviews-item-profile__info">
									<h4 className="title text_blue">{review.name}</h4>
									<p className="text_blue">{review.position}</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="reviews-swiper__pagination">
				<button ref={prevBtn}>
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M34 33H2M2 33V1M2 33L34 1" stroke="#0D08FF" strokeWidth="2.5" />
					</svg>
				</button>
				<button ref={nextBtn}>
					<svg
						width="35"
						height="35"
						viewBox="0 0 35 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 2H33M33 2V34M33 2L1 34" stroke="#0D08FF" strokeWidth="2.5" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default ReviewsSwiper;
