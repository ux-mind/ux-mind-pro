import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.svg';
import PUBLIC_ROUTES from '../../data/publicRoutes';
import SOCIAL_LINKS from '../../data/socialLinks';

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
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-wrapper">
					<div className="footer-top">
						<div className="footer-logo">
							<Link className="logo footer-logo__link" to="/">
								<img width="38" height="38" src={logo} alt="logo" />
							</Link>
						</div>
						<nav className="navigation footer-navigation">
							<ul className="footer-list">
								{menuLinks.map(({ name, route }) => (
									<li className="footer-list__item" key={name}>
										<Link className="link footer-list__link" to={route}>
											{name}
										</Link>
									</li>
								))}
							</ul>
							<ul className="footer-list">
								{socialLinks.map(({ name, route }) => (
									<li className="footer-list__item" key={name}>
										<Link className="link footer-list__link" to={route}>
											{name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<div className="footer-contacts">
							<div className="footer-contacts__link">
								<a className="link" href="mailto:info@uxmindpro.com">
									info@uxmindpro.com
								</a>
							</div>
							<div className="footer-contacts__link">
								<a className="link" href="tel:+00000000000">
									+00 000 000 000
								</a>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<p>2022 UX Mind. — Design Agency</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
