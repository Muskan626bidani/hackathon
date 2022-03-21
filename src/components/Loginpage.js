import React from 'react'
import './loginpage.css'

function loginpage() {
  return (
    <div className='user-main'>
      <div className='side-navbar'>
        <div className='profile-image'>

        </div>
        <div className="userlinks">
          <div className="links">
            <a href="#1st">update data</a>
          </div>
          <div className="links">
            <a href="#2nd">update data</a>
          </div>
          <div className="links">
            <a href="#3rd">update data</a>
          </div>
          <div className="links">
            <a href="#4th">update data</a>
          </div>
          <div className="links">
            <a href="#5th">update data</a>
          </div>
          
        </div>
        <div className="user-footer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a voluptatum neque cum quam enim libero fuga, dolore ipsum officiis voluptates earum aliquid aut quaerat impedit culpa necessitatibus, modi illo similique sed debitis quidem mollitia vitae! Soluta sunt iusto id perferendis? Iusto, amet incidunt libero omnis accusantium itaque quod ad error molestias. Aspernatur!
        </div>
      </div>
        <div className="user-homepage">
          <div className='a1st' id='1st'> 1st page</div>
          <div className='a2nd' id='2nd'>2nd page</div>
          <div className='a3rd' id='3rd'>3rd page</div>
          <div className='a4th' id='4th'>4th page</div>
          <div className='a5th' id='5th'>5th page</div>
        </div>
    </div>
  )
}

export default loginpage