import { useGameUpdate } from '../contexts/GameContext';

function History() {
    const setGame = useGameUpdate(); 

    function handleClick() {
        setGame(prevGame => (
            prevGame.length > 1 ? 
                prevGame.filter((gameState, index) => (index !== prevGame.length - 1)) : prevGame
        ));
    }

    return <button onClick={handleClick}>Go Back</button>
}

export default History; 