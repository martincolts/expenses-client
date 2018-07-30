import React , { Component } from 'react';
import Login from './Login/Login';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
export default class MainApp extends Component {
    render(){
        return (
            <div>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
            </div>
        )
    }
}