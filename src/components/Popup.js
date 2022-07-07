import { useSettings, useUpdateSettings } from '../contexts/SettingsContext';

function Popup({ type }) {
	const settings = useSettings(); 
	const setSettings = useUpdateSettings();

	function settingsPopup() {
		return(
			<>
				<label htmlFor="p1-name">P1 Name:</label>
				<input htmlId="p1-name" type="text" />
				<label htmlFor="p2-name">P2 Name:</label>
				<input htmlId="p2-name" type="text" />
				<label htmlFor="p1-icon">P1 Icon:</label>
				<select id="p1-icon">
					{settings.iconOptions.map(option => (
						<option value={option}>{option}</option>
					))}
				</select>
				<label htmlFor="p2-icon">P2 Icon:</label>
				<select id="p2-icon">
					{settings.iconOptions.map(option => (
						<option value={option}>{option}</option>
					))}
				</select>
			</>
		)
	}

	function notificationPopup() {
		return(
			<p>this is a notification.</p>
		)
	}

	return(
		<div className="popup">
			<div className="popup-content">
				<i class="close-btn fas fa-times"></i>
				{type == 'settings' && settingsPopup()}
				{type == 'notification' && notificationPopup()}
			</div>
		</div>
	)
}

export default Popup;
