import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';


function App() {
  return (
    <main>


      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
