//fish 220701
import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return <div style={{background:"red"}}>
            <button onClick={()=> {
              // this.setState({
              //   isShow:!this.state.isShow
              // })
              //console.log("子传父",this.props.event)
              this.props.event()
            }}>click</button>
            <span>navbar</span>

        </div>
    }
}

class Sidebar extends Component{
    render(){
        return <div style={{background:'yellow', width:'200px'}}>
            <ul>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>

            </ul>
        </div>
    }
}

class Swiper extends Component{
  render(){
    return <div>
        {this.props.children}
    </div>
  }
}

export default class App extends Component {
  state = {
    isShow : false
  }

  handleEvent = () =>{
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    return (
      <div>

        <Swiper>
          <div>1111111</div>
          <div>2222222</div>
          <div>3333333</div>
        </Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>
        <Swiper></Swiper>

        <Navbar event = {this.handleEvent} />
        {this.state.isShow && <Sidebar/>}
        
      </div>
    )
  }
}
