
//fish 2022-06-30

import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {

  a = 100

  //myref = React.createRef()

  state = {

    mytext: "",

    list:[
    {
    id:'1',
    mytext:'a',
    isChecked:false
    },
    {
    id:'2',
    mytext:'b',
    isChecked:false
    },
    {
    id:'3',
    mytext:'c',
    isChecked:false
    }
    ]
  }




  handleClick = () =>{

    //console.log("click",this.myref.current.value);

    //不要直接修改状态
    //this.state.list.push(this.myref.current.value);
    let newList = [...this.state.list]
    newList.push({
      id:Math.random()*100000000,
      mytext:this.state.mytext
    });

    this.setState({
      list:newList,
      mytext:''
    })

    //清空输入框
    //this.myref.current.value = ''
  }

  handleDelClick = (index) =>{
    //console.log("del",index)

    //不要直接修改状态，可能会造成不可预期的后果，直接造一个新数组进行修改

    let newList = this.state.list.concat()

    newList.splice(index,1)

    this.setState({
      list:newList
    }
    )
  }

  handleChecked = (index) => {
    console.log(index)

    let newList = [...this.state.list]
    newList[index].isChecked = !newList[index].isChecked

    this.setState({
      list:newList
    })
  }



  render() {

    return (
      <div>
          {/* <input ref="mytest"/> */}
          <input 
          value = {this.state.mytext}
          onChange = {(evt)=>{
            this.setState({
                mytext:evt.target.value
            })
          }}
          />
          <button  onClick={ 
             this.handleClick
          }>add</button>

          <ul>
              {
                this.state.list.map((item,index)=>
                <li key={item.id} >
                  <input type = 'checkbox' 
                  checked = {item.isChecked}
                  onChange = {()=>this.handleChecked(index)}
                  ></input>
                  {/* {item.isChecked?'删除':'不删除'} */}
                  {/* {item.mytext}  */}
                  {/* 富文本展示 */}
                  <span dangerouslySetInnerHTML={
                    {
                      __html:item.mytext
                    }
                  } style = {{textDecoration: item.isChecked ? 'line-through': ''}}></span>
                  <button >完成</button>
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
