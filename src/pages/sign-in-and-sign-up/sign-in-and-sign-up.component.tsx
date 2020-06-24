import React, { FunctionComponent } from 'react'

import SignIn from '../../components/sign-in/sign-in-component'

import './sign-in-and-sign-up.styles.scss'

const SignInAndSignUpPage : FunctionComponent = () => (
    <div className='sign-in-and-sign-up'>
        Sign In
        <SignIn />
    </div>
   
)

export default SignInAndSignUpPage