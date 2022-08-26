// fish 220826

import React, { Component, useState, useEffect,useContext} from 'react'
import axios from 'axios'
import './css/03-communication.css'

//原本组件传递需要一层一层props传递，传递太过繁琐
const GlobalContext = React.createContext() //创建context对象

export default function App (){
    const [filmList, setfilmList] = useState([])
    const [info, setinfo] = useState("")

    useEffect(() => {
        //axios获取数据
        axios.get('/test.json').then(res=>{
            //console.log(res.data.data.films)
            setfilmList(res.data.data.films)
        })
    }, [])

    //这里相当于父组件

    //父组件就是供应商provide
    return (
        <GlobalContext.Provider value={{
          info: info,
          changeInfo:(value)=>{
            setinfo(value)
          }
        }}>
          <div>
  
              {/* {this.state.info} */}
              {
              filmList.map(
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
    const value = useContext(GlobalContext)


        return(
        <div className="filmitem" onClick={()=>{
            value.changeInfo(synopsis)
            }}>
            <img src = {poster} alt = {name}></img>
            <h4>{name}</h4>
            <div>观众评分:{grade}</div>
            </div>
        )
                
            
    
    
        


}

//电影详情 value值就是传递的Context对象
function FilmDetail () {
    const value = useContext(GlobalContext)
    return (
            
                <div className='filmdetail'>
                            filmdetail - {value.info}
                        </div>
            
            
    )

}





