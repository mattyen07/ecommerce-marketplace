import React from 'react';
import './dashboard.css'


class Shop extends React.Component {
   render() {
      return (
         <div onClick={() => {
            //Need to make this go to the specific shop
            this.props.history.push('/Shop');
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
               {/* <div className="store">store1</div>
               <div className="store">store2</div>
               <div className="store">store3</div> */}
               {this.state.shopList == null ? null : this.state.shopList.map(store => 
               <div className="store">
                  <Shop 
                     shopName={store.name} address={store.address} phone={store.phone} 
                  />
               </div>
               )}
            </div>
         </div>
      );
   }

}

export default Dashboard;