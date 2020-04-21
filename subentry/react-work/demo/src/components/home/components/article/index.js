import React, {Component} from "react";
import axios from 'axios';
import {Link} from  "react-router-dom";
import img1 from "../imgs/7.jpg"
import "./article.css"









class Article extends  Component{
    // 组件的状态
    state = {
        articles:[],
    }



    componentDidMount() {

        axios.get('/api/article')
            //记得要使⽤箭头函数
            .then((response) => {
                console.log(response)
                this.setState({articles: response.data.data})
            })
            .catch((error)=>{
                console.log(error)
            });

    }

    render() {


        return(
            <div>
                {
                    this.state.articles.map( (item,index) =>{
                        return(
                            <div id="article" key={index}>

                                <Link to={`/article/details/${index}`}>
                                    <div className="article_left fl chex">
                                        <div className="article_left_box2">
                                            {item.title}
                                        </div>
                                    </div>
                                </Link>


                                <div className="article_righ">
                                    <img src={img1} width="100%" alt=""/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Article;