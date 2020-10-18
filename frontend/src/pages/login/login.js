import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {

   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = {
         email: formData.get('email'),
         password: formData.get('password'),
      }

      console.log(data);

      this.props.updateUserSession(data);

      fetch('', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      .catch(e => {
         console.log(e);
      })

      this.props.history.push("/dashboard");

   }

   render() {
      return (
         <div>
            <h1>Log In</h1>
            <form onSubmit={this.handleSubmit}>
               <label for="email">Email</label>
               <input id="email" name="email" type="text"/> <br/>
               <label for="password">Password</label>
               <input id="password" name="password" type="text"/> <br/>
               <input type="submit"/>
            </form>
            <h1>Don't have an account?</h1>
            <Link to="/signup">Sign up</Link>
         </div>
      );
   }

}

export default Login;