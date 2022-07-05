import React, { useContext, useEffect, useState } from 'react';
import { useUpdateHistory } from './HistoryContext';

const GameContext = React.createContext();
const GameUpdateContext = React.createContext();

export function useGame() {
	return useContext(GameContext);
}

export function useGameUpdate() {
	return useContext(GameUpdateContext);
}

export default function GameProvider({ children }) {
	const setHistory = useUpdateHistory(); 
	const [game, setGame] = useState({
		currentPlayer: 'x',
		positions: [...Array(9)]
	});


	useEffect(() => {
		// store history of state
		setHistory(prevHistory => ([...prevHistory, game]));

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

		const crosses = game.positions
			.map((position, i) => position === 'x' && i + 1)
			.filter(position => position);

		const circles = game.positions
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
		} else if (!game.positions.filter(position => !position).length) {
			// draw condition
			alert('game was a draw');
		}
	}, [game]);

	return (
		<GameContext.Provider value={game}>
			<GameUpdateContext.Provider value={setGame}>{children}</GameUpdateContext.Provider>
		</GameContext.Provider>
	);
}
