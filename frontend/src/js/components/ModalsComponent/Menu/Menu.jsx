import React, { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../../../data/publicRoutes';
import CONTACT from '../../../data/contact';
import AnimatedTextLine from '../../AnimatedTextLine/AnimatedTextLine';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useMediaQuery } from 'react-responsive';

import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../../assets/images/icons/logo.svg';
import { toggleMenu } from '../../../redux/reducers/modalsReducer';

const menuLinks = [
	{ name: 'About', route: PUBLIC_ROUTES.about },
	{ name: 'Cases', route: PUBLIC_ROUTES.cases },
	{ name: 'Services', route: PUBLIC_ROUTES.services },
	{ name: 'Process', route: PUBLIC_ROUTES.process },
	{ name: 'Contact', route: PUBLIC_ROUTES.contact }
];

const Menu = () => {
	const menuOpened = useSelector((state) => state.modals.menuOpened);

	const dispatch = useDispatch();

	const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

	const opened = useSelector((state) => state.modals.menuOpened);

	const menuVariants = useMemo(() => ({
		hidden: {
			translateX: '100%'
		},
		show: {
			translateX: '0%'
		}
	}), []);

	const innerVariants = useMemo(() => ({
		hidden: {
			opacity: 0,
			translateX: isMobile ? '-25%' : '-70%'
		},
		show: {
			opacity: 1,
			translateX: '0%'
		}
	}), []);

	return (
		<AnimatePresence>
			{!!opened && <motion.div
				className={opened ? 'menu menu_opened' : 'menu'}
				variants={menuVariants}
				initial='hidden'
				animate='show'
				exit='hidden'
				transition={{
					type: 'tween',
					duration: isMobile ? 0.35 : 0.6
				}}
			>
				<motion.header
					className={`header ${menuOpened ? 'header_active' : ''}`}
				>
					<div className='container'>
						<div className='header-wrapper'>
							<Link className='logo header-logo' to='/'>
								<img width='38' height='38' src={logo} alt='logo' />
							</Link>
							<button
								type='button'
								className={`menu-btn ${menuOpened ? 'menu-btn_opened' : ''}`}
								onClick={() => dispatch(toggleMenu())}
							>
								<div className='menu-btn-sticks'>
									<span></span>
									<span></span>
								</div>
								<span className='menu-btn__text'>Menu</span>
							</button>
						</div>
					</div>
				</motion.header>
				<Scrollbars>
					<div className='menu-wrapper'>
						<div className='container'>
							<div className='menu-content'>
								<motion.nav
									className='nav menu-nav'
									variants={innerVariants}
									initial='hidden'
									animate='show'
									exit='hidden'
									transition={{
										type: 'tween',
										duration: isMobile ? 0.35 : 0.6
									}}
								>
									<ul className='menu-list'>
										{menuLinks.map((link) => {
											return (
												<li className='menu-list__item' key={link.name}>
													<Link
														to={link.route}
														className='title title_size-s link'
													>
														{link.name}
													</Link>
												</li>
											);
										})}
									</ul>
								</motion.nav>
								<motion.div
									className='menu-contacts'
									variants={innerVariants}
									initial='hidden'
									animate='show'
									exit='hidden'
									transition={{
										type: 'tween',
										duration: isMobile ? 0.35 : 0.6
									}}
								>
									<div className='menu-contacts__link-wrapper'>
										<a
											href={`mailto:${CONTACT.email}`}
											className='title title_size-xs link'
										>
											{CONTACT.email}
										</a>
									</div>
									<div className='menu-contacts__link-wrapper'>
										<a
											href={`tel:${CONTACT.tel}`}
											className='title title_size-xs link'
										>
											{CONTACT.tel}
										</a>
									</div>
								</motion.div>
							</div>
						</div>
						<motion.div
							className='menu-textline'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{
								type: 'tween',
								duration: 0.6
							}}
						>
							<AnimatedTextLine />
						</motion.div>
					</div>
				</Scrollbars>
			</motion.div>}
		</AnimatePresence>
	);
};

export default Menu;
