import React from 'react'
import img1 from '../imgs/dept-of-fertilizers-logo.jpg'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <div className="txt">
            <p>Ministry of Chemicals and Fertilizers</p>
        </div>
        <div className="portal">
            <h1>Login</h1>
            <form method="post">
                <div className="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" required/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">
                    Forgot Password?
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default Login