//fish 22-05-22

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {

  // state = {
  //   //myText: '收藏',
  //   myShow: true
  // }

  constructor(){

    super()

    this.state = {
        //myText: '收藏',
        myShow: true,
        myName: 'fish'
    }
  }


  render() {
    return (
      <div>

          <h1>Welcome to React world !{this.state.myName}</h1>

          <button onClick={()=>{
            this.setState({
              myShow:!this.state.myShow,
              myName: 'sea'
            })

            if(this.state.myShow){
              console.log("收藏的逻辑")
            }else{
              console.log("取消收藏的逻辑")
            }
          }}>
            {
              this.state.myShow ?  '❤取消' : '🖤收藏'
            }
          </button>

      </div>
    )
  }
}
