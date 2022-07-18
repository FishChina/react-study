// fish 220715

import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'


//以后的redux基于订阅发布模式

//纯js
//调度中心  bus对象
var bus = {

    list:[],

    //订阅
    subscribe(callback){
        //相当于把订阅者的回调函数存进list
        this.list.push(callback)
    },

    //发布
    //text接收发布者的内容
    publish(text){
        //遍历存放回调的list， 将回调函数执行
        this.list.forEach(callback=>{
            //callback调用&&callback执行
            callback && callback(text)
        })
    }
}



export default class App extends Component {

    constructor(){
        super()
        this.state = {
          filmList:[]
        }
        axios.get('/test.json').then(res=>{
            console.log(res.data.data.films)
            //将数据设置为状态给父组件提供
            this.setState({
              filmList:res.data.data.films
            })
        })
    }

  render() {
    return (
      <div>
        {this.state.info}
        {
          this.state.filmList.map(
            item=>
            <FileList key = {item.filmId} {...item}></FileList>
          )
        }


        <FilmDetail></FilmDetail>
      </div>
    )
  }
}

/*受控组件*/
class FileList extends Component{
  render(){
    let {name, poster, grade, synopsis} = this.props
    return <div className="filmitem" onClick={()=>{
      //console.log(synopsis)
      bus.publish(synopsis)
    }}>
      <img src = {poster} alt = {name}></img>
      <h4>{name}</h4>
      <div>观众评分:{grade}</div>
    </div>
  }
}

class FilmDetail extends Component{

    //类被初始化的时候就进行订阅
    constructor(){
        super()

        this.state = {
            detail : ''
        }


        bus.subscribe((value)=>{
            console.log("我在filmdetail中定义",value)

            this.setState({
                detail : value
            })
        })
    }

  render(){
    return <div className='filmdetail'>
      {this.state.detail}
    </div>
  }
}
