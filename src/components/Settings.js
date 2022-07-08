import { useRef } from 'react';
import Popup from './Popup';

function Settings() {
    const popupRef = useRef(); 

    return(
        <div className="settings">
            <i className="fas fa-cog" onClick={() => {popupRef.current.classList.remove('hidden')}}></i>
            <Popup ref={popupRef} type='settings' />
        </div>
    );
}

export default Settings; 