import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import ModalsComponent from './components/ModalsComponent/ModalsComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import Scrollbar from './components/Scrollbar';

import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
	return (
		<React.StrictMode>
			<Head />
			<div className="app">
				<BrowserRouter>
					<Provider store={store}>
						<Header />
						<Scrollbar>
							<div style={{ position: 'relative' }}>
								<Routes>
									<Route path="/" element={<Home />} />
								</Routes>
								<Footer />
							</div>
						</Scrollbar>
						<ModalsComponent />
					</Provider>
				</BrowserRouter>
			</div>
		</React.StrictMode>
	);
};

export default App;
