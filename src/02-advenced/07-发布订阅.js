//fish 220711
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

//纯js
//调度中心  bus对象
var bus = {

    list:[],

    //订阅
    subscribe(callback){
        //相当于把订阅者的回调函数存进list
        this.list.push(callback)
    },

    //发布
    //text接收发布者的内容
    publish(text){
        //遍历存放回调的list， 将回调函数执行
        this.list.forEach(callback=>{
            //callback调用&&callback执行
            callback && callback(text)
        })
    }
}
//订阅者
//把自己的回调函数当参数传给传到调度中心
// value值是发布者传过来的参数
bus.subscribe((value)=>{
    console.log("111",value)
})


bus.subscribe((value)=>{
    console.log("222",value)
})

//发布者
setTimeout(()=>{
    bus.publish("发布内容1")
},0)


setTimeout(()=>{
    bus.publish("发布内容2")
},1000)

setTimeout(()=>{
    bus.publish("发布内容3")
},3000)
