import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

class Login extends React.Component {

   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {};
   }

   handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = {
         email: formData.get('email'),
         password: formData.get('password'),
      }

      console.log(data);

      
      fetch('http://dubhacks2020-ecommerce.westus.cloudapp.azure.com:9000/authentication', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      })
      .then(res => {
         this.props.updateUserSession(data);
         console.log(res);
         res.status === 401 ? this.setState({error: "Try Again"}) : this.props.history.push("/dashboard");
         console.log(this.state.error);
      })
      .catch(e => {
         console.log(e);
      })

   }

   render() {
      return (
         <div className="login">
            <h1>Log In</h1>
            <form onSubmit={this.handleSubmit}>
               <label for="email">Email</label> <br/>
               <input id="email" name="email" type="text"/> <br/>
               <label for="password">Password</label> <br/>
               <input id="password" name="password" type="text"/> <br/>
               <input type="submit"/>
            </form>
            <h1>
               {this.state.error}
            </h1>
            <h1>Don't have an account?</h1>
            <Link to="/signup">Sign up</Link>
         </div>
      );
   }

}

export default Login;