import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';
import Registration from './Registration';
import NavigationBar from './NavigationBar';

ReactDom.render( 
    <React.StrictMode>
        <Router>
            <NavigationBar/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/loginForm" component={LoginForm} />
                <Route path="/registration" component={Registration} />     
            </Switch>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
);