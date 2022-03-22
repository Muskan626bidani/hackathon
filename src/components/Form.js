import React from 'react'
import './Form.css'

export default function Form() {
  // const handleMouseOver = (event)={
  //   event.target.setAttribute("style","")
  // }
  return (
    <div className="container">
        <div className="temp1">
            <div id="wrapper">
                <div className="wrapper1">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <div className="animBtnCont">
                        <div style={{'width': '200px',
                          'height': '60px',
                          'padding': '0px 30px',
                          'line-height': '60px',
                          'font-size': '25px',
                          'font-weight': 'bolder',
                          'text-align': 'center',
                          /* padding: 15px 30px; */
                          'cursor': 'pointer',
                          'color': '#98042D',
                          'border': '5px solid skyblue',
                          'position': 'relative',
                          'transition': 'all 1s'}} className="animBtn" >Button</div>
                    </div>
                </div>
              </div>
                
        </div>
    <div className="temp2"></div>
    </div>
  )
}
