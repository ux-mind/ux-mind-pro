import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.svg';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/reducers/modalsReducer';

const Header = () => {
	const htmlElement = document.documentElement;

	const menuOpened = useSelector((state) => state.modals.menuOpened);
	const dispatch = useDispatch();

	useEffect(() => {
		// Lock body scroll when menu is opened
		if (menuOpened && htmlElement) {
			window.scrollTo(0, 0);
			htmlElement.classList.add('is-locked');
		} else {
			htmlElement.classList.remove('is-locked');
		}
	}, [menuOpened]);

	return (
		<>
			<header className={`header ${menuOpened ? 'header_active' : ''}`}>
				<div className="container">
					<div className="header-wrapper">
						<Link className="logo header-logo" to="/">
							<img width="38" height="38" src={logo} alt="logo" />
						</Link>
						<button
							type="button"
							className={`menu-btn ${menuOpened ? 'menu-btn_opened' : ''}`}
							onClick={() => dispatch(toggleMenu())}
						>
							<div className="menu-btn-sticks">
								<span></span>
								<span></span>
							</div>
							<span className="menu-btn__text">Menu</span>
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
