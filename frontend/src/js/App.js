import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import { ScrollerMotion } from 'scroller-motion';

const App = () => {
	return (
		<React.StrictMode>
			<Head />
			<div className="app" style={{ scrollBehavior: 'unset' }}>
				{/* <ScrollerMotion disabled={false} spring={{ damping: 0.1 }}> */}
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
					<Footer />
				</BrowserRouter>
				{/* </ScrollerMotion> */}
			</div>
		</React.StrictMode>
	);
};

export default App;
