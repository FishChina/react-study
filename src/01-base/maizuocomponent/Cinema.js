//fish 220621


import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    constructor(){
        super()

        //axios 第三方库专门请求请求数据
        axios.get("https://api.nike.com/deliver/available_gtins/v3?filter=styleColor(DD0490-100)&filter=merchGroup(CN)").then(res=>{}).catch(err=>{console.log(err)})
    }

    //生命周期更适合发ajax
  render() {
    return (
      <div>Cinema</div>
    )
  }
}
