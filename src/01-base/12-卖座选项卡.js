
//fish 220620
import React, { Component } from 'react'

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
        ]

    }
    

  render() {
    return (
      <div>

        <ul>
            {
                this.state.list.map(item =>
                    <li key={item.id}>{item.text}</li>
                )
            }
        </ul>
      </div>
    )
  }
}
