import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const Home = lazy(() => import('./App'))
// const Login = lazy(() => import('./Login'))
function App(){
    return (
        <div>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>

                <Route path="/login" exact component={Login}>
                    {/* <Login/> */}
                    <h1>hello</h1>
                </Route>
            </Switch>
        </div>

        // <Switch>
        //     <Route path="/login" component={Login}>
        //         <h1>hello</h1>
        //     </Route>
        // </Switch>
    );
}

ReactDOM.render(
    <Router>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
            <App />
        {/* </Suspense> */}
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
