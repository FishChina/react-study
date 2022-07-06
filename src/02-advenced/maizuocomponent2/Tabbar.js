//fish 220706
import React, { Component } from 'react'

const Tabbar = (props) => {

  return 
    <div>     
      <ul>
          {
              props.list.map((item,index) =>
                  <li key={item.id} 
                  className={props.current === index ? 'active':''} 
                  onClick={()=>props.myevent(index)}>
                      {item.text}
                  </li>
              )
          }
      </ul>
    </div>
}

export default Tabbar


//class 写法
// export default class Tabbar extends Component {

//   //只靠父组件传来的属性进行操作，自己没有自己的状态。
//       handleClick(index){
//         console.log(index)

//         //通知父组件该修改父组件的状态了
//         this.props.myevent(index)

//       }

//       render() {

//         return (
//           <div>
            
//             <ul>
//                 {
//                     this.props.list.map((item,index) =>
//                         <li key={item.id} 
//                         className={this.props.current === index ? 'active':''} 
//                         onClick={()=>this.handleClick(index)}>
//                             {item.text}
//                         </li>
//                     )
//                 }
//             </ul>
//           </div>
//         )
//       }
// }
