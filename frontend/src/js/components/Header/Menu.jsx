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

const Menu = ({ opened }) => {
	return (
		<AnimatePresence>
			{opened ? (
				<motion.div
					className="menu"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Scrollbars>
						<div className="menu-wrapper">
							<div className="container">
								<div className="menu-content">
									<nav className="nav menu-nav">
										<ul className="menu-list">
											{menuLinks.map((link) => {
												return (
													<li className="menu-list__item" key={link.name}>
														<Link
															to={link.route}
															className="title title_size-s link"
														>
															{link.name}
														</Link>
													</li>
												);
											})}
										</ul>
									</nav>
									<div className="menu-contacts">
										<div className="menu-contacts__link-wrapper">
											<a
												href={`mailto:${CONTACT.email}`}
												className="title title_size-xs link"
											>
												{CONTACT.email}
											</a>
										</div>
										<div className="menu-contacts__link-wrapper">
											<a
												href={`tel:${CONTACT.tel}`}
												className="title title_size-xs link"
											>
												{CONTACT.tel}
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="menu-textline">
								<AnimatedTextLine />
							</div>
						</div>
					</Scrollbars>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default Menu;
