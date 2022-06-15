//fish 22-05-21

import React, { Component } from 'react'
import './css/01-index.css'  //导入css 模块 ， webpack支持

export default class App extends Component {
  render() {
    var myname = 'fish'
    var obj = {
      backgroundColor:'yellow',
      fontSize:'30px'
    }
    return (
      <div>
        {10+20}-{myname}-
        {10>20?'aaa':'bbb'}

        
        {/* 变量需要用花括号装 js地盘注释方式*/}
        <div style={obj}>111</div>
        <div style={{background: 'red'}}>222</div>
        <div className='active'>333</div>

        <label htmlFor = "username">用户名:</label>
        <input type = "text" id = "username"/>
        </div>
    )
  }
}
