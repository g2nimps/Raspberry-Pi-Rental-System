import React, {Component} from 'react';
// import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import logo from './NIMPS.png';
import './App.css';
// import { Button } from 'react-bootstrap';
import BasicNavbar from './Components/basic-navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {

    state = {};

    componentDidMount() {
        setInterval(this.hello, 250);
    }

    hello = () => {
        fetch('/api/home')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };

    render() {
        return (
            <div className="App">
                <BasicNavbar></BasicNavbar>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.message}</h1>
                    <h1>that is all</h1>
                </header>
                <div className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </div>
            </div>
        );
    }
}

export default Home;
