import React from 'react';
import {Switch,BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import {LoginPage} from "./components/LoginPage/LoginPage";
import {HomePage} from "./components/Homepage/HomePage";
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
  return (
     <Router>
        <div className="App">
            <Switch>
                <PrivateRoute exact component={HomePage} path='/' />
                <Route exact component={LoginPage} path='/login'/>
            </Switch>
        </div>
     </Router>
  );
}

export default App;
