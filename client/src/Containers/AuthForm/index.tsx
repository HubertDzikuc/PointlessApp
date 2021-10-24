import { Pane, Button, Spinner, Heading, TextInputField, Tooltip, LockIcon } from 'evergreen-ui';
import React, { ChangeEvent } from 'react';

interface IAuthFormProps {
	onClick?: (event: any) => void;
	onLogin?: () => void
}

const AuthForm: React.FC<IAuthFormProps> = () => {
	const [email, setEmail] = React.useState<string>('');
	const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
	return (
		<Pane
			display='flex'
			background='white'
			flexDirection='column'
			elevation={3}
			width={480}
			marginX='auto'
			marginY={100}
			padding={30}
			borderRadius={10}
		>
			<Heading marginBottom={20} size={800}>
				Auth Screen
			</Heading>
			<form>
				<TextInputField
					required
					type='email'
					name='email'
					label='Email'
					value={email}
					onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
				/>
				<TextInputField
					required
					type='email'
					name='email'
					label='Password'
					value={email}
					onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
				/>
				<Pane display='flex' justifyContent='flex-end'>
					<Tooltip content='Comming soon...'>
						<Button marginLeft={16} type='button' intent='none' appearance='default'>
							Create new account
						</Button>
					</Tooltip>
					{isAuthenticated ?
						<Button marginLeft={16} intent='success' appearance='primary' disabled width={80}>
							<Spinner size={12} />
						</Button> :
						<Button marginLeft={16} intent='success' appearance='primary' width={80} onClick={() => setIsAuthenticated(true)}>
							Zaloguj
						</Button>
					}
				</Pane>
			</form>
		</Pane>
	)
}

export default AuthForm;