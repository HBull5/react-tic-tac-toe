import { useState } from 'react';
import { usePlayer, usePlayerUpdate } from '../contexts/GameboardContext';

function Square() {
	const [state, setState] = useState('');
	const currentPlayer = usePlayer();
	const updatePlayer = usePlayerUpdate();

	function handleClick() {
		setState(currentPlayer);
		updatePlayer();
	}

	return <div onClick={handleClick}>{state}</div>;
}

export default Square;
