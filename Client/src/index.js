import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Shop:---
import Tienda from './Shop';
import Registro from './Shop/Pages/Login/Form_Login';
import Cart from './Shop/Pages/Cart/Cart';
import ProductPage from './Shop/Pages/Product/ProductPage';
//-----

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
<Switch>

    <Route exact path='/' component={Tienda} exact />
    {/* REACT SHOP:*/}
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
