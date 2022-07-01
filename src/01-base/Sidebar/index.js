//fish 220624

import React from 'react'

export default function Sidebar(props) {
  //函数式组件没有this
  

  let {bg,position} = props

  var obj1 = {
    left : 0
  }

  var obj2 = {
    right : 0
  }

  var obj = {
    background : bg ,
    width : "200px", 
    position : "fixed"
  }

  var styleObj = position === "left"?{...obj,...obj1}:{...obj,...obj2}

  console.log(bg)
  return (

    <div style={styleObj}>
      <ul>
      

        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>
        <li>sidebar</li>

      </ul>
      
    </div>
  )
}

