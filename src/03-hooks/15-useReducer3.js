//fish 220828

import React, { Component, useState, useEffect, useContext, useReducer} from 'react'
import axios from 'axios'
import './css/03-communication.css'

const intialState = {
    
    filmList : [],
    info : ''
}

const reducer = (prevState,action)=>{

    var newState = {...prevState}
    switch(action.type){
        case 'change-filmList' :
            newState.filmList = action.value
            return newState

        case 'change-info' :
            newState.info = action.value
            return newState

        default :
            return prevState
    }

}

//原本组件传递需要一层一层props传递，传递太过繁琐  跨级通信
const GlobalContext = React.createContext() //创建context对象

export default function App (){

    const [state, dispatch] = useReducer(reducer, intialState)

    useEffect(() => {
        //axios获取数据
        axios.get('/test.json').then(res=>{
            //console.log(res.data.data.films)

            dispatch({
                type : 'change-filmList',
                value : res.data.data.films
            })
        })
    }, [])

    //这里相当于父组件

    //父组件就是供应商provide
    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
          <div>
  
              {/* {this.state.info} */}
              {
              state.filmList.map(
                  item=>
                  <FilmList key = {item.filmId} {...item}></FilmList>
              )
              }
  
              <FilmDetail></FilmDetail>
          </div>
        </GlobalContext.Provider>
      )
    
}

//
function FilmList (props) {
    let {name, poster, grade, synopsis} = props
    const {dispatch} = useContext(GlobalContext)

        return(
        <div className="filmitem" onClick={()=>{
            //state.changeInfo(synopsis)
            dispatch({
                type : 'change-info',
                value : synopsis
            })
            }}>
            <img src = {poster} alt = {name}></img>
            <h4>{name}</h4>
            <div>观众评分:{grade}</div>
            </div>
        )
}

//电影详情 value值就是传递的Context对象
function FilmDetail () {
    const {state} = useContext(GlobalContext)

    return (
            
                <div className='filmdetail'>
                            filmdetail - {state.info}
                        </div>
            
            
    )

}
