import { useScore } from '../contexts/ScoreContext';

function Scoreboard() {
	const score = useScore();

	return (
		<div className="scoreboard">
			<div>X: <span>{ score.x }</span></div>
			<div>O: <span>{ score.o }</span></div>
		</div>
	);
}

export default Scoreboard;
