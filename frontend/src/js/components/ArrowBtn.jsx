import React from 'react';
import { Link } from 'react-router-dom';

const ArrowBtn = ({ onClick, type, to, children }) => {
	if (type === 'link') {
		return (
			<Link className="link-arrow" to={to}>
				{children}
			</Link>
		);
	}

	return (
		<button type="button" className="link-arrow" onClick={onClick}>
			{children}
		</button>
	);
};

export default ArrowBtn;
