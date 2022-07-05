import { useHistory, useUpdateHistory } from '../contexts/HistoryContext';
import { useGameUpdate } from '../contexts/GameContext';


function History() {
    const history = useHistory(); 
    const setHistory = useUpdateHistory();
    const setGame = useGameUpdate();

    function handleClick() {

    }

    return <button onClick={handleClick}>Go Back</button>
}

export default History; 