import React from 'react'
import x from '../imgs/logox.png'
import './InnerPage.css'

function InnerPage() {
  return (
    <div className='innerPage'>
        <div className="header">
            <img className='logox' src={x} alt="this is imge" />
            <p className="headText">
            Department of Chemicals and Petrochemicals
        </p>
        </div>
    </div>
  )
}

export default InnerPage