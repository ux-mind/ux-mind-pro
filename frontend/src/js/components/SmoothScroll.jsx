import React, { useState, useEffect, useRef } from 'react';
import { gsap, Power4 } from 'gsap';
import { useDispatch } from 'react-redux';
import { updateScrollY } from '../redux/reducers/scrollReducer';

const SmoothScrollComponent = ({ children }) => {
	const viewportRef = useRef(null);

	const [height, setHeight] = useState(window.innerHeight);

	const dispatch = useDispatch();

	const ro = new ResizeObserver((elements) => {
		for (let elem of elements) {
			const crx = elem.contentRect;

			setHeight(crx.height);
		}
	});

	const onScroll = (el) => {
		const tween = gsap.to(el, 1, {
			y: -window.pageYOffset,
			ease: Power4.easeOut
		});

		dispatch(updateScrollY(-tween.vars.y));
	};

	useEffect(() => {
		if (viewportRef.current) {
			window.addEventListener('scroll', () => onScroll(viewportRef.current));
			ro.observe(viewportRef.current);
		}
	}, [viewportRef]);

	return (
		<>
			<div className="viewport" ref={viewportRef}>
				{children}
			</div>
			<div
				style={{
					height: height
				}}
			/>
		</>
	);
};

export default SmoothScrollComponent;
