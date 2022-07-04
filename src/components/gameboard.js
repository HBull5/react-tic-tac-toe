import {useEffect} from 'react';
import GameboardContext from '../contexts/GameboardContext';
import Square from './Square';

function GameBoard() {

	return (
        <GameboardContext>
            <div className="gameboard">
                {[...Array(9)].map((e, i) => (
                    <Square key={i}  />
                ))}
            </div>
        </GameboardContext>
    )
}

export default GameBoard;
