import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './App';
import Login from './Login';
import Register from './Register';
import Equipment from './Equipment';
import Checkin from './Checkin';
import Checkout from './Checkout';
import Rental from './Rental';
import Settings from './Settings';
import AddKit from './AddKit';
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
                <Route path="/equipment-damaged" exact>
                    <Equipment />
                </Route>
                <Route path="/rental" exact>
                    <Rental />
                </Route>
                <Route path="/rental-late" exact>
                    <Rental />
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/settings" exact>
                    <Settings/>
                </Route>
                <Route path="/addkit" exact>
                    <AddKit/>
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
                <Route path="/account/:pathParam1?" exact>
                    <Register />
                </Route>
                <Route path="/checkin/:pathParam1?" exact>
                    <Checkin />
                </Route>
                <Route path="/checkout/:pathParam1?" exact>
                    <Checkout />
                </Route>
                <Route path='/message' component={() => {
                    window.location.href = 'mailto:'+localStorage.getItem('super_admin_email');
                    return null;
                }}/>

                <Route path='/support' component={() => {
                    window.location.href = 'https://gsutech.service-now.com/sp#request';
                    return null;
                }}/>
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
