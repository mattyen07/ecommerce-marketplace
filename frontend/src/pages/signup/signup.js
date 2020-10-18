import React from 'react';

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
         create: formData.get('create'),
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


      if(data.create) {
         this.props.history.push("/createShop");
      }
      else {
         this.props.history.push("/dashboard");
      }
   }

   render() {
      return (
         <div>
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
               <label for="name">Name</label>
               <input id="name" name="name" type="text"/> <br/>
               <label for="email">Email</label>
               <input id="email" name="email" type="text"/> <br/>
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