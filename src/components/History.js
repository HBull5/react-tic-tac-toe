import { useGameUpdate } from '../contexts/GameContext';

function History() {
    const setGame = useGameUpdate(); 

    function handleClick() {
        setGame(prevGame => (
            prevGame.length > 1 ? 
                prevGame.filter((gameState, index) => (index !== prevGame.length - 1)) : prevGame
        ));
    }

    return <button className="back-btn" onClick={handleClick}><i className="fas fa-redo"></i> Go Back</button>
}

export default History; 