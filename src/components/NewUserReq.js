import React from 'react'
import './NewUserReq.css'
export default function 
() {
  return (
    <div className='newuser-form'>
            <h1>New User Request</h1>
        <form method="post">
        <div className="change">
            <input required type="text" />
            <span></span>
            <label>Name</label>
        </div>
        <div className="change">
            <input required type='email' />
            <span></span>
            <label>Email</label>
        </div>
        <div className="change">
            <input required type="number"/>
            <span></span>
            <label>Phone Number</label>
        </div>
        <div className="change">
            <input required type="text" />
            <span></span>
            <label>Location</label>
        </div>
            <button className="submit-button" >Submit</button>
        </form>
    </div>
  )
}
