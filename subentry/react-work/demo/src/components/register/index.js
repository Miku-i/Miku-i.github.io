import React,{Component}from "react";
import axios from 'axios';
import qs from "qs"
import "./register.css"
import {render} from "react-dom";
import {Link} from "react-router-dom";
import {AuthContext} from "../../app";


class Register extends Component {
    state={
        mobile:"", // 手机号
        password:"",//密码


        captcha_code:"", //安全码内容
        verify:"",  //手机验证码

        display1:true,
        display2:true,
        captcha_key:"",
        imgurl:"", //验证码图片


        time:"60"
    }

    // 验证手机号获取安全码
    verification = ()=>{
        if(this.state.mobile.match(/^1\d{10}/)){
            axios.get('http://jizhang-api-dev.it266.com/api/captcha')
                //记得要使⽤箭头函数
                .then((response) => {
                    console.log(response)
                    this.setState({
                        captcha_key: response.data.data.key,
                        imgurl:response.data.data.url
                    })
                })
                .catch((error)=>{
                    console.log(error)
                });
        }else {
            this.setState({display1:false})
        }

    }

    // 验证安全码获取手机验证码
    sendout = ()=>{
        console.log(this.state.captcha_key)
        axios({
            method:"Post",
            url:"http://jizhang-api-dev.it266.com/api/sms/verify",
            data:qs.stringify({
                "mobile" :this.state.mobile,
                "captcha_key": this.state.captcha_key,
                "captcha_code":this.state.captcha_code
            })
        }).then((item)=>{
            console.log(item.data)
            if(item.data.status){
                this.setState({
                    imgurl:"",
                    captcha_key:'',
                    display2:false,
                    time:60
                })
                this.chang = setInterval(this.changeNum,1000);
            }
        })
    }

    changeNum=()=>{
        let {time,display2}=this.state
        if (time === 0) {
            this.setState({ display2:true })
            return;
        }
        if (!display2) {
            this.setState({ time: time - 1 })
        }

    }

    // 进行注册验证
    register = ()=>{
        if(this.state.mobile.match(/^1\d{10}/)){
            axios({
                method:"Post",
                url:"http://jizhang-api-dev.it266.com/api/user/register",
                data:qs.stringify({
                    "mobile" :this.state.mobile,
                    "verify": this.state.verify,
                    "password":this.state.password
                })
            }).then((item)=>{
                console.log(item.data)
                if(item.data.data.token){
                    window.localStorage.setItem('token', item.data.data.token);
                    window.localStorage.setItem('id', item.data.data.id);
                    window.location.href = 'http://localhost:3000/#/personal';
                }
            })
        }else {
            this.setState({display1:false})
        }


    }


    render() {
        return (
            <AuthContext.Consumer>
                {(val)=>{
                    console.log(val)
                    return(
                        <div>
                            <div id="top"><h4>完善手机号</h4></div>
                            <div id="please_register">
                                <span id="wen">为了更好的体验,请你立即完善手机号</span>
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
                                            value={this.state.verify}
                                            onChange={(e)=>{
                                                this.setState({verify:e.target.value})
                                            }}
                                            placeholder="输入验证码"/>
                                        {
                                            this.state.display2?
                                                <button
                                                    className="content-verificationCode"
                                                    onClick={
                                                        this.verification
                                                    }
                                                >获取验证码</button>:<div className="content-verificationCode">{this.state.time}</div>
                                        }
                                    </div>
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
                                <button className="login" onClick={this.register}>注册</button>
                                {this.state.imgurl?
                                    <div id="security">
                                        <div className="security-top">安全验证</div>
                                        <div className="security-content">
                                            <div className="security-img chex">
                                                <img src={this.state.imgurl} alt=""/>
                                                <div
                                                    className="exchange fl"

                                                    onClick={this.verification}
                                                ><span>换一换</span></div>
                                            </div>
                                            <div className="content-inp">
                                                <input
                                                    type="text"
                                                    value={this.state.captcha_code}
                                                    onChange={(e)=>{
                                                        this.setState({captcha_code:e.target.value})
                                                    }}
                                                    placeholder="请输入验证码"/>
                                            </div>
                                            <button className="login" onClick={this.sendout}>提交</button>
                                        </div>
                                    </div>

                                    :' '}
                            </div>
                            <div id="login"
                            ><li><Link to="/login">去登入</Link></li></div>

                        </div>
                    )
                }}
            </AuthContext.Consumer>

        )
    }
}


export default Register;
