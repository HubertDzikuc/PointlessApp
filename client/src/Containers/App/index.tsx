import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../Utils/Store';
import Router from '../Router';
import './App.scss';

function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

export default App;
