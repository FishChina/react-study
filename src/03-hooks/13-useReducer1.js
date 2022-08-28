//fish 220826

import React, { useReducer } from 'react'
//处理函数
const reducer = (prevState,action)=>{
  console.log("log",prevState,action)
  //不能直接修改原有状态...复制老状态到新状态
  let newState = {...prevState}

  switch(action.type){
    case 'minus':
      newState.count--
      return newState
    
    case 'add':
      newState.count++
      return newState

     default:
      return prevState
     
  }
}

//定义在外部的对象
const intialState = {
  count:0
}

export default function App() {
  //state是状态，dispatch是改变状态的方法，dispatch不会去改变状态
  const[state,dispatch] = useReducer(reducer,intialState)
  return (
    <div>
      <button onClick={()=>{
        dispatch({
          type:'minus'
        })
      }
      }>-</button>
      {state.count}
      <button onClick={()=>{
        dispatch({
          type:'add'
        })
      }
      }>+</button>
    </div>
  )
}
