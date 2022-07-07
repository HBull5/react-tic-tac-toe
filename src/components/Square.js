import { useGame, useGameUpdate } from '../contexts/GameContext';

function Square({ index }) {
	const game = useGame();
	const setGame = useGameUpdate();

	function handleClick() {
		!game.positions[index] &&
			setGame(prevGame => ([
				...prevGame,
				{
					currentPlayer: game.currentPlayer === 'x' ? 'o' : 'x',
					positions: game.positions.map((position, i) =>
						index === i ? game.currentPlayer : position
					)
				}
			]));
	}

	return <div className={game.positions[index]} onClick={handleClick}></div>;
}

export default Square;
