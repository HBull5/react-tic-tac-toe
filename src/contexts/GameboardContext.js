import React, { useContext, useState } from 'react';

const PlayerContext = React.createContext();
const PlayerUpdateContext = React.createContext();

export function usePlayer() {
	return useContext(PlayerContext);
}

export function usePlayerUpdate() {
	return useContext(PlayerUpdateContext);
}

export default function PlayerProvider({ children }) {
	const [player, setPlayer] = useState('x');

	function changePlayer() {
		setPlayer(prevPlayer => (prevPlayer === 'x' ? 'o' : 'x'));
	}

	return (
		<PlayerContext.Provider value={player}>
			<PlayerUpdateContext.Provider value={changePlayer}>{children}</PlayerUpdateContext.Provider>
		</PlayerContext.Provider>
	);
}
