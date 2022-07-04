import { useGame, useGameUpdate } from '../contexts/GameContext';

function Square({ index }) {
	const gameState = useGame();
	const setGameState = useGameUpdate();

	function handleClick() {
		!gameState.positions[index] &&
			setGameState(prevGameState => ({
				...prevGameState,
				currentPlayer: prevGameState.currentPlayer === 'x' ? 'o' : 'x',
				positions: prevGameState.positions.map((position, i) =>
					index === i ? prevGameState.currentPlayer : position
				)
			}));
	}

	return <div className={gameState.positions[index]} onClick={handleClick}></div>;
}

export default Square;
