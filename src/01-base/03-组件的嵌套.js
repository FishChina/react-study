//fish 22-05-21

import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>child</div>
    }
}

class Navbar extends Component{
    render(){
        return <div>
            Navbar
            <Child></Child>
        </div>
    }
}

const Swiper = ()=> <div>Swiper</div>

function Tabbar() {
    return (
        <div>
            Tabbar
        </div>
    )
}

export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <Swiper></Swiper>
          <Tabbar></Tabbar>
      </div>
    )
  }
}
