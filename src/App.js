import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Component/User/HomePage'
import NotFound from './Component/Extra/NotFound';
import Signin from './Component/User/Signin.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Signin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
