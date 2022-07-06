
//fish 220706
import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent2/Film'
import Cinema from './maizuocomponent2/Cinema'
import Center from './maizuocomponent2/Center'
import Tabbar from './maizuocomponent2/Tabbar'
import Navbar from './maizuocomponent2/Navbar'

export default class App extends Component {

    state = {

        list:[
            {
                id:1,
                text:"电影"
            },
            {
                id:2,
                text:"影院"
            },
            {
                id:3,
                text:"我的"
            }
        ],
        current: 2
    }
    

  which(){
    switch (this.state.current){
        case 0 :
            return <Film></Film>
        case 1 :
            return <Cinema></Cinema> 
        case 2 :
            return <Center></Center>

        default :
            return null
    }
  }  

  render() {
    return (
      <div>
        {this.state.current}
        {/* { this.state.current === 0 && <Film></Film> }
        { this.state.current === 1 && <Cinema></Cinema> }
        { this.state.current === 2 && <Center></Center> } */}
        {/* 子传父
        将孩子的属性传到父亲 */}
        <Navbar myevent = {
            () => {
                console.log("navbar father ")

                this.setState({
                    current:2
                })
            }
        }></Navbar>
        {
            this.which()
        }
        
        <Tabbar myevent = {
            (index)=> {
                console.log('父亲的地盘',index)

                this.setState({
                    current:index
                }
                    
                )
            }
        }  
        // 将父亲组件的状态通过props传给孩子
        current = {this.state.current}
        list = {this.state.list}
        ></Tabbar>
      </div>
    )
  }


}
