//fish 220719
import React, { Component } from 'react'
import Swiper,{Navigation, Pagination} from 'swiper'
import  "swiper/css/bundle"
Swiper.use([Navigation,Pagination])

export default class App extends Component {

    state = {
        list:["111","222","333"]
    }

    componentDidMount() {
        new Swiper(".swiper")
    }

  render() {
    return (
      <div>

        <div className="swiper">
            <div className="swiper-wrapper">

                {
                    this.state.list.map(item=>
                    <div className="swiper-slide" key={item}>
                        {item}
                    </div>
                    )
                }
            </div>
        </div>
      </div>
    )
  }
}
