
//fish 2022-06-15

import React, { Component } from 'react'

export default class App extends Component {

  a = 100

  myref = React.createRef()

  state = {
    list:[

      'a','b','c'
    ]
  }




  handleClick = () =>{

    console.log("click",this.myref.current.value);
    this.state.list.push(this.myref.current.value);

    this.setState({

      list:this.state.list
    })
  }



  render() {


    //var newList = 




    return (
      <div>
          {/* <input ref="mytest"/> */}
          <input ref={this.myref}/>
          <button key = 'item' onClick={ 
             this.handleClick
          }>add</button>

          <ul>
              {
                this.state.list.map(item=><li key='item' >{item}</li>)
              }
          </ul>


      </div>
    )



  }


}
