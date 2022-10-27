//fish 220829


import React, { Component,useState,useEffect,useMemo } from 'react'
import axios from 'axios'

function useCinemaList () {
  const [cinemaList, setcinemaList] = useState([])

  useEffect(() => {

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
          setcinemaList(res.data.data.cinemas)
        })

  }, [])

  return {
    cinemaList
  }
}

function useFilter (cinemaList,mytext) {

      const getCinemaList = useMemo(() => cinemaList.filter(item=>
        item.name.toUpperCase().includes(mytext.toUpperCase()) ||
        item.address.toUpperCase().includes(mytext.toUpperCase())
    ), [cinemaList,mytext])

    return {
      getCinemaList
    }
}

export default function Cinema () {
    const [mytext, setmytext] = useState("")

    const {cinemaList} = useCinemaList()

    const {getCinemaList} = useFilter(cinemaList,mytext)

    return (
        <div>
  
          <input value={mytext} 
          onChange = {(evt) => {
            setmytext(evt.target.value)
          }
          }
          />
            {
              getCinemaList.map(item=>
              <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
              )
            }
  
        </div>
      )

}

// export default class Cinema extends Component {

//     constructor(){
//         super()

//         //axios 第三方库专门请求请求数据
//         // axios.get("https://api.nike.com/deliver/available_gtins/v3?filter=styleColor(DD0490-100)&filter=merchGroup(CN)")
//         // .then(res=>{})
//         // .catch(err=>{console.log(err)})

//         //在这里创建需要设置状态的变量
//         this.state = {
//           cinemaList: [],
//           backUpCinemaList: [],
//           mytext: ""
//         }

//         axios(
//           {
//             url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3125025",
//             method:"get",
//             headers:{
//               'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16558762191786740754874369"}',
//               'X-Host': 'mall.film-ticket.cinema.list'
//             }
//           }
//         ).then(res=>{
//           console.log(res.data.data.cinemas)

//           this.setState({
//             cinemaList:res.data.data.cinemas,
//             backUpCinemaList:res.data.data.cinemas
//           })
//         })
//     }

//   //生命周期更适合发ajax
//   render() {
//     return (
//       <div>

//         <input value={this.state.mytext} 
//         onChange = {(evt) => {
//             this.setState({
//                 mytext:evt.target.value
//             })
//         }
//         }
//         />
//           {
//             this.getCinemaList().map(item=>
//             <dl key={item.cinemaId}>
//               <dt>{item.name}</dt>
//               <dd>{item.address}</dd>
//             </dl>
//             )
//           }

//       </div>
//     )
//   }

//   getCinemaList(){
//     return this.state.cinemaList.filter(item=>
//         item.name.toUpperCase().includes(this.state.mytext.toUpperCase()) ||
//         item.address.toUpperCase().includes(this.state.mytext.toUpperCase())
//     )
//   }

//   handleInput = (event) =>{
//     console.log("input",event.target.value)

//     var newList = this.state.backUpCinemaList.filter(item=>
//       item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
//       item.address.toUpperCase().includes(event.target.value.toUpperCase())
    
//     )

//     console.log(newList)

//     this.setState({
//       cinemaList:newList
//     })
//     //cinema list 每次都会重新覆盖
//   }
// }
