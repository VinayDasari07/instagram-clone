import React from 'react'
import './Login.css'
import { useState } from 'react';

function Login({ isLoginPage }) {

    const [commonText] = useState(
        {
            password: "Password",
            email: "Mobile number or Email",
            loginUserName: "Phone number, username or email",
            fullName: "Full Name",
            userName: "UserName",
            policy: "By signing up, you agree to our Terms , Data Policy and Cookies Policy.",
            instagram: "Instagram",
            logIn: "Log In",
            signUp: "Sign Up",
            haveAccount: "Have an account?",
            doNotHaveAccount: "Don't have an account?",
            forgotPassword: "Forgot password?",
            signUpInfoText: "Sign up to see photos and videos from your friends."
        })

    return (
        <div className="container-fluid">
            <div className="login-wrapper">
                <div className="logo-text">{commonText.instagram}</div>
                {!isLoginPage ?
                    (<div className="sign-up-info-text background-white">
                        {commonText.signUpInfoText}
                    </div>) : ""
                }
                <div className="login-form">
                    <input type="text" className="form-control font-size-login" id="staticEmail"
                        placeholder={isLoginPage ? commonText.loginUserName : commonText.email} />
                    {
                        isLoginPage ? "" :
                            (<>
                                <input type="text" className="form-control font-size-login" id="staticFullName"
                                    placeholder={commonText.fullName} />
                                <input type="text" className="form-control font-size-login" id="staticUserName"
                                    placeholder={commonText.userName} />
                            </>)
                    }
                    <input type="password" className="form-control font-size-login" id="inputPassword" placeholder={commonText.password} />
                    <button type="submit" className="form-control btn btn-primary login-btn" >
                        {isLoginPage ? commonText.logIn : commonText.signUp}</button>
                </div>
                {isLoginPage ?
                    <button className="forgot-password background-white" href="#" >{commonText.forgotPassword}</button> :
                    <span className="policy-text background-white">{commonText.policy}</span>
                }
            </div>
            <div className="sign-up-wrapper background-white">
                <div className="sign-up-text">
                    <p className="background-white"> {isLoginPage ? commonText.doNotHaveAccount : commonText.haveAccount}
                        <a className="sign-up-link background-white" href= { isLoginPage ? "/sign-in" : "/login" } > 
                        {isLoginPage ? commonText.signUp : commonText.logIn}</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login