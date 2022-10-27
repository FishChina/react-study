//fish 220801
import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
export default function App() {

    const[list,setList] = useState([])


    //组件每渲染一次，该函数就自动执行一次。组件首次在网页 DOM 加载后，副效应函数也会执行。
    //这里在函数里面已经执行了setList所以不需要再返回值了。
    useEffect(() => {

        axios.get("/test.json").then(
            res=> {
                console.log(res.data)
                setList(res.data.data.films)
            }
        )

    }, [])//返回空数组
    

  return (
    <div>
        {
            list.map(item=>
                <li key={item.filmId}>{item.name}</li>
                )
        }
    </div>
  )
}
