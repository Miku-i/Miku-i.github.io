import React, {Component} from "react";
import axios from 'axios';
import {Link} from  "react-router-dom";

import img1 from "../../img/1.png"
import img2 from "../../img/2.png"
import img3 from "../../img/3.png"
import img4 from "../../img/4.png"

import img0 from "../../img/0.jpg"

import img5 from "../../img/5.png"
import img6 from "../../img/6.png"



import { AuthContext } from '../../../../../../app'

import "./detail.css"


class Details extends Component{

    state={
        title:"",
        content:"",
        xiaobian:"",
        brief_introduction:"",

        display:false,//判断是否查看评论

        commentList:[],
    }



    componentDidMount() {

        let id = this.props.match.params.id;


        axios.get('/api/article/detail')
            //记得要使⽤箭头函数
            .then((response) => {
                this.setState({
                    title:response.data.data[id].title,
                    content:response.data.data[id].content,
                    xiaobian:response.data.data[id].xiaobian,
                    brief_introduction:response.data.data[id].brief_introduction
                })
            })
            .catch((error)=>{
                console.log(error)
            });

        axios.get('/api/article/comment',{
            params: {
                page:1
            }
        }).then((res)=>{
            console.log(res.data)
            this.setState({commentList:res.data.command[id]})
        })

    }

    render() {
        return (

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


                    if (val.pay){

                        return (
                            <div id="detail">
                                <div id="detail-top">
                                    <span> &lt;</span>
                                </div>
                                <div id="detail-title">
                                    <span>{this.state.title}</span>
                                </div>
                                <div id="detail-brief-introduction">
                                    <span>{this.state.brief_introduction}</span>
                                </div>
                                <div id="detail-content">
                                    <span className="detail-content-xiaobian">[兄弟会]{this.state.xiaobian}</span>
                                    {this.state.content}
                                </div>

                                {this.state.display
                                    ?
                                    <div id="comment-detail">
                                        <div id="comment-detail-top">
                                            <span onClick={()=>{
                                                this.setState({display:false})
                                            }}> &lt;</span>
                                            <h2 className="fl">评论</h2>
                                        </div>
                                        <ul>
                                            {this.state.commentList.map((item,id) => {
                                                return(
                                                    <li key={id}>
                                                        <div className="comment-map chex">
                                                            <div className="comment-map-left fl">
                                                                <div className="comment-map-left-img">
                                                                    <img src={img0} width="50px" height="50px"/>
                                                                </div>
                                                            </div>

                                                            <div className="comment-map-reight fl">
                                                                <div className="comment-name">{this.state.commentList[id].name}</div>
                                                                <div className="comment-from">{this.state.commentList[id].from}</div>
                                                                <div className="comment-content">{this.state.commentList[id].content}</div>
                                                                <div className="comment-sup">
                                                                    <ul>
                                                                        <li><img  src={img5}/>{this.state.commentList[id].aggren}</li>
                                                                        <li><img  src={img6}/>{this.state.commentList[id].disaggren}</li>
                                                                        <li><img  src={img3}/>{this.state.commentList[id].free}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <div id="comment-input">
                                            <input type="text" placeholder="写评论"/>
                                        </div>
                                    </div>
                                    :
                                    <div id="comment">
                                        <div className="xiao-comment chex">
                                            <input className="fl" type="text" placeholder="写评论" onClick={()=>{
                                                this.setState({display:true})
                                            }}/>
                                            <ul className="fl">
                                                <li className="fl"><img src={img1} width="20px" height="30px"/></li>
                                                <li className="fl"><img src={img2} width="20px" height="30px"/></li>
                                                <li className="fl"><img src={img3} width="20px" height="30px"/></li>
                                                <li className="fl"><img src={img4} width="20px" height="30px"/></li>
                                            </ul>


                                        </div>
                                    </div>

                                }

                            </div>
                        )
                    }else {
                        return(
                            <div id="detail" className="not-subscribed">
                                <div id="detail-top">
                                    <span> &lt;</span>
                                </div>
                                <div id="detail-title">
                                    <span>{this.state.title}</span>
                                </div>
                                <div id="detail-brief-introduction">
                                    <span>{this.state.brief_introduction}</span>
                                </div>
                                <div id="detail-content">
                                    <span className="detail-content-xiaobian">[兄弟会]{this.state.xiaobian}</span>
                                    {this.state.content}
                                </div>
                                <div id="article-subscription">
                                    <div className="article-subscription-top">
                                        <span>本文共计1181字</span>
                                    </div>
                                    <div className="subscribe-content">
                                        <span className="subscribe-content-span">会员专享订阅后阅读全文</span>
                                        <button onClick={()=>{
                                            window.location.href = 'http://localhost:3000/#/article/pay';
                                        }}>去订阅</button>
                                        <ul>
                                            <li><Link to="/login">登入</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )

                    }
                }}
            </AuthContext.Consumer>

        );
    }
}

export default Details;