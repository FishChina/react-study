
//fish 220701
import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
import Tabbar from './maizuocomponent/Tabbar'
import Navbar from './maizuocomponent/Navbar'

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
        {/* { this.state.current === 0 && <Film></Film> }
        { this.state.current === 1 && <Cinema></Cinema> }
        { this.state.current === 2 && <Center></Center> } */}

        <Navbar myevent = {
            () => {
                console.log("navbar father ")
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
        }></Tabbar>
      </div>
    )
  }


}
