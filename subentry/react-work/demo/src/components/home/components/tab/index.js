import React,{Component}from "react";
import {render} from "react-dom";
import "./tab.css"
import {Link} from "react-router-dom";
import axios from 'axios';

import {AuthContext} from "../../../../app";
class Tab extends React.Component {
    render() {
        return(
            <AuthContext.Consumer>
                {(val)=>{
                    // console.log(val)
                    let nickname = localStorage.getItem('nickname')
                    if (nickname) {
                        axios.get('/api/user/profile')
                            .then((res) => {
                                val.setData(res.data.data)
                            })
                    }
                    return(
                        <div id="tabbar" className="chex">
                            <div className="tabbar_box fl">
                                <a href="">
                                    <div className="tabbar_box_top iconfont">&#xe64e;</div>
                                    <div className="tabbar_box_but">要闻</div>
                                </a>

                            </div>
                            <div className="tabbar_box fl">
                                <a href="">
                                    <div className="tabbar_box_top iconfont">&#xe734;</div>
                                    <div className="tabbar_box_but">周刊</div>
                                </a>

                            </div>
                            <div className="tabbar_box fl">
                                <a href="">
                                    <div className="tabbar_box_top iconfont">&#xe631;</div>
                                    <div className="tabbar_box_but">特供</div>
                                </a>

                            </div>
                            <div className="tabbar_box fl">
                                <a href="">
                                    <div className="tabbar_box_top iconfont">&#xe6bc;</div>
                                    <div className="tabbar_box_but">数据通</div>
                                </a>

                            </div>
                            <div className="tabbar_box fl">
                                <div onClick={()=>{
                                    val.data.flat?window.location.href = 'http://localhost:3000/#/personal':window.location.href = 'http://localhost:3000/#/login';
                                }}>
                                    <div className="tabbar_box_top iconfont">&#xe601;</div>
                                    <div className="tabbar_box_but">我的</div>
                                </div>

                            </div>

                        </div>
                    )

                }}
            </AuthContext.Consumer>

        )
    }



}

export default Tab;