import React from 'react';
import './dashboard.css';
import history from "../../history";

class ShopCard extends React.Component {
   render() {
      return (
         <div onClick={() => {
            history.push('/shop');
         }}>
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
      this.state = {shopList: null};
   }

   componentDidMount() {
      fetch('http://dubhacks2020-ecommerce.westus.cloudapp.azure.com:9000/shops', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }
      })
      .then(res => res.json())
      .then(json => this.setState({shopList: json}))
      .catch(e => console.log(e)); 
   }


   render() {
      return (
         <div className="dashboardContainer">
            <div className="storeItem" id="Welcome">
               Welcome to Your Dashboard!
            </div>
            <div className="storeRow">
               {this.state.shopList == null ? null : this.state.shopList.map(store => 
               <div className="store">
                  <ShopCard shopName={store.name} address={store.address} phone={store.phone} shop={store} />
               </div>
               )}
            </div>
         </div>
      );
   }

}

export default Dashboard;