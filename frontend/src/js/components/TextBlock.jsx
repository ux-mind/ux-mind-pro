import React from 'react';

const TextBlock = ({ children, color = 'white', className, size }) => {
	return (
		<div
			className={`${className ? className : ''} text-block ${
				color === 'blue' ? `text_blue` : ''
			} ${size && `text_size-${size}`}`}
		>
			{children}
		</div>
	);
};

export default TextBlock;
