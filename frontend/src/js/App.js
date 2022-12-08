import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<React.StrictMode>
			<div className="app">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</React.StrictMode>
	);
};

export default App;
