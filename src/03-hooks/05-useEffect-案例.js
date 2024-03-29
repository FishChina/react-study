/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component,useState,useEffect } from 'react'
import axios from 'axios'
export default class App extends Component {
    state = {
        type:1
    }
    // onclick 传type判断是type 1 正在热映 还是 2 即将上映
    render() {
        return (
            <div>
                <ul>
                    <li onClick={()=>{
                        this.setState({
                            type:1
                        })
                    }}>正在热映</li>
                    <li onClick={()=>{
                        this.setState({
                            type:2
                        })
                    }}>即将上映</li>
                </ul>

                <FilmList type={this.state.type}></FilmList>
            </div>
        )
    }
}

function FilmList (props) {


    const [list,setList] = useState([])

    useEffect(() => {

        if(props.type===1){
            //请求卖座正在热映的数据
            console.log("请求卖座正在热映的数据")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films)
                setList(res.data.data.films)
            })
        }else{
            //请求卖座即将上映的数据

            console.log("请求卖座即将上映的数据")

            axios({
                url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{
                console.log(res.data.data.films)
                setList(res.data.data.films)

            })
        }

    }, [props.type])
    

    return <ul>
    {
        list.map(item=>
        <li key={item.filmId}>{item.name}</li>    
        )
    }
    </ul>

}

