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
<<<<<<< HEAD
          <Route path="/" render={(props) => (
            <Shop {...props} updateUserSession={this.updateUserSession} />
          )}  exact />
          <Route path="/signup" render={(props) => (
            <Signup {...props} updateUserSession={this.updateUserSession} />
          )} />
          <Route path="/dashboard" render={(props) => (
            <Dashboard {...props} updateShopList={this.updateShopList} shopList={this.state.shopList} />
          )} />
=======
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Signup}/>
          <Route path="/dashboard" component={Dashboard}/>
>>>>>>> 6e7ce79ed0436c7c073fa08c72e9ad2f2b3ef607
          <Route path="/createShop" component={CreateShop} />
          <Route path="/shop" component={Shop} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default App;
