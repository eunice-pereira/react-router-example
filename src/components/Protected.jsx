import React from 'react';
import { useHistory } from 'react-router-dom';

const Protected = (props) => {
	const history = useHistory();

	if (!props.isLoggedIn) {
		history.push('/');
		return null;
	} else {
		return <div>{props.children}</div>;
	}
};

// alternatively, can use Redirect Component.
// Probably better choice, shorter and clearer but still important to be familiar with `history` Object and `useHistory()` hook.
// useHistory() hook is more versatile, as it does not need to be rendered to do its job.

export default Protected;
