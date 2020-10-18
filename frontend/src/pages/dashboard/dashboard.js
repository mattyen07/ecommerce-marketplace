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
         const response = await fetch('http://dubhacks2020-ecommerce.westus.cloudapp.azure.com:9000/shops');
         const json = await response.json();
         console.log(json);
         // this.props.updateShopList(json);
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
               shopName={store.name} address={store.address} phone={store.phone} 
            />)}
         </div>
      );
   }

}

export default Dashboard;