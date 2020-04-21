import React,{Component}from "react";
import axios from 'axios';
import qs from "qs"
import "./login.css"
import {render} from "react-dom";
import {Link} from "react-router-dom";
import {AuthContext} from "../../app";
import {isElementOfType} from "react-dom/test-utils";

class Login extends Component {
    state={
        mobile:"", // 手机号
        password:"",//密码

        display1:true,
        nickname:''
    }

    login = ()=>{

        if(this.state.mobile.match(/^1\d{10}/)){
            axios.get("/api/user/token/mobile")
                .then((item)=>{
                    console.log(item)
                    window.localStorage.setItem("nickname",item.data.data.nickname)
                        if(item.data.status){
                            window.location.href = 'http://localhost:3000/#/';
                            return true
                        }
                    }
                )
        }else {
            this.setState({display1:false})
        }

    }
    render() {
        return(
            <AuthContext.Consumer>
                {(val)=>{
                    console.log(val)
                    return(
                        <div>
                            <div id="top"><h4>登入</h4></div>
                            <div id="please_register">
                                <span id="wen">为了更好的体验,请登入</span>
                            </div>
                            <div id="content">
                                <div>
                                    <div className="content-top">
                                        <span>手机号归属地</span>
                                        <span className="rg">中国</span>
                                    </div>

                                    <div className="content-inp">
                                        +86
                                        <input
                                            type="text"
                                            value={this.state.mobile}
                                            onChange={(e)=>{
                                                this.setState({mobile:e.target.value})
                                            }}
                                            placeholder="输入手机号"/>
                                    </div>
                                    {this.state.display1?""
                                        :<span className="tips">请输入正确的手机号</span>}
                                    <div className="content-inp">
                                        <input
                                            type="text"
                                            value={this.state.password}
                                            onChange={(e)=>{
                                                this.setState({password:e.target.value})
                                            }}
                                            placeholder="请输入密码"/>
                                    </div>
                                </div>
                                <button className="login" onClick={()=>{
                                    this.login()
                                    console.log(6666)


                                }
                                }>登入</button>
                            </div>
                            <div id="login"
                            ><li><Link to="/">去登入</Link></li></div>

                        </div>
                    )
                }}
            </AuthContext.Consumer>

        )
    }

}

export default Login;