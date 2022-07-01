//fish 220629

import React, { Component } from 'react'

class Child extends Component {
    render(){
        return <div>
            child - {this.props.text}
            <button onClick={() => {
                this.props.text = "333333"
            }}>ChildButton</button>
        </div>
    }
}

export default class App extends Component {
    state = {
        text:"1111"
    }
  render() {
    return (
      <div>
        <button onClick={() => {
            this.setState({
                text : "222222"
            })
        }}>FatherButton</button>
        <Child text = {this.state.text}></Child>
      </div>
    )
  }
}
