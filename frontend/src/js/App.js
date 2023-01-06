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
				<BrowserRouter>
					<Scrollbar
						id="scrollbar"
						ref={scrollbarRef}
						onScroll={(data) => setContext(data)}
					>
						<div id="scrollbar-wrapper" style={{ height: '100vh' }}>
							<ScrollProvider value={context}>
								<Header />
								<Routes>
									<Route path="/" element={<Home />} />
								</Routes>
								<Footer />
							</ScrollProvider>
						</div>
					</Scrollbar>
				</BrowserRouter>
			</div>
		</React.StrictMode>
	);
};

export default App;
