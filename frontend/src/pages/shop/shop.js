import React from 'react';
import './shop.css'

class Shop extends React.Component {
   constructor (props) {
      super(props);
      this.state = {shopName: "Andreas Shop", ownerName: "Andrea Shao", email: "andrea@hotmail.com", address: "111 Andrea St", products: ["Andrea shirt", "andrea pants"]};
   }

   
   render() {
      return (
         <div className="storeContainer">
            <div className="item">
               <img src={require("./Background3.jpg")}></img>
            </div>
            <div className="item">
               <h1>{this.state.shopName}</h1>
               <h1>{this.state.ownerName}</h1>
               <h1>{this.state.email}</h1>
               <h1>{this.state.address}</h1>
               {this.state.products.map(name => <h1>{name}</h1>)}
            </div>
         </div>
      );
   }

}

export default Shop;