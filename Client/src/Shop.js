import React from 'react';
import Shop from "./Shop/Shop"
import Coockies from "./Shop/Components/BannerCookies/Banner"
class ShopApp extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}

    render() {
return (<>
<Coockies/>
<Shop/>

  </>);
    }
            }

export default ShopApp;
