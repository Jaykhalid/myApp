import React from 'react';
import './App.css';
import Home from './pages'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInPage from './pages/signIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signIn' component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
