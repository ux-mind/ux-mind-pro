import React from 'react';
import ContactModal from './ContactModal/ContactModal';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/icons/logo.svg';
import { toggleMenu } from '../../redux/reducers/modalsReducer';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

const ModalsComponent = () => {
	const menuOpened = useSelector((state) => state.modals.menuOpened);
	const dispatch = useDispatch();

	return (
		<>
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
			<ContactModal />
			<Menu />
		</>
	);
};

export default ModalsComponent;
