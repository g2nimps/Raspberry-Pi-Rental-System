//import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
//
//class App extends Component{
//
//}
////function App() {
////  return (
////    <div className="App">
////      <header className="App-header">
////        <h1>Raspberry Pi Check In Checkout System</h1>
////        <h1>Hello World</h1>
////        <img src={logo} className="App-logo" alt="logo" />
////        <p>
////          Edit <code>src/App.js</code> and save to reload.
////        </p>
////        <a
////          className="App-link"
////          href="https://reactjs.org"
////          target="_blank"
////          rel="noopener noreferrer"
////        >
////          Learn React
////        </a>
////      </header>
////    </div>
////  );
////}
//
//export default App;

import React, {Component, useState} from 'react';
import logo from './NIMPS.png';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {

    state = {};
    const [isAuthenticated, userHasAuthenticated] = useState(false);

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
        <Routes appProps{{ isAuthenticated, userHasAuthenticated }}/>
            <div className="App">
                <header className="App-header">
                    <Button variant="primary">Login</Button>{' '}
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

export default App;
