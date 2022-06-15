// fish 22-05-21

// class Test {
//     constructor(){
//         this.a=1;
//     }

//     testa(){
//         console.log("fishA")
//     }


// }

// //继承
// class ChildTest extends Test {
//     testb(){
//         console.log("fishB")
//     }
// }

// var obj = new ChildTest()
// obj.testa()
// console.log(obj.a)

import React from "react";
//组件类 必须继承 React.Component
class App extends React.Component{
    render(){
        return (
            <div>
                hello react Component
                <div>

                    11111
                    <b>1</b>
                        <ul>
                            <li>111</li>
                            <li>111</li>
                            <li>111</li>
                            <li>111</li>
                            <li>111</li>
                        </ul>


                </div>
            </div>
        )
    }
}

//导出
export default App