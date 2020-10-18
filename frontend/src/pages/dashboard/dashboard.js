import React from 'react';
import './dashboard.css'


class Shop extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.shopName}</h1>
            <h1>{this.props.address}</h1>
            <h1>{this.props.phone}</h1>
         </div>
      );
   }
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
         <div className="dashboardContainer">
            <div className="storeItem" id="Welcome">
               Welcome to Your Dashboard!
            </div>
            {this.props.shopList == null ? null : this.props.shopList.map(store => 
            <Shop 
               shopName={store.name} address={store.address} phone={store.phone} 
            />)}
            <div className="storeRow">
               <div className="store">store1</div>
               <div className="store">store2</div>
               <div className="store">store3</div>
            </div>
         </div>
      );
   }

}

export default Dashboard;