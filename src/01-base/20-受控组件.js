// fish 220630

import React, { Component } from 'react'

export default class App extends Component {
    //myusername = React.createRef()

    state = {
        username:"fish"
    }
  render() {
    return (
      <div>
        <h1>登录页</h1>

        <input type= 'text'  value = {this.state.username} 
        onChange={ (evt) => {
            console.log("onChange",evt.target.value)
            this.setState({
                username:evt.target.value
            })
        }}></input>
        <button onClick={()=>{
            // console.log(this.myusername.current.value)
            console.log(this.state.username)
        }}>登陆</button>
        <button onClick={() => {
           // this.myusername.current.value = ""

           this.setState({
               username:""
           })
        }}>重置</button>
      </div>
    )
  }
}
