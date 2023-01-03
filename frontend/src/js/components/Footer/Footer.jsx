import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.svg';
import PUBLIC_ROUTES from '../../data/publicRoutes';
import SOCIAL_LINKS from '../../data/socialLinks';
import useFetch from '../../hooks/useFetch';

const menuLinks = [
	{ name: 'About', route: PUBLIC_ROUTES.about },
	{ name: 'Cases', route: PUBLIC_ROUTES.cases },
	{ name: 'Services', route: PUBLIC_ROUTES.services },
	{ name: 'Process', route: PUBLIC_ROUTES.process },
	{ name: 'Contact', route: PUBLIC_ROUTES.contact }
];

const socialLinks = [
	{ name: 'Linkedin', route: SOCIAL_LINKS.linkedin },
	{ name: 'Dribble', route: SOCIAL_LINKS.dribble },
	{ name: 'Behance', route: SOCIAL_LINKS.behance },
	{ name: 'Instagram', route: SOCIAL_LINKS.instagram }
];

const Footer = () => {
	const data = useFetch(
		'http://localhost:1337/api/footer?&populate=%2A',
		{}
	);

	if (data.data) {
		const attributes = data.data.data.attributes;
		return (
			<footer className="footer">
				<div className="container">
					<div className="footer-wrapper">
						<div className="footer-top">
							<div className="footer-logo">
								<Link className="logo footer-logo__link" to="/">
									<img width="38" height="38" src={'http://localhost:1337' + attributes.footer_logo.data.attributes.url} alt="logo" />
								</Link>
							</div>
							<nav className="navigation footer-navigation">
								<ul className="footer-list">
									{attributes.footer_menu.map(({ text, link }) => (
										<li className="footer-list__item" key={text}>
											<Link className="link footer-list__link" to={link}>
												{text}
											</Link>
										</li>
									))}
								</ul>
								<ul className="footer-list">
									{attributes.footer_menu_social.map(({ text, link }) => (
										<li className="footer-list__item" key={text}>
											<Link className="link footer-list__link" to={link}>
												{text}
											</Link>
										</li>
									))}
								</ul>
							</nav>
							<div className="footer-contacts">
								<div className="footer-contacts__link">
									<a className="link" href={`mailto:${attributes.footer_mail}`}>
										{attributes.footer_mail}
									</a>
								</div>
								<div className="footer-contacts__link">
									<a className="link" href={`tel:${attributes.footer_phone}`}>
										{attributes.footer_phone}
									</a>
								</div>
							</div>
						</div>
						<div className="footer-bottom">
							<p>{attributes.footer_credits}</p>
						</div>
					</div>
				</div>
			</footer>
		);
	} else {
		return '';
	}
};

export default Footer;
