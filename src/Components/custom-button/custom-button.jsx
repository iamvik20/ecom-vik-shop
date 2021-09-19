import React from 'react'
import './custom-button.scss'


const CustomButton = ({ children, SignIn ,isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${SignIn ? 'sign-in' : ' '} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}>
        {
            children
        }
    </button>
)

 
export default CustomButton 
