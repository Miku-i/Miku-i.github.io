import React, {Component} from 'react';


class Carousel extends Component {
    state = {
        total:0,
        current: 0,
        delay:4000
    }
    componentDidMount() {
        const{children} = this.props
        this.setState({
            total:children.length,
            delay:this.props.delay
        });
        this.change = setInterval(()=>this.changeNum(),this.state.delay);
        //开启定时
    }

    changeNum=()=>{
        let {total,current}=this.state
            this.setState({
            current:current+1 != total?current+1:0,
        })

    }


    // 点点的特效
    numBer=()=>{
        let x = this.state.total //当前有多图片
        let number = []
        for(let i=0; i<x;i++){
            number.push(
                <li key={i}
                    onClick={()=>{
                        this.setState({current:i},this.props.afterChange(this.state.current))}}>
                    <div
                        className={this.state.current===i?'dian':'nodian'}
                    >
                    </div>
                </li>
            )
        }
        return(
            <ul className={this.props.dots===true?'data':'data2'} >{number}</ul>
        )
    }
    render(){
        return(
            <div className="Banner">
                {this.numBer()}
                {this.props.children[this.state.current]}
                {this.props.afterChange(this.state.current)}
            </div>
        )
    }
}

export default Carousel;