import React from 'react';

class Shop extends React.Component {
   constructor (props) {
      super(props);
      this.state = {shopName: "Andreas Shop", ownerName: "Andrea Shao", email: "andrea@hotmail.com", address: "111 Andrea St", products: ["Andrea shirt", "andrea pants"]};
      //this.getShop = this.getShop.bind(this);
   }
   /*
   getShop = async () => {
      try {
         const response = await fetch('');
         const json = await response.json();
         this.setState(state => {shopData});
      }
      catch(e) {
         console.log(e);
      }
   }
   */
   
   render() {
      return (
         <div>
            <h1>{this.state.shopName}</h1>
            <h1>{this.state.ownerName}</h1>
            <h1>{this.state.email}</h1>
            <h1>{this.state.address}</h1>
            {this.state.products.map(name => <h1>{name}</h1>)}
         </div>
      );
   }

}

export default Shop;