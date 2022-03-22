import React, { useContext, useState } from 'react'
import userContext from '../context/users/userContext';
import './UpdateDetails.css'
function UpdateDetails(props) {
    const context = useContext(userContext);
    const { updateUser } = context;
    const [creds, setCreds] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const json = await updateUser(creds);
        if(json.success)
            window.alert("User Details Updated");
        else
            window.alert("Some Problem Occured");
    }
    
    const handleOnChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }
    
    return (
    <div className='form-main'>
            <h1>Update account details</h1>
        <form method="post">
        <div className="change">
            <input required type="text" onChange={handleOnChange} name='name' value={creds.name}/>
            <span></span>
            <label>Name</label>
        </div>
        <div className="change">
            <input required type='email' onChange={handleOnChange} name='email' value={creds.email}/>
            <span></span>
            <label>E-mail</label>
        </div>
        <div className="change">
            <input required type="text" onChange={handleOnChange} name='phoneNumber' value={creds.phoneNumber}/>
            <span></span>
            <label>Mobile Number</label>
        </div>
            <button className="submit-button" onClick={handleSubmit}>Update</button>
            <button className="pass-button" >Change Password?</button>
        </form>
    </div>
  )
}

export default UpdateDetails;