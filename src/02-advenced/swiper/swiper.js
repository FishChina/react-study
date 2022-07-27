//fish 220719
import React, { Component } from 'react'
import Swiper,{Navigation, Pagination} from 'swiper'
import  "swiper/css/bundle"
Swiper.use([Navigation,Pagination])

export default class Kswiper extends Component {
    componentDidMount() {
        new Swiper(".swiper",{
          pagination: {
            el: '.swiper-pagination',
          }
        })
    }

  render() {
    return (
      <div>

        <div className="swiper" style={{height:"200px", background:"grey"}}>
            <div className="swiper-wrapper">

                    <div className="swiper-slide" >1111</div>
                    <div className="swiper-slide" >2222</div>
                    <div className="swiper-slide" >3333</div>
                  
            </div>

            <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
