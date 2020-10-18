import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
   render() {
      return (
         <div>
            <h1>Welcome to our app</h1>
            <Link to="/login">Login</Link> <br/>
            <Link to="/signup">Sign up</Link>
         </div>
      );
   }

}

export default Login;