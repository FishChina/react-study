//fish 220719
import React, { Component } from 'react'
import Swiper,{Navigation, Pagination} from 'swiper'
import  "swiper/swiper-bundle.min.css"
Swiper.use([Navigation,Pagination])

export default class Kswiper extends Component {
    componentDidMount() {
        new Swiper(".swiper",{
          // 如果需要分页器
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

              {this.props.children}
                  
            </div>

            <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
