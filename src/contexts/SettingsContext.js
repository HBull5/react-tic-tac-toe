import React, { useState, useContext } from 'react';

const SettingsContext = React.createContext(); 
const SettingsUpdateContext = React.createContext(); 

export function useSettings() {
    return useContext(SettingsContext);
}

export function useUpdateSettings() {
    return useContext(SettingsUpdateContext);
}

export default function SettingsProvider({ children }) {
    const [settings, setSettings] = useState({
        p1Name: 'X', 
        p2Name: 'O',
        p1Icon: 'x', 
        p2Icon: 'o', 
        iconOptions: [
            'x',
            'o',
            '🍕',
            '🌮',
            '☕',
            '🏹',
            '⚔️',
            '🪴',
            '🐓',
            '🦆',
            '☘️'
        ]
    });

    return(
        <SettingsContext.Provider value={settings}>
            <SettingsUpdateContext.Provider value={setSettings}>
                {children}
            </SettingsUpdateContext.Provider>
        </SettingsContext.Provider>
    )
}