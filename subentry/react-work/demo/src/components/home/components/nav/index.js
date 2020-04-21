import React, {Component} from "react";
import "./nav.css"

class Nav extends Component{

    state = {
        // 当前被选中的项
        activIndex:0,
    }

    handleClick(index){
        this.setState({activIndex:index})


    }

    render() {

        // let activIndex = 0

        let categoryList=['首页', '推荐', '限免', '金融', '公司', '宏观']

        let navData = categoryList.map( (item,index)=>{
            return <li
                key={index}
                className={this.state.activIndex === index ? "page" :''}
                onClick={()=>{
                    this.handleClick(index)
                }}
            >{item}</li>
        })

        return (
            <div id="nav" className="chex">
                <div className="nav_left chex fl">
                    <ul className="chex fl">
                        {navData}
                    </ul>
                </div>
                <div className="nav_right">
                    +
                </div>
            </div>
        );

    }


}

export default Nav;