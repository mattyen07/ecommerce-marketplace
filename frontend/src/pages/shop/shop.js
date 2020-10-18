import React from 'react';
import './shop.css'

class Shop extends React.Component {
   constructor (props) {
      super(props);
      this.state = {shopName: "Andrea's Candy Shop", ownerName: "Andrea Shao", email: "andrea@hotmail.com", address: "1392 Candy St", products: ["Twizzlers", "Jelly Beans"]};
   }

   
   render() {
      return (
         <div className="storeContainer">
            <div className="item">
               <img src={require("./CandyStore.jpg")} alt = "" className="item" id="shopImage"></img>
            </div>
            <div className="item">
               <h1>{this.state.shopName}</h1>
               <h1>{this.state.ownerName}</h1>
               <h1>{this.state.email}</h1>
               <h1>{this.state.address}</h1>
               <a target = "_blank" href="http://dubhacks2020-ecommerce.westus.cloudapp.azure.com:9001/AndreaCandyShop">Go To Video Call</a>
            </div>
         </div>
      );
   }

}

export default Shop;