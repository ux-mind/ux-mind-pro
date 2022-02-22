import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import '../styles/main.scss';
import '../index.html';

const App = () => {
	return (
		<div className="app">
			<Header />
			<Footer />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'))