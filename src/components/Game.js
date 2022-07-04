import GameContext from '../contexts/GameContext';
import Square from './Square';

function Game() {
	return (
		<GameContext>
			<div className="gameboard">
				{[...Array(9)].map((e, i) => (
					<Square key={i} index={i} />
				))}
			</div>
		</GameContext>
	);
}

export default Game;
