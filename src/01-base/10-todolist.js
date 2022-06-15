
//fish 2022-06-15

import React, { Component } from 'react'

export default class App extends Component {

  a = 100

  myref = React.createRef()

  state = {
    list:[

        {
            id:1,
            text:'a'
        },
        {
            id:2,
            text:'b'
        },
        {
            id:3,
            text:'c'
        }
    ]
  }




  handleClick = () =>{

    console.log("click",this.myref.current.value),
    //this.state.list.push(this.myref.current.value),

    this.setState({

        list:this.state.list
    })
  }



  render() {


    var newList = this.state.list.map(item=><li key={item.id} >{item.text}</li>)




    return (
      <div>
          {/* <input ref="mytest"/> */}
          <input ref={this.myref}/>
          <button  onClick={ 
             this.handleClick
          }>add</button>

          <ul>
              {
                newList
              }
          </ul>


      </div>
    )



  }


}
