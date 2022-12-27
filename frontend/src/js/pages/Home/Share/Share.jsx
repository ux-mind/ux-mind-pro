import React, { useState, useEffect } from 'react';
import Title from '../../../components/Title';
import ArrowBtn from '../../../components/ArrowBtn';
import ContactModal from '../ContactModal/ContactModal';

const Share = () => {
	const [contactModalOpened, setContactModalOpened] = useState(false);

	const htmlElement = document.documentElement;

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
							<ArrowBtn onClick={() => setContactModalOpened(true)}>
								Let’s talk
							</ArrowBtn>
						</div>
					</div>
				</div>
			</section>
			<ContactModal opened={contactModalOpened} setOpened={setContactModalOpened} />
		</>
	);
};

export default Share;
