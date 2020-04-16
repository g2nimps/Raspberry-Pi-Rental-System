import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './App';
import Login from './Login';
import Register from './Register';
import Equipment from './Equipment';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Application />
                </Route>

                <Route path="/equipment" exact>
                    <Equipment />
                </Route>

                <Route path="/login" exact>
                    <Login/>
                </Route>
                
                <Route path="/register" exact>
                    <Register />
                </Route>
            </Switch>
        </div>
    );
}

ReactDOM.render(
    <Router>
            <App />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
