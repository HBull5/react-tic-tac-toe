import ScoreContext from './contexts/ScoreContext';
import Scoreboard from './components/Scoreboard';
import Game from './components/Game';

function App() {
	return (
		<ScoreContext>
			<Scoreboard />
			<Game />
		</ScoreContext>
	);
}

export default App;
