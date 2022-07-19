//220718 fish

import React, { Component } from 'react'

//1.插槽一定程度为了复用
//2.一定程度减少父子通信
class Child extends Component {
    render(){
      return <div>
        child

        {/* 插槽 vue 叫 slot 之前context 模式，一个特殊的标签包住了div，一般在这个标签内部是不展示，只展示特殊标签内部的样式 */}
        {this.props.children[0]}
        {this.props.children[2]}
        {this.props.children[4]}
        {this.props.children[4]}
      </div>
    }
}

export default class App extends Component {
  render() {
    return (
        
      <div>
        <Child>
          <div>1111</div>
          <div>2111</div>
          <div>3111</div>
          <div>4111</div>
          <div>5111</div>

        </Child>
        App</div>
    )
  }
}
