//fish 220623


import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {

    constructor(){
        super()

        //axios 第三方库专门请求请求数据
        // axios.get("https://api.nike.com/deliver/available_gtins/v3?filter=styleColor(DD0490-100)&filter=merchGroup(CN)")
        // .then(res=>{})
        // .catch(err=>{console.log(err)})

        this.state = {
          cinemaList: [],
          backUpCinemaList: []  
        }

        axios(
          {
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3125025",
            method:"get",
            headers:{
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16558762191786740754874369"}',
              'X-Host': 'mall.film-ticket.cinema.list'
            }
          }
        ).then(res=>{
          console.log(res.data.data.cinemas)

          this.setState({
            cinemaList:res.data.data.cinemas,
            backUpCinemaList:res.data.data.cinemas
            },()=>{
            new BetterScroll(".fishwrapper")
           })

        })
    }

    //生命周期更适合发ajax
  render() {
    return (
      <div>

        <input onInput={this.handleInput}/>
        <div className="fishwrapper" style={{height:'500px',background:'yellow',overflow:'hidden'}}>
            <div className="fishcontent">
                {
                    this.state.cinemaList.map(item=>
                    <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                    </dl>
                    )
                }
            </div>
        </div>

      </div>
    )
  }

  handleInput = (event) =>{
    console.log("input",event.target.value)

    var newList = this.state.backUpCinemaList.filter(item=>
      item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
      item.address.toUpperCase().includes(event.target.value.toUpperCase())
    
    )

    console.log(newList)

    this.setState({
      cinemaList:newList
    })
    //cinema list 每次都会重新覆盖
  }
}
