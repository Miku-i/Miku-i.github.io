import React, {Component} from "react";
import {Link} from  "react-router-dom";

import "./pay.css"

import { AuthContext } from '../../../../../../app'



class Pay extends Component{
    render() {
        return(

            <AuthContext.Consumer>
                {(val)=>{
                    console.log(val)

                    return(
                        <div id="pay">
                            <div id="pay-top">
                                <span>&lt;</span>
                            </div>
                            <div id="pay-middle" className="chex">
                                <input className="fl"
                                       type="radio" name="frult" value="" id="pay-radio1"/>
                                <span className="fl">包年</span>
                                <span className="rg">￥498</span>
                            </div>
                            <div id="pay-bottom">
                                <div className="pay-bottom-top">
                                    <span>实付:</span>
                                    <span className="price">￥498</span>
                                </div>
                                <div className="pay-bottom-bottom">
                                    {val.data.flat
                                        ?<button
                                            className="pay-bottom-bottom-button"
                                            onClick={()=>{
                                                val.setPay()
                                            }}
                                        >
                                            立即订阅
                                        </button>
                                        :<button
                                            className="pay-bottom-bottom-button"
                                            onClick={()=>{
                                                window.location.href = 'http://localhost:3000/#/login';
                                            }}
                                        >
                                            登入订阅
                                        </button>


                                    }

                                </div>
                            </div>
                        </div>
                    )
                }}
            </AuthContext.Consumer>

        )
    }
}

export default Pay;