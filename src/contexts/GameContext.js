import React, { useContext, useEffect, useState } from 'react';
import { useUpdateScore } from './ScoreContext';

const GameContext = React.createContext();
const GameUpdateContext = React.createContext();

export function useGame() {
	return useContext(GameContext);
}

export function useGameUpdate() {
	return useContext(GameUpdateContext);
}

export default function GameProvider({ children }) {
	const setScore = useUpdateScore();
	const [game, setGame] = useState([{
		currentPlayer: 'x',
		positions: [...Array(9)]
	}]);

	useEffect(() => {
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

		const currentGame = game[game.length - 1];
		const crosses = currentGame.positions
			.map((position, i) => position === 'x' && i + 1)
			.filter(position => position);

		const circles = currentGame.positions
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
			setScore(prevScore => ({
				...prevScore, 
				[winner]: prevScore[winner] + 1
			})); 
			setGame([{
				currentPlayer: 'x',
				positions: [...Array(9)]
			}]);
		} else if (!currentGame.positions.filter(position => !position).length) {
			setGame([{
				currentPlayer: 'x',
				positions: [...Array(9)]
			}]);
		}
	}, [game]);

	return (
		<GameContext.Provider value={game[game.length - 1]}>
			<GameUpdateContext.Provider value={setGame}>{children}</GameUpdateContext.Provider>
		</GameContext.Provider>
	);
}
