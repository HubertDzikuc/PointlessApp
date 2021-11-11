import { Pane, UserIcon } from 'evergreen-ui';
import React from 'react';

const BaseWrapper: React.FC<{}> = (props) => (
	<>
		<Pane
			width="6%"
			height="100%"
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="space-around"
			paddingTop="20px"
		>
			<Pane>
			</Pane>
			<Pane>
				<UserIcon size={30} margin="15px" cursor="pointer" color="yellow" />
				<UserIcon size={30} margin="15px" cursor="pointer" color="white" />
				<UserIcon size={30} margin="15px" cursor="pointer" color="white" />
				<UserIcon size={30} margin="15px" cursor="pointer" color="white" />
				<UserIcon size={30} margin="15px" cursor="pointer" color="white" />
			</Pane>
			<Pane>
			</Pane>
		</Pane>
		<Pane
			position="relative"
			width="93%"
			height="98%"
			background="white"
			borderRadius="20px"
			padding="20px"
		>
			{props.children}
		</Pane>
	</>
);

export default BaseWrapper;
