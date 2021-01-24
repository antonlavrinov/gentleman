import React, { useState } from 'react'
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { auth } from '../firebase/firebase.utils';

function SignIn() {

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
        <form
            className="form form_sign-up"
            onSubmit={handleSubmit}>
            <FormInput
                onChange={handleChange}
                type="email"
                label="Email"
                name="email"
                value={userCredentials.email}
                required />
            <FormInput
                onChange={handleChange}
                type="password"
                label="Пароль"
                name="password"
                value={userCredentials.password}
                required />
            <CustomButton type="submit">Войти</CustomButton>
        </form>
    )
}

export default SignIn
