import React from 'react';
import {Switch,BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import {LoginForm} from "./components/LoginPage/LoginForm";
import {RegisterForm} from "./components/LoginPage/RegisterForm";
import {HomePage} from "./components/Homepage/HomePage";
import {PrivateRoute} from "./components/PrivateRoute";


function App() {
  return (
     <Router>
        <div className="App">
            <Switch>
                <PrivateRoute exact component={HomePage} path='/' />
                <Route exact component={LoginForm} path='/login'/>
                <Route exact component={RegisterForm} path='/register'/>
            </Switch>
        </div>
     </Router>
  );
}

export default App;
