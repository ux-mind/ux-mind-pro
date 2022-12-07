import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	}
]);

const App = () => {
	return (
		<React.StrictMode>
			<div className="app">
				<Header />
				<RouterProvider router={router} />
				<Footer />
			</div>
		</React.StrictMode>
	);
};

export default App;
