/*
22.05.21
*/

//console.log("hello world")

//从react的包当中引入了 React 。 只要你要写 React.js 组件就必须引入React ，因为react 里有一种语法叫jsx，要写jsx就必须引入React
import React from 'react';
//ReactDOM 可以帮我们把 React组件渲染到页面上去，没有其他作用了。他是从react-dom中引入的，而不是react 引入。
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './03-hooks/08-useCallBack2';
// import App from './02-advenced/19-生命周期-销毁';

const container = document.getElementById('root');
const root = createRoot(container);
//react DOM里面有一个reader方法，功能就是把组件渲染并构造DOM树，然后插入到页面上某个特定元素上
root.render(
    //纯HTML代码写在js里，叫 JSX - JavaScript XML
    <App/>
//,
//渲染到哪里
//document.getElementById("root")
)