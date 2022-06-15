// fish 22-05-22

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
          <input />
          <button  onMouseOver={ 
              ()=>{
                 console.log('click') 
              }
          }>add</button>


          <button onClick={ this.handleClick }>add2</button>

          <button onClick={ this.handleClick3 }>add3</button>


          <button onClick={ () => {
              this.handleClick4()
          } }>add4</button>
      </div>
    )
  }

  handleClick(){
      console.log("click2")
  }

  handleClick3 = () =>{
        console.log("click3")
  }

  handleClick4 = () =>{
    console.log("click4")
  }
}
