/*
 * fish 220801
 */
import React, { useState } from 'react'

export default function App() {

  //前面是传的值，后面是改变状态的方法
  const [name,setName] = useState('fish')
  const [age,setAge] = useState('28')

  return (
    <div>
      {/*通过方法将状态改变 */}
      <button onClick={()=>{
        setName("sea")
        setAge("29")
      }}>click</button>
      App-{name}={age}
      
    </div>
  )
}

