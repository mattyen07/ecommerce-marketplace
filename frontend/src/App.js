import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import CreateShop from './pages/createShop/createShop';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateUserSession(userEmail) {
    this.setState({id: userEmail, ...this.state});
    console.log('state has been set');
  }
  

  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signup" render={(props) => (
            <Signup {...props} handleSignup={this.updateUserSession} />
          )} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/createShop" component={CreateShop} />
          <Route component={Error} />
        </Switch>
      </main>
    );
  }
}

export default App;
