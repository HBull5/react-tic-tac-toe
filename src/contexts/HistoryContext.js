import React, { useState, useContext } from 'react';

const HistoryContext = React.createContext(); 
const HistoryUpdateContext = React.createContext(); 

export function useHistory() {
    return useContext(HistoryContext);
}

export function useUpdateHistory() {
    return useContext(HistoryUpdateContext);
}

export default function HistoryProvider({ children }) {
    const [history, setHistory] = useState([]); 

    return(
        <HistoryContext.Provider value={history}>
            <HistoryUpdateContext.Provider value={setHistory}>{children}</HistoryUpdateContext.Provider>
        </HistoryContext.Provider>
    )
}