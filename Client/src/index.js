import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Shop:---
import Tienda from './Shop';
import Registro from './Shop/Pages/Login/Form_Login';
import Cart from './Shop/Pages/Cart/Cart';
import ProductPage from './Shop/Pages/Product/ProductPage';
import AdminPanel from "./Shop/Pages/AdminPanel/PanelAdmin";
import Admin_Product from "./Shop/Pages/AdminPanel/Products/Products";
import Admin_Clients from "./Shop/Pages/AdminPanel/Clients/Clients";
//-----

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
<Switch>

    <Route exact path='/' component={Tienda} exact />
    {/* REACT SHOP:*/}
       <Route path='/Admin/Productos' component={Admin_Product} />
       <Route path='/Admin/Clientes' component={Admin_Clients} />
   <Route path='/Admin' component={AdminPanel} />
   <Route path='/Tienda' component={Tienda} />
   <Route path='/Registro' component={Registro} />
   <Route path='/Cart' component={Cart} />

  <Route path='/Product/:productid' component={ProductPage}/>

    {/*------------------------------------------------------*/}

</Switch>
        </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
