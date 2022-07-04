import React, { useContext, useEffect, useState } from 'react';

const GameContext = React.createContext();
const GameUpdateContext = React.createContext();

export function useGame() {
	return useContext(GameContext);
}

export function useGameUpdate() {
	return useContext(GameUpdateContext);
}

export default function GameProvider({ children }) {
	const [gameState, setGameState] = useState({
		currentPlayer: 'x',
		positions: [...Array(9)]
	});

	useEffect(() => {
		// store history of state

		// check if game is won or drawn
		let winner;
		const winConditions = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
			[1, 5, 9],
			[3, 5, 7]
		];

		const crosses = gameState.positions
			.map((position, i) => position === 'x' && i + 1)
			.filter(position => position);

		const circles = gameState.positions
			.map((position, i) => position === 'o' && i + 1)
			.filter(position => position);

		for (const condition of winConditions) {
			if (condition.every(position => crosses.includes(position))) {
				winner = 'x';
			} else if (condition.every(position => circles.includes(position))) {
				winner = 'o';
			}
		}

		if (winner) {
			// win condition
			alert(`player ${winner} won!`);
		} else if (!gameState.positions.filter(position => !position).length) {
			// draw condition
			alert('game was a draw');
		}
	}, [gameState]);

	return (
		<GameContext.Provider value={gameState}>
			<GameUpdateContext.Provider value={setGameState}>{children}</GameUpdateContext.Provider>
		</GameContext.Provider>
	);
}
