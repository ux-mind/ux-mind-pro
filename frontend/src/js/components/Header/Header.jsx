import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.svg';
import useFetch from '../../hooks/useFetch';

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);

	const htmlElement = document.documentElement;

	useEffect(() => {
		// Lock body scroll when menu is opened
		if (menuOpened && htmlElement) {
			window.scrollTo(0, 0);
			htmlElement.classList.add('is-locked');
		} else {
			htmlElement.classList.remove('is-locked');
		}
	}, [menuOpened]);

	const data = useFetch(
		'http://localhost:1337/api/header?&populate=%2A',
		{}
	);

	if (data.data) {
		const attributes = data.data.data.attributes;
		return (
			<>
				<header className={`header ${menuOpened ? 'header_active' : ''}`}>
					<div className="container">
						<div className="header-wrapper">
							<Link className="logo header-logo" to="/">
								<img width="38" height="38" src={'http://localhost:1337' + attributes.header_logo.data.attributes.url} alt="logo" />
							</Link>
							<button
								type="button"
								className={`menu-btn ${menuOpened ? 'menu-btn_opened' : ''}`}
								onClick={() => setMenuOpened((prev) => !prev)}
							>
								<div className="menu-btn-sticks">
									<span></span>
									<span></span>
								</div>
								<span className="menu-btn__text">{attributes.header_menu_label}</span>
							</button>
						</div>
					</div>
				</header>
				<Menu attributes={attributes} opened={menuOpened} />
			</>
		);
	}
};

export default Header;
