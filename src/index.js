import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './pages/LoginForm';
import Registration from './pages/Registration';
import NavigationBar from './pages/NavigationBar';
import NotFoundPage from './pages/NotFoundPage';
import Upload from './pages/Upload';

ReactDom.render( 
    <React.StrictMode>
        <Router>
            <NavigationBar/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/loginForm" component={LoginForm} />
                <Route path="/registration" component={Registration} />
                <Route path="/upload" component={Upload} />     
                <Route component={NotFoundPage} />     
            </Switch>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
);