//fish 220823
import React from 'react'
import { useState,useRef } from 'react'

export default function App() {

  const [text,setText] = useState('')
  const [list,setList] = useState(['a','b','c'])
  const mytext = useRef() //React.createRef()

  const handleChange = (evt) => {
    setText(evt.target.value)
  }

  const handleAdd = () => {
    //console.log(mytext.current.value)
     setList([...list,mytext.current.value])

     mytext.current.value = ''
  }

  const handleDel = (index) => {
    // 删除时不能影响原状态，需要复制一份新的数组
    var newList = [...list]
    newList.splice(index,1)
    console.log(index)
    setList(newList)
  }

  return (
    <div>
        {/* value是input的默认值 */}
        <input ref={mytext}/>
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
