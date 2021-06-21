import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="container">
            <div className="login-wrapper">
                <h3 className="logo-text">Instagram</h3>
                <div className="login-form">
                    <div class="mb-3 row">
                        <div class="col-sm-12">
                            <input type="text" class="form-control font-size-login" id="staticEmail" placeholder="Phone number, username or email" />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col-sm-12">
                            <input type="password" class="form-control font-size-login" id="inputPassword" placeholder="Password" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Log In </button>
                </div>
            </div>
        </div>
    )
}

export default Login