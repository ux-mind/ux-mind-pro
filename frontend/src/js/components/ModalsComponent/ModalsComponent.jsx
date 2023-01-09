import React from 'react';
import ContactModal from './ContactModal/ContactModal';
import Menu from './Menu/Menu';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/reducers/modalsReducer';

const ModalsComponent = () => {
	const menuOpened = useSelector((state) => state.modals.menuOpened);
	const dispatch = useDispatch();

	return (
		<>
			<ContactModal />
			<Menu />
			{/* <button
				type="button"
				className={`menu-btn ${menuOpened ? 'menu-btn_opened' : ''}`}
				onClick={() => dispatch(toggleMenu())}
			>
				<div className="menu-btn-sticks">
					<span></span>
					<span></span>
				</div>
				<span className="menu-btn__text">Menu</span>
			</button> */}
		</>
	);
};

export default ModalsComponent;
