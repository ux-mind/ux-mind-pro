import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../../data/publicRoutes';
import CONTACT from '../../data/contact';
import AnimatedTextLine from '../AnimatedTextLine/AnimatedTextLine';
import { Scrollbars } from 'react-custom-scrollbars-2';

const menuLinks = [
	{ name: 'About', route: PUBLIC_ROUTES.about },
	{ name: 'Cases', route: PUBLIC_ROUTES.cases },
	{ name: 'Services', route: PUBLIC_ROUTES.services },
	{ name: 'Process', route: PUBLIC_ROUTES.process },
	{ name: 'Contact', route: PUBLIC_ROUTES.contact }
];

const Menu = ({ opened, attributes }) => {
	return (
		<motion.div className={opened ? 'menu menu_opened' : 'menu'}>
			<Scrollbars>
				<div className="menu-wrapper">
					<div className="container">
						<div className="menu-content">
							<nav className="nav menu-nav">
								<ul className="menu-list">
									{attributes.header_menu.map((link) => {
										return (
											<li className="menu-list__item" key={link.text}>
												<Link
													to={link.link}
													className="title title_size-s link"
												>
													{link.text}
												</Link>
											</li>
										);
									})}
								</ul>
							</nav>
							<div className="menu-contacts">
								<div className="menu-contacts__link-wrapper">
									<a
										href={`mailto:${attributes.header_mail}`}
										className="title title_size-xs link"
									>
										{attributes.header_mail}
									</a>
								</div>
								<div className="menu-contacts__link-wrapper">
									<a
										href={`tel:${attributes.header_phone}`}
										className="title title_size-xs link"
									>
										{attributes.header_phone}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="menu-textline">
						<AnimatedTextLine attributes={attributes} />
					</div>
				</div>
			</Scrollbars>
		</motion.div>
	);
};

export default Menu;
