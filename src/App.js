import React from 'react';
import { BrowserRouter , Route, Redirect, Switch } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/main" render={() => <div>Main</div>}/>
          <Redirect path="/" to="/login"/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
