import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.svg';

const ModalHeader = ({ setOpened }) => {
	return (
		<header className="header header_active">
			<div className="container">
				<div className="header-wrapper">
					<Link className="logo header-logo" to="/">
						<img width="38" height="38" src={logo} alt="logo" />
					</Link>
					<button
						type="button"
						className="menu-btn menu-btn_opened"
						onClick={() => setOpened(false)}
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
	);
};

export default ModalHeader;
