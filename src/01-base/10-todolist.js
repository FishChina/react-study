
//fish 2022-06-15

import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {

  a = 100

  myref = React.createRef()

  state = {
    list:[
{
  id:'1',
  mytext:'a'
},
{
  id:'2',
  mytext:'b'
},
{
  id:'3',
  mytext:'c'
}
    ]
  }




  handleClick = () =>{

    console.log("click",this.myref.current.value);

    //不要直接修改状态
    //this.state.list.push(this.myref.current.value);
    let newList = [...this.state.list]
    newList.push({
      id:Math.random()*100000000,
      mytext:this.myref.current.value
    });

    this.setState({

      list:newList
    })

    //清空输入框
    this.myref.current.value = ''
  }

  handleDelClick = (index) =>{
    console.log("del",index)

    //不要直接修改状态，可能会造成不可预期的后果，直接造一个新数组进行修改

    let newList = this.state.list.concat()

    newList.splice(index,1)

    this.setState({
      list:newList
    }
    )
  }



  render() {

    return (
      <div>
          {/* <input ref="mytest"/> */}
          <input ref={this.myref}/>
          <button  onClick={ 
             this.handleClick
          }>add</button>

          <ul>
              {
                this.state.list.map((item,index)=><li key={item.id} >
                  {/* {item.mytext}  */}
                  {/* 富文本展示 */}
                  <span dangerouslySetInnerHTML={
                    {
                      __html:item.mytext
                    }
                  }></span>
                  <button onClick= {()=>
                    this.handleDelClick(index)
                  }>del</button>
                  </li>)
              }
          </ul>

          {
          //条件渲染
          //三目表达式
          //this.state.list.length === 0 ? <div>暂无待办事项</div>:null
          //短路表达式
          //this.state.list.length === 0 && <div>暂无待办事项</div>
        }
        <div className={this.state.list.length === 0? '':'hidden'}>暂无待办事项</div>

      </div>
    )



  }


}
