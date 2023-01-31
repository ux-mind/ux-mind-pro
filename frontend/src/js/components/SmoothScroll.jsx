import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { useDispatch } from 'react-redux';
import { updateScrollY } from '../redux/reducers/scrollReducer';

const SmoothScrollComponent = ({ children }) => {
	const viewportRef = useRef(null);

	// const [height, setHeight] = useState(window.innerHeight);

	// const dispatch = useDispatch();

	const q = gsap.utils.selector(viewportRef);
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	useLayoutEffect(() => {
		const smoother = ScrollSmoother.create({
			smooth: 1,
			effects: true
		});

		return () => {
			smoother.kill();
		};
	}, []);

	return (
		<>
			<div className="viewport" ref={viewportRef}>
				<div id="smooth-content">{children}</div>
			</div>
		</>
	);
};

export default SmoothScrollComponent;
