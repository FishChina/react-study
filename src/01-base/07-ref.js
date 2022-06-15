// fish 22-05-22

import React, { Component } from 'react'

export default class App extends Component {

  a = 100

  myref = React.createRef() 

  render() {
    return (
      <div>
          {/* <input ref="mytest"/> */}
          <input ref={this.myref}/>
          <button  onClick={ 
              ()=>{
                //  console.log('click',this.refs.mytest.value) 
                console.log('click',this.myref.current.value) 
              }
          }>add</button>


      </div>
    )
  }


}

