import React from 'react';
import { useHistory } from 'react-router-dom';
function CheckFile() {
	const history = useHistory();
	return (
		<div>
			{/* <button onClick={() => history.push('/itsWorking')}>Check Now</button> */}
			hello there
		</div>
	);
}

export default CheckFile;
