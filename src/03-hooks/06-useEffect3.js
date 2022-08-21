import React, { Component, useEffect} from 'react'

export default class App extends Component {
    state = {
        isCreated:true
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        isCreated:!this.state.isCreated
                    })
                }}>click</button>
                {/* 如果是true显示child */}
                {/* {this.state.isCreated?<Child/>:""} */}
                {this.state.isCreated && <Child/>}
            </div>
        )
    }
}

function Child () {

     useEffect(() => {

        window.onresize = ()=>{
            console.log("resize")
        }

        var timer = setInterval(()=>{
            console.log("111")
        },1000)

        return () => {
            console.log('组件销毁')

            window.onresize = null
            clearInterval(timer)
        }

     }, [])

}

// class Child extends Component{
    

//     //render 
//     render(){
//         return <div>
//             child
//         </div>
//     }

//     componentDidMount() {
//         window.onresize = ()=>{
//             console.log("resize")
//         }

//         this.timer = setInterval(()=>{
//             console.log("111")
//         },1000)
//     }
    

//     componentWillUnmount(){
//         console.log("componentWillUnmount")

//         window.onresize = null

//         clearInterval(this.timer) 
//     }
// }