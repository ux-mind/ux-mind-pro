import React, { useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import { useDispatch } from 'react-redux';
import { updateScrollValues } from '../redux/reducers/scrollReducer';

const ScrollbarComponent = ({ children }) => {
	const scrollbarRef = useRef(null);

	const dispatch = useDispatch();

	return (
		<Scrollbar
			className="scrollbar"
			ref={scrollbarRef}
			onScroll={(data) => dispatch(updateScrollValues(data))}
			plugins={{
				overscroll: {
					effect: 'bounce'
				}
			}}
		>
			<div className="scrollbar-wrapper" style={{ maxHeight: '100vh' }}>
				{children}
			</div>
		</Scrollbar>
	);
};

export default ScrollbarComponent;
