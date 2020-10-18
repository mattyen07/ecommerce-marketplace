import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import CreateShop from './pages/createShop/createShop';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Shop from './pages/shop/shop';


class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Signup}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/createShop" component={CreateShop} />
          <Route path="/shop" component={Shop} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default App;
