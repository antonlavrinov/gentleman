import React, {useState} from 'react'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import {auth, createUserProfileDocument} from '../firebase/firebase.utils';
import CheckBox from './CheckBox';
import GoogleButton from './GoogleButton';

function SignUp() {
    const [userCredentials, setUserCredentials] = useState({name: '', email: '', password: '', confirmPassword: ''})
    const [inputErrors, setInputErrors] = useState({name: '', email: '', password: '', confirmPassword: ''})


    const handleChange = (event) => {
        const {value, name} = event.target;
        setUserCredentials({...userCredentials, [name]: value})
        
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {name, email, password, confirmPassword} = userCredentials;
        if(password !== confirmPassword) {
            alert('Password dont match!')
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUserProfileDocument(user, {displayName: name});
            setUserCredentials({name: '', email: '', password: '', confirmPassword: ''})
        } catch(err) {
            console.log(err)
        }

    }
    return (
        <form className="form form_sign-up" onSubmit={handleSubmit}>
            <div className="form__title">
                Зарегистрироваться
            </div>
            <FormInput onChange={handleChange} type="text" label="Ваше имя" name="name" value={userCredentials.name} required/>
            <FormInput onChange={handleChange} type="email" label="Ваш email" name="email" value={userCredentials.email} required/>
            <FormInput onChange={handleChange} type="password" label="Придумайте пароль" name="password" value={userCredentials.password} required/>
            <FormInput onChange={handleChange} type="password" label="Подтвердите пароль" name="confirmPassword" value={userCredentials.confirmPassword} required/>
            <CheckBox label="Я согласен на обработку персональных данных"/>
            <CustomButton type="submit">Зарегистрироваться</CustomButton>
            <GoogleButton/>
        </form>
    )
}

export default SignUp
