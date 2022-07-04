import React, { useContext, useState } from 'react';

const GameContext = React.createContext();
const GameUpdateContext = React.createContext();

export function useGame() {
	return useContext(GameContext);
}

export function useGameUpdate() {
	return useContext(GameUpdateContext);
}

// think I need to implement useReducer
export default function PlayerProvider({ children }) {
	const [gameState, setGameState] = useState({
		player: 'x'
	});

	// dispatch action
	function changePlayer() {
		setGameState(prevGameState => (prevGameState.player === 'x' ? 'o' : 'x'));
	}

	// dispatch action
	function markPlace() {}

	// dispatch action
	function gameStatus() {}

	function updateGameState() {}

	return (
		<GameContext.Provider value={gameState}>
			<GameUpdateContext.Provider value={updateGameState}>{children}</GameUpdateContext.Provider>
		</GameContext.Provider>
	);
}
