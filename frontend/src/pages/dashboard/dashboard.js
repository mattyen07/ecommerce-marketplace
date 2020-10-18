import React from 'react';


class Shop extends React.Component {
   render() {
      return (
         <h1>{this.props.name}</h1>
      )
   };
}

class Dashboard extends React.Component {
   constructor(props) {
      super(props);
      this.getShops = this.getShops.bind(this);
   }

   componentDidMount() {
      this.getShops();
   }

   getShops = async () => {
      try {
         const response = await fetch('');
         const json = await response.json();
         this.props.updateShopList(json);
      }
      catch(e) {
         console.log(e);
      }
   }


   render() {
      return (
         <div>
            <h1>This is the Dashboard</h1>
            {this.props.shopList == null ? null : this.props.shopList.map(store => 
            <Shop 
               shopName={shop.name} address={shop.address} phone={shop.phone} 
            />)}
         </div>
      );
   }

}

export default Dashboard;