// fish 22-05-22

import React, { Component } from 'react'

export default class App extends Component {

  a = 100


  render() {
    return (
      <div>
          <input />
          <button  onMouseOver={ 
              ()=>{
                 console.log('click',this.a) 
              }
          }>add</button>


          <button onClick={ this.handleClick.bind(this) }>add2</button>

          <button onClick={ this.handleClick3 }>add3</button>


          <button onClick={ () => this.handleClick4() }>add4</button>
      </div>
    )
  }

  handleClick(){
      console.log("click2",this.a)
  }

  handleClick3 = (evt) =>{
        console.log("click3",evt)
  }

  handleClick4 = () =>{
    console.log("click4")
  }
}

/*
改变this指向的三种方案：
call, 改变this指向，自动执行函数
apply, 改变this指向，自动执行函数
bind ,改变this指向，手动执行函数

*/

/* 
React 并不会真正的绑定事件到每一个具体<>元素身上，而是采用事件代理的模式，绑在了根节点身上。
*/

var obj1 = {
  name: "obj1",
  getName(){
    console.log(this.name)
  }
}


var obj2 = {
  name: "obj2",
  getName(){
    console.log(this.name)
  }
}

obj1.getName.call(obj2)
obj2.getName()



// var obtn = document.getElementById("btn")
// obtn.onClick=function() {
//   console.log(this)
// }
