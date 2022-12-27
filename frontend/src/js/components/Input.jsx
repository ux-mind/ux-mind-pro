import React from 'react';

const Input = ({ className, type, name, value, onChange, placeholder, long }) => {
	return (
		<div className={`input-wrapper ${long && 'input-wrapper_long'}`}>
			<input
				placeholder={placeholder}
				className={`input ${className && className}`}
				type={type ? type : 'text'}
				name={name ? name : ''}
				onChange={onChange}
				value={value ? value : ''}
			/>
		</div>
	);
};

export default Input;
