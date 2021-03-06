import React, { useState, useContext } from 'react';

const ScoreContext = React.createContext(); 
const ScoreUpdateContext = React.createContext(); 

export function useScore() {
    return useContext(ScoreContext); 
}

export function useUpdateScore() {
    return useContext(ScoreUpdateContext);
}

export default function ScoreProvider({ children }) {
    const [score, setScore] = useState({
		x: 0, 
	    o: 0
	});

    return(
        <ScoreContext.Provider value={score}>
            <ScoreUpdateContext.Provider value={setScore}>
                {children}
            </ScoreUpdateContext.Provider>
        </ScoreContext.Provider>
    )
}