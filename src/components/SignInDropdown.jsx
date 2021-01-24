

import React, { useState } from 'react'
import { signInWithGoogle } from '../firebase/firebase.utils';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { auth } from '../firebase/firebase.utils';
import GoogleButton from './GoogleButton';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import CheckBox from './CheckBox';
import { ReactComponent as ExitIcon } from '../assets/exit-icon.svg';
import { selectSignInDropdownVisible } from '../redux/sign-in-dropdown/sign-in-dropdown.selectors';
import { connect } from 'react-redux';
import { toggleSignInDropdownVisible } from '../redux/sign-in-dropdown/sign-in-dropdown.actions';

const SignInDropdown = ({ signInDropdown, toggleSignInDropdownVisible }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = userCredentials;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({ email: '', password: '' })
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <React.Fragment>
            <CSSTransition in={signInDropdown} timeout={300} classNames="signin-dropdown" unmountOnExit>
                <div className="signin-dropdown" >
                    <ExitIcon className="exit-icon signin-dropdown__exit-icon" onClick={() => toggleSignInDropdownVisible()} />
                    <form className="signin-dropdown__form signin-dropdown__form_sign-in" onSubmit={handleSubmit}>
                        <div className="form__title">
                            Войти
                        </div>

                        <FormInput className="signin-dropdown__input" onChange={handleChange} type="email" label="Email" name="email" value={userCredentials.email} required />
                        <FormInput className="signin-dropdown__input" onChange={handleChange} type="password" label="Пароль" name="password" value={userCredentials.password} required />
                        <CheckBox label="Запомнить" />
                        <CustomButton type="submit" additionalClass={"signin-dropdown__button"}>Войти</CustomButton>
                        <GoogleButton />

                        <div className="signin-dropdown__signup">
                            <Link to="/signup" className="signin-dropdown__signup-link" onClick={() => toggleSignInDropdownVisible()} >Зарегистрироваться</Link>
                        </div>

                    </form>
                </div>
            </CSSTransition>
            <CSSTransition in={signInDropdown} timeout={300} classNames="overlay" unmountOnExit >
                <div className="overlay" onClick={() => toggleSignInDropdownVisible()}></div>
            </CSSTransition>
        </React.Fragment>



    )
}


const mapStateToProps = (state) => ({
    signInDropdown: selectSignInDropdownVisible(state)
})

const mapDispatchToProps = dispatch => ({
    toggleSignInDropdownVisible: () => dispatch(toggleSignInDropdownVisible())
})






export default connect(mapStateToProps, mapDispatchToProps)(SignInDropdown)
