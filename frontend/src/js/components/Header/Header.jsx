import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header-wrapper">
					<Link className="logo header-logo" to="/">
						<img width="38" height="38" src={logo} alt="logo" />
					</Link>
					<button type="button" className="menu-btn">
						<div className="menu-btn-sticks">
							<span></span>
							<span></span>
						</div>
						<span className="menu-btn__text">Menu</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
