import React, { useEffect } from 'react';
import Title from '../../../components/Title';
import ArrowBtn from '../../../components/ArrowBtn';

import { useDispatch, useSelector } from 'react-redux';
import { toggleContactModal } from '../../../redux/reducers/modalsReducer';

const Share = () => {
	const htmlElement = document.documentElement;

	const contactModalOpened = useSelector((state) => state.modals.contactModalOpened);
	const dispatch = useDispatch();

	useEffect(() => {
		// Lock body scroll when menu is opened
		if (contactModalOpened && htmlElement) {
			htmlElement.classList.add('is-locked');
		} else {
			htmlElement.classList.remove('is-locked');
		}
	}, [contactModalOpened]);

	return (
		<>
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
							<ArrowBtn onClick={() => dispatch(toggleContactModal())}>
								Let’s talk
							</ArrowBtn>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Share;
