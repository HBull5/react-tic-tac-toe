import React from 'react';
import { useSettings, useUpdateSettings } from '../contexts/SettingsContext';

function Popup({ type }, ref) {
	const settings = useSettings(); 
	const setSettings = useUpdateSettings();

	function settingsPopup() {
		return(
			<>
				<label htmlFor="p1-name">P1 Name:</label>
				<div className="input-wrap">
					<input id="p1-name" type="text" value={settings.p1Name} onChange={e => {setSettings(prevSettings => ({...prevSettings, p1Name: e.target.value }))}}/>
				</div>
				<label htmlFor="p2-name">P2 Name:</label>
				<div className="input-wrap">
					<input id="p2-name" type="text" value={settings.p2Name} onChange={e => {setSettings(prevSettings => ({...prevSettings, p2Name: e.target.value }))}}/>
				</div>
				<label htmlFor="p1-icon">P1 Icon:</label>
				<div className="input-wrap">
					<select id="p1-icon" value={settings.p1Icon} onChange={e => {setSettings(prevSettings => ({...prevSettings, p1Icon: e.target.value}))}}>
						{settings.iconOptions.map((option, i) => (
							<option key={i} value={option}>{option}</option>
						))}
					</select>
				</div>
				<label htmlFor="p2-icon">P2 Icon:</label>
				<div className="input-wrap">
					<select id="p2-icon" value={settings.p2Icon} onChange={e => {setSettings(prevSettings => ({...prevSettings, p2Icon: e.target.value}))}}>
						{settings.iconOptions.map((option, i) => (
							<option key={i} value={option}>{option}</option>
						))}
					</select>
				</div>
			</>
		)
	}

	function notificationPopup() {
		return(
			<p>this is a notification.</p>
		)
	}

	function closePopup() {
		ref.current.classList.add('hidden');
	}

	return(
		<div ref={ref} className='popup hidden'>
			<div className="popup-content">
				<i className="close-btn fas fa-times" onClick={closePopup}></i>
				{type === 'settings' && settingsPopup()}
				{type === 'notification' && notificationPopup()}
			</div>
		</div>
	)
}

export default React.forwardRef(Popup);
