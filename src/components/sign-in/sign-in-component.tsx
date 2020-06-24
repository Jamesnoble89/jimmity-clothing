import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {signInWithGoogle } from '../../firebase/firebase.utils'

interface TempProps{

}

interface TempState{
    email: string,
    password: string

}

class SignIn extends React.Component<TempProps, TempState>{

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e:  React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        this.setState({[name]: value} as Pick<TempState, keyof TempState>)  ;

    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email address and password</span>
                <form onSubmit={this.handleSubmit}>
                   
                    <FormInput 
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label="Email"
                        required
                     
                    />
                
                    <FormInput 
                        name="password"
                        label="Password" 
                        type="password" 
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        required
                    />
                    <div className='buttons'>
                        <CustomButton isGoogleSignin={false} type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignin={true} onClick={(signInWithGoogle)}>Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }

} 

export default SignIn