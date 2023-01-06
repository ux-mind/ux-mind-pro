import React, { createContext } from 'react';

export const ScrollContext = createContext(null);

const ScrollProvider = ({ value, children }) => {
	return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};

export default ScrollProvider;
