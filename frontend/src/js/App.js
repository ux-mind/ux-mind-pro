import React, { useRef, useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import ScrollProvider from './context/ScrollContext';
import { Scrollbar } from 'smooth-scrollbar-react';

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
							<BrowserRouter>
								<ScrollProvider value={context}>
									<Header />
									<Routes>
										<Route path="/" element={<Home />} />
									</Routes>
									<Footer />
								</ScrollProvider>
							</BrowserRouter>
						</div>
					</div>
				</Scrollbar>
			</div>
		</React.StrictMode>
	);
};

export default App;
