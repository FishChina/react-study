//fish 220623

import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list:[]
    }
  render() {
    return (
      <div>
            <button onClick={()=>this.getData()}>click</button>
            <div className="fishwrapper" style={{height:'200px',background:'yellow',overflow:'hidden'}}>
            <ul className="fishcontent">
                {
                    this.state.list.map(item=>
                        <li key={item}>{item}</li>
                        )
                }
            </ul>
            </div>
      </div>
    )
  }

  getData(){
    var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    this.setState({
        list:list
    },()=>{
        new BetterScroll(".fishwrapper")
    })

    
  }
}
