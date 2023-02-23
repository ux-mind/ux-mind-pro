import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import ModalsComponent from './components/ModalsComponent/ModalsComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import SmoothScroll from './components/SmoothScroll';

import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
	return (
		<React.StrictMode>
			<Head />
			<BrowserRouter>
				<Provider store={store}>
					<div className='app'>
						<SmoothScroll>
							<Header />
							<Routes>
								<Route path='/' element={<Home />} />
							</Routes>
							<Footer />
						</SmoothScroll>
						<ModalsComponent />
					</div>
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default App;
