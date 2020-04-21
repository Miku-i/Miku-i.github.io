import React, {Component} from "react";
import "./search.css"

class Search extends React.Component {

    state={
        content:"html"
    }

    componentDidMount() {
        // setTimeout(()=>{
        //     this.setState({content:"javascript"})
        // },3000)
    }

    handleInput = (e) => {
        // console.log(e.target.value)
        this.setState({content:e.target.value})

    }

    render() {
        return(
            <div id="top" className="chex">
                <input value={this.state.content}
                       type="text"
                       className="top_search"
                       placeholder="新型肺炎"
                       onChange={this.handleInput}
                       onKeyPress={ (e)=>{
                            console.log(e.charCode)
                           if(e.charCode==13){
                               console.log("搜索内容: "+this.state.content)
                           }
                       }}
                ></input>
                <div className="top_right iconfont">&#xf0149;</div>
            </div>
        )
    }



}
export  default Search;