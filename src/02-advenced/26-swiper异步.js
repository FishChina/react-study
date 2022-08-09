//fish 220722
import React, { Component } from 'react'
import Swiper,{Navigation, Pagination} from 'swiper'
import  "swiper/css/bundle"
Swiper.use([Navigation,Pagination])

export default class App extends Component {

    state = {
        list:[]
    }

    //一般用在进入页面后，数据初始化
    componentDidMount() {

        setTimeout(()=>{
            this.setState({
                list:['aaa','bbb','ccc']
            })

        },1000)


    }
//DOM 更新完毕
    componentDidUpdate() {


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

                {
                    this.state.list.map(item=>
                    <div className="swiper-slide" key={item}>
                        {item}
                    </div>
                    )
                }
            </div>

            <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
