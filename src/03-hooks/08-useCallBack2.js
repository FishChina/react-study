//fish 220816
import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

export default function App() {

  const [name,setName] = useState('fish')
  const [text,setText] = useState('')
  const [list,setList] = useState(['a','b','c'])


  //useCallback 把函数固定下来 只有在参数改变时才重新加载func
  const handleChange = useCallback(
    (evt)=>{
        setText(evt.target.value)
    },
    []
  )

//   const handleChange = (evt) => {
//     setText(evt.target.value)
//   }

  const handleAdd = useCallback(
    () => {
        //console.log(text)
        setList([...list,text])
    
        setText('')
    },
    [text,list]
  )

  const handleDel = useCallback(
    (index) => {
        // 删除时不能影响原状态，需要复制一份新的数组
        var newList = [...list]
        newList.splice(index,1)
        console.log(index)
        setList(newList)
    },
    [list]
  )
  

  return (
    <div>
        {/* value是input的默认值 */}
        {name} - <button onClick={
          ()=>{
            setName('xiaoming')
          }
        }>change name</button>
        <input onChange={handleChange} value={text}/>
        <button onClick={handleAdd}>add</button>

        <ul>
            {
                list.map((item,index)=>
                    <li key={item}>
                        {item}
                        {/* 删除时，用index获取位置 同时用匿名函数传index参数*/}
                        <button onClick={()=>handleDel(index)}>del</button>
                    </li>
                    )
            }
        </ul>

        {!list.length && <div>暂无待办事项</div>}
    </div>
  )
}
