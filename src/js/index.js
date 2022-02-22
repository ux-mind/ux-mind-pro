import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';
import '../index.html';

const App = () => {
	return (
		<div className="container">
			<div className="jsx">JSX!!!</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'))