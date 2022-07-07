// fish 220707

import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {

    constructor(){
        super()
        axios.get().then(res=>{
            console.log()
        })
    }

  render() {
    return (
      <div>06-中间人模式</div>
    )
  }
}
