import React from 'react';
import { Pane } from 'evergreen-ui';
import AuthForm from '../AuthForm';
import { Provider } from 'react-redux';
import { store } from '../../Store';

function App() {
	return (
		<Provider store={store}>
			<Pane>
				<AuthForm onLogin={ () => null }/>
			</Pane>
		</Provider>
	);
}

export default App;
