import { useScore } from '../contexts/ScoreContext';

function Scoreboard() {
	const score = useScore();

	return (
		<div className="scoreboard">
			<div>Player-1: { score.x }</div>
			<div>Player-2: { score.o }</div>
		</div>
	);
}

export default Scoreboard;
