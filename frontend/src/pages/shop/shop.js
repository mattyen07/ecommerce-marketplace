import React from 'react';

class Shop extends React.Component {
   constructor (props) {
      super(props);
      this.state = {shopeName: "", ownerName: "", email: "", address: "", products: []};
      this.getShop = this.getShop.bind(this);
   }

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


   render() {
      return (
         <div>

         </div>
      );
   }

}

export default Shop;