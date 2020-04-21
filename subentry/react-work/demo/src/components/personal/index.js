import React,{Component}from "react";
import "./personal.css"
import { AuthContext } from '../../app'
import axios from 'axios'



class Personal extends Component{
    render() {
        return (
            <AuthContext.Consumer>
                {(val)=>{
                    console.log(val)
                    let token = localStorage.getItem('token')
                    axios.get('http://jizhang-api-dev.it266.com/api/user/profile?token=' + token)
                        .then((res) => {
                            val.setData(res.data.data)
                        })
                    return(
                        <div id="personal">
                            <h2>个人信息</h2>
                            <div className="information-conten">
                                <div className="information-box">
                                    <span className="fl">头像</span>

                                    <img src={val.data.avatar_url} alt=""/>

                                </div>
                                <div className="information-box">
                                    <span>昵称</span>
                                    <span className="right-jian"> &gt;</span>
                                    <span className="information-details">{val.data.nickname}</span>
                                </div>
                                <div className="information-box">
                                    <span>性别</span>
                                    <span className="right-jian"> &gt;</span>
                                </div>
                                <div className="information-box">
                                    <span>地区</span>
                                    <span className="right-jian"> &gt;</span>
                                </div>
                                <div className="information-box chex">
                                    <span className="fl">个人简介</span>
                                    <span className="right-jian"> &gt;</span>
                                </div>
                            </div>

                        </div>
                    )
                }}
            </AuthContext.Consumer>

        )
    }

}


export default Personal;