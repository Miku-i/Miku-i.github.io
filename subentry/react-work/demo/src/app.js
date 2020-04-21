import React,{Component}from "react";
import {HashRouter, Switch, Route} from "react-router-dom"
import axios from 'axios';

import Home from "./components/home/index"
import Register from "./components/register/"
import Personal from "./components/personal/index"
import Login from "./components/login/index"

import Details from "./components/home/components/article/components/details";
import Pay from "./components/home/components/article/components/pay";


import './mock/article';

export const AuthContext = React.createContext({
    data: {},
    setData:()=>{

    },
    setPay:()=>{

    },
    getData:()=>{

    }
})

class App extends React.Component {

    constructor(props) {
        super(props);
        this.setData = (obj) => {
            this.setState({ data: obj })
        }

        this.setPay=()=>{
            axios.get('/api/user/profile/pay')
                .then((res) => {
                    console.log(res)
                    this.setState({
                        pay:res.data.pay,
                    })
                    window.location.href = 'http://localhost:3000/#/';
                })
        }

        this.getData=()=>{
            let nickname = localStorage.getItem('nickname')
            if (nickname) {
                axios.get('/api/user/profile')
                    .then((res) => {
                        console.log(res.data.data)
                        this.state.setData(res.data.data)
                    })
            }
        }
        this.state = {
            data: {
                mobile: '',
                nickname: "",
                flat:false, // 判断当前是否登入
            },

            pay:false,  //判断是否订阅
            setData:this.setData,
            setPay:this.setPay,
            getData:this.getData

        }

    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/register" component={Register}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/personal" component={Personal}></Route>
                        <Route path="/article/details/:id" component={Details}></Route>
                        <Route path="/article/pay" component={Pay}></Route>


                    </Switch>
                </HashRouter>
            </AuthContext.Provider>

        )
    }
}

export default App