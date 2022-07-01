//fish 220701
import React, { Component } from 'react'

export default class Tabbar extends Component {
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
    
      handleClick(index){
        console.log(index)
        this.setState(
            {
                current:index
            }
        )

        this.props.myevent(index)
        //通知父组件该修改父组件的状态了
      }

    //   which(){
    //     switch (this.state.current){
    //         case 0 : 
    //             return <Film></Film>
    //         case 1 :
    //             return <Cinema></Cinema> 
    //         case 2 :
    //             return <Center></Center>
    
    //         default :
    //             return null
    //     }
    //   }  
    
      render() {
        return (
          <div>
            
            <ul>
                {
                    this.state.list.map((item,index) =>
                        <li key={item.id} className={this.state.current === index ? 'active':''} onClick={()=>this.handleClick(index)}>
                            {item.text}
                        </li>
                    )
                }
            </ul>
          </div>
        )
      }
}
