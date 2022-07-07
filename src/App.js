import SettingsProvider from './contexts/SettingsContext';
import ScoreProvider from './contexts/ScoreContext';
import Settings from './components/Settings';
import Scoreboard from './components/Scoreboard';
import Game from './components/Game';

function App() {
	return (
		<>
		{/* <SettingsProvider> */}
			{/* <Settings /> */}
			<ScoreProvider>
				<Scoreboard />
				<Game />
			</ScoreProvider>
		{/* </SettingsProvider> */}
		</>
	);
}

export default App;
