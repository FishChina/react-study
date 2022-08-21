//fish 220816 
import React from 'react'
import { useState } from 'react'

export default function App() {


  const[count,setCount] =  useState(0)
  //useState 记忆函数 记住状态

  var mycount = 0
  return (
    <div>
        <button onClick={()=>{
            setCount(count+1)
            mycount++
        }}>Click</button>
        {count}-{mycount}
    </div>
  )
}
