import React from 'react'
import {ReactComponent as GoogleIcon} from '../assets/google-icon.svg';

const GoogleButton = () => {
    return (
        <div className="google-button">
            <GoogleIcon className="google-button__icon"/>
            <button className="button button_google">Войти через Google</button>
        </div>
    )
}

export default GoogleButton
