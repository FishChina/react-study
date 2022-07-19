// fish 220718

import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'


const GlobalContext = React.createContext() //创建context对象

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

    //父组件就是供应商provide
    return (
      <GlobalContext.Provider value={{
        info: this.state.info,
        changeInfo:(value)=>{
            this.setState({
                info:value
            })
        }
      }}>
        <div>

            {/* {this.state.info} */}
            {
            this.state.filmList.map(
                item=>
                <FileList key = {item.filmId} {...item}></FileList>
            )
            }

            <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    )
  }
}

//电影列表页面
/*受控组件*/
class FileList extends Component{
  render(){
    let {name, poster, grade, synopsis} = this.props

    return (


    <GlobalContext.Consumer>
        {
            (value)=>{
                console.log(value)
                return(
                <div className="filmitem" onClick={()=>{
                    //console.log(synopsis)
                    //this.props.onEvent(synopsis)
                    value.changeInfo(synopsis)
                  }}>
                    <img src = {poster} alt = {name}></img>
                    <h4>{name}</h4>
                    <div>观众评分:{grade}</div>
                  </div>
                )
            }
        }


    </GlobalContext.Consumer>

    )

  }
}

//电影详情页面
class FilmDetail extends Component{
  render(){
    // 通过props拿到父页面传来的info
    return (
        <GlobalContext.Consumer>
            {
                (value)=><div className='filmdetail'>
                            filmdetail - {value.info}
                        </div>
            }
            
        </GlobalContext.Consumer>
    )
  }
}



