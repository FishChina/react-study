// fish 220707

import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'
export default class App extends Component {

    constructor(){
        super()
        this.state = {
          filmList:[],
          info: ""
        }
        //axios获取数据
        axios.get('/test.json').then(res=>{
            console.log(res.data.data.films)
            this.setState({
              filmList:res.data.data.films
            })
        })
    }

  render() {
    //这里相当于父组件
    return (
      <div>
        {/* {this.state.info} */}
        {
          this.state.filmList.map(
            item=>
            <FileList key = {item.filmId} {...item} 
            onEvent={(value)=>{
              console.log("父组件接收: ",value)

              this.setState(
                {
                  info: value
                }
              )
            }}
            ></FileList>
          )
        }

        <FilmDetail info= {this.state.info}></FilmDetail>
      </div>
    )
  }
}

//电影列表页面
/*受控组件*/
class FileList extends Component{
  render(){
    let {name, poster, grade, synopsis} = this.props
    return <div className="filmitem" onClick={()=>{
      //console.log(synopsis)
      this.props.onEvent(synopsis)
    }}>
      <img src = {poster} alt = {name}></img>
      <h4>{name}</h4>
      <div>观众评分:{grade}</div>
    </div>
  }
}

//电影详情页面
class FilmDetail extends Component{
  render(){
    // 通过props拿到父页面传来的info
    return (<div className='filmdetail'>
      {this.props.info}
    </div>)
  }
}
