import React, { useRef, useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import ModalsComponent from './components/ModalsComponent/ModalsComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import ScrollProvider from './context/ScrollContext';
import { Scrollbar } from 'smooth-scrollbar-react';

import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
	const scrollbarRef = useRef(null);

	const [context, setContext] = useState({
		offset: { x: 0, y: 0 },
		limit: { x: 0, y: 0 }
	});

	return (
		<React.StrictMode>
			<Head />
			<div className="app">
				<BrowserRouter>
					<Provider store={store}>
						<ModalsComponent />
						<Scrollbar
							className="scrollbar"
							ref={scrollbarRef}
							onScroll={(data) => setContext(data)}
							plugins={{
								overscroll: {
									effect: 'bounce'
								}
							}}
						>
							<div className="scrollbar-wrapper" style={{ maxHeight: '100vh' }}>
								<div style={{ position: 'relative' }}>
									<ScrollProvider value={context}>
										<Header />
										<Routes>
											<Route path="/" element={<Home />} />
										</Routes>
										<Footer />
									</ScrollProvider>
								</div>
							</div>
						</Scrollbar>
					</Provider>
				</BrowserRouter>
			</div>
		</React.StrictMode>
	);
};

export default App;
