import React, { useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import { useDispatch } from 'react-redux';
import { updateScrollValues } from '../redux/reducers/scrollReducer';
import { useMediaQuery } from 'react-responsive';

const ScrollbarComponent = ({ children }) => {
	const isMobile = useMediaQuery({
		query: `(max-width: 991px)`
	});

	const scrollbarRef = useRef(null);

	const dispatch = useDispatch();

	return (
		<Scrollbar
			className="scrollbar"
			ref={scrollbarRef}
			onScroll={(data) => dispatch(updateScrollValues(data))}
			damping={isMobile ? 0.1 : 0.082}
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
