import React,{Component}from "react";
import {render} from "react-dom";

// // 搜索组件
import Search from "./components/search/index"

// //  分类
import Nav from "./components/nav/index"
// //
// //  幻灯片
import Banner from "./components/banner/banner.js"

// 文章
import Article from "./components/article/index"

import Tab from "./components/tab/index"

import "./index.css"
import "./iconfont/iconfont.css"


class Home extends React.Component {


    render() {
        return (
            <div>
                <Search></Search>
                <Nav></Nav>
                <Banner></Banner>
                <Article></Article>
                <Tab></Tab>
            </div>
        )
    }
}

export default Home;