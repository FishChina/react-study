import React, { Component } from "react"
import Films from "./views/films"
import Cinemas from  "./views/cinemas"
import Center from "./views/center";
import MRouter from "./router/IndexRouter"
export default class App extends Component {
    render() {
        return (

            //others
            <MRouter></MRouter>
        )

        
    }
}
//定义路由以及重定向

//注意: a.
//b. exact 精确匹配 (Redirect 即使使用了exact, 外面还要嵌套Switch 来用)
//c. Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack,这个警告只有在hash 模式会出现。
//(3) 嵌套路由
{/* <Switch>
    <Route path="/films/nowplaying" component={Nowplaying}/>
    <Route path="/films/comingsoon" component={Comingsoon}/>
    <Redirect from="/films" to="/films/nowplaying"/>
</Switch> */}
////一个针对React而设计的路由解决方案、可以友好的帮你解决React components 到URl之间的同步映射关系
//千锋大前端
//}