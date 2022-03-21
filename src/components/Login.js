import React, { useState, useContext} from 'react'
import userContext from '../context/users/userContext'
import img1 from '../imgs/dept-of-fertilizers-logo.jpg'
import './Login.css'
import {Link} from 'react-router-dom'


function Login() {
    const [creds, setCreds] = useState({loginID:"",
password: ""})
    const context = useContext(userContext);
    const { userLogin } = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const json = await userLogin(creds);
        const userdetail = json.user;
    }

    const handleOnChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

  return (
      <>
    <div className='login'>
        <div className="txt">
            <p>Ministry of Chemicals and Fertilizers</p>
        </div>
        <div className="portal">
            <h1>Login</h1>
            <form method="post">
                <div className="txt_field">
                    <input type="text" required name='loginID' value={creds.loginID} onChange={handleOnChange}/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" required name='password' value={creds.password} onChange={handleOnChange}/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">
                    Forgot Password?
                </div>
                <Link to='/innerPage' >
                    <button className="submit-button" >Login</button>
                </Link>
                

            </form>
        </div>
    </div>
    </>
  )
}

export default Login