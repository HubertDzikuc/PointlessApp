import React from 'react';

const PointsPanel: React.FC<{points: {value: number}}> = (points) => {
	return (
		<>{points}</>
	)
}

export default PointsPanel;