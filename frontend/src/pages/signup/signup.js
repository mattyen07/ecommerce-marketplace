import React from 'react';
import './signup.css'

class Signup extends React.Component {

   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = {
         name: formData.get('name'),
         email: formData.get('email'),
         password: formData.get('password')
      }

      console.log(data);

      fetch('http://dubhacks2020-ecommerce.westus.cloudapp.azure.com:9000/create_user', {
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


      if(formData.get('create')) {
         this.props.history.push("/createShop");
      }
      else {
         this.props.history.push("/dashboard");
      }
   }

   render() {
      return (
         <div className="signup">
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
               <label for="name">Name</label>
               <input id="name" name="name" type="text"/> <br/>
               <label for="email">Email</label>
               <input id="email" name="email" type="text"/> <br/>
               <label for="password">Password</label>
               <input id="password" name="password" type="text"/> <br/>
               <label >Do you want to create a shop?</label> <br/>
               <select id="create" name="create">
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
               </select>
               <input type="submit"/>
            </form>
         </div>
      );
   }
}

export default Signup;