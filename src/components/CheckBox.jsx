import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheckBox = ({label, ...otherProps}) => {
    const [checked, setChecked] = useState(true);
    return (
        <div className="checkbox" onClick={() => setChecked(!checked)}>
            <div className="checkbox__box">
                {checked ? <div className="checkbox__inside-box"><FontAwesomeIcon className="checkbox__icon" icon={faCheck}/></div> : null}
            </div>
            <div className="checkbox__label noselect">
                {label}
            </div>
            {/* <input className="checkbox-icon" id="checkbox" type="checkbox" {...otherProps}/>
            <label htmlFor="checkbox" className="checkbox-label">{label}</label> */}
            
        </div>
        
    )
}

export default CheckBox
