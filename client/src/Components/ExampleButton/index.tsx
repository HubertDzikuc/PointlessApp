import React, { useState } from 'react';
import { Button } from 'evergreen-ui';

interface IExampleButtonProps {
	action?: (x: number) => number;
	name?: string;
	initialValue?: number;
}

const ExampleButton: React.FC<IExampleButtonProps> = ({action = x => x+1, initialValue = 0, name = "Value"}) => {
	const [value, setValue] = useState(initialValue);
	return (
		<Button onClick={()=> setValue(action(value))}>
			{name}: {value}
		</Button>
	);
}



export default ExampleButton;
