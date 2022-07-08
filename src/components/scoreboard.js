import { useSettings } from '../contexts/SettingsContext';
import { useScore } from '../contexts/ScoreContext';

function Scoreboard() {
	const score = useScore();
	const settings = useSettings();

	return (
		<div className="scoreboard">
			<div>{settings.p1Name}: <span>{ score.x }</span></div>
			<div>{settings.p2Name}: <span>{ score.o }</span></div>
		</div>
	);
}

export default Scoreboard;
