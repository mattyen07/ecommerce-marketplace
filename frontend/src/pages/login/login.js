import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
   render() {
      return (
         <div>
            <h1>hello</h1>
            <Link to="/signup">Sign up</Link>
         </div>
      );
   }

}

export default Login;