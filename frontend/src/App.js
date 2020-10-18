import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import CreateShop from './pages/createShop/createShop';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import callClient from './pages/PeerServerCaller';
import receiveClient from './pages/PeerServerReceiver';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userData: null, shopList: null};
    this.updateUserSession = this.updateUserSession.bind(this);
    this.updateShopList = this.updateShopList.bind(this);
  }

  updateUserSession(data) {
    this.setState((state) => {
      return {userData: data, ...state}
    });
    console.log('state has been set');
  }

  updateShopList(data) {
    this.setState((state) => {
      return {shopList: data, ...state}
    });
    console.log('state has been set');
  }

  

  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signup" render={(props) => (
            <Signup {...props} updateUserSession={this.updateUserSession} />
          )} />
          <Route path="/dashboard" render={(props) => (
            <Dashboard {...props} updateShopList={this.updateShopList} shopList={this.state.shopList} />
          )} />
          <Route path="/createShop" component={CreateShop} />
          <Route path="/send" component={callClient}/>
          <Route path="/receive" component={receiveClient}/>
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default App;
