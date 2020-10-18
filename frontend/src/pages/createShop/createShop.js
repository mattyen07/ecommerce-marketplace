import React from 'react';


class CreateShop extends React.Component {
   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const data = {
         shopName: formData.get('shopName'),
         ownerName: formData.get('ownerName'),
         email: formData.get('email'),
         address: formData.get('address'),
         phoneNumber: formData.get('phoneNumber')
      }

      console.log(data);


      this.props.history.push("/dashboard");

   }

   render() {
      return (
         <div>
            <h1>Create a shop!</h1>
            <form onSubmit={this.handleSubmit}>
               <label>Shop Name</label>
               <input id="shopName" name="shopName" type="text"/> <br/>
               <label>Name of Owner</label>
               <input id="ownerName" name="ownerName" type="text" /> <br/>
               <label>Email</label>
               <input id="email" name="email" type="text" /> <br/>
               <label>Address</label>
               <input id="address" name="address" type="text" /> <br/>
               <label>Phone Number</label>
               <input id="phoneNumber" name="phoneNumber" type="text" /> <br/>
               <input type="submit" />
               {/* Add stuff for availability and adding items */}
            </form>
         </div>
      );
   }

}

export default CreateShop;