import * as React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import PointsPanel from '../../Components/PointsPanel';
// import { useAppDispatch, useAppSelector } from '../../Hooks';

const HomeScreen: React.FunctionComponent<{}> = () => {
	// TODO: Connect to redux store
	// const dispatch = useAppDispatch();
	// const points = useAppSelector((state) => state.points);

	return (
		<Pane>
			<Heading>Home Screen</Heading>
			<PointsPanel points={{value: 0}}/>
		</Pane>
	);
}

export default HomeScreen;