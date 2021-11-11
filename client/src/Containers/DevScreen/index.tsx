import React from 'react';
import { Pane } from 'evergreen-ui';
import ExampleButton from '../../Components/ExampleButton';

const DevScreenContainer: React.FC<{}> = ({ children }) => (
	<Pane
		display="flex"
		flexDirection="row"
		flexWrap="wrap"
		justifyContent="space-evenly"
	>
		{children}
	</Pane>
);

const ComponentContainer: React.FC<{}> = ({ children }) => (
	<Pane display="flex" justifyContent="center" alignItems="center">{children}</Pane>
);

const DevScreen: React.FC<{}> = () => {
	return (
		<DevScreenContainer>
			<ComponentContainer>
				<ExampleButton action={(oldValue) => oldValue ** 2}/>
			</ComponentContainer>
		</DevScreenContainer>
	)
}

export default DevScreen;