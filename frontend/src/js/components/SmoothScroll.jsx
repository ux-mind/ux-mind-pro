import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { useDispatch } from 'react-redux';
import { updateScrollY } from '../redux/reducers/scrollReducer';

const SmoothScrollComponent = ({ children }) => {
	const viewportRef = useRef(null);

	const [height, setHeight] = useState(window.innerHeight);

	const dispatch = useDispatch();

	const q = gsap.utils.selector(viewportRef);
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	useLayoutEffect(() => {
		const smoother = ScrollSmoother.create({
			smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
			effects: true, // looks for data-speed and data-lag attributes on elements
			onUpdate: (self) => console.log('progress', self)
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
