import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'

import './custom-button.styles.scss'

interface tempProps {
    isGoogleSignin: boolean
}

const CustomButton: FunctionComponent<tempProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, isGoogleSignin,...otherProps}) => (
    <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton