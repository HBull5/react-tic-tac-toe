import { useSettings } from '../contexts/SettingsContext';
import { useGame, useGameUpdate } from '../contexts/GameContext';

function Square({ index }) {
	const settings = useSettings();
	const game = useGame();
	const setGame = useGameUpdate();
	const player = game.positions[index];
	let classes = '';
	player && (classes += player) && (classes += ` ${settings[player === 'x' ? 'p1Icon' : 'p2Icon']}`);

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

	return <div className={classes} onClick={handleClick}></div>;
}

export default Square;
