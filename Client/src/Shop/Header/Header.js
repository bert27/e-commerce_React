import React, { useState, useEffect  } from 'react';
import Logo from '../ProductsImages/logoshop.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import Login from "./Components/Login";
import { Link } from 'react-router-dom';
import GetItems from "../Services/GetItems";
class Header extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
          N_Items:0,
          ProductList:0,
          data:0,
                }}
componentDidUpdate(previousProps, previousState) {
if (previousProps.NumeroCarrito !== this.props.NumeroCarrito) {
  console.log("Refrescando Header");
  console.log(this.props.NumeroCarrito);
    this.setState({
          N_Items:this.props.NumeroCarrito,
            });
}
}
ReceiveItems(data){
  console.table(data);
  this.props.UpdateNItemsCart(data.Number);

  this.setState({
      N_Items:data.Number,
      ProductList:data.ProductList,
      data:data,
      });

}

render() {
var N_Items=this.state.N_Items;


  return (
    <>
    {/*Data EndPoint*/}
    <GetItems ReceiveItems={this.ReceiveItems.bind(this)}/>

  <div className="Shop-header">
        <div>
        <a href="/Tienda">
        <img className="img-fluid" src={Logo}></img>
        </a>
        </div>


        <div className="FunctionsHeader">
                <Login/>

                <Link  className="Link" to={{pathname: "/Cart/",
                state: {
                  ProductList: this.state.ProductList,
                  data: this.state.data,
                  N_Items: this.state.N_Items,
                },

              }}>
                    <div className="Cart">
                              <div>Mi carrito</div>
                              <div> <FontAwesomeIcon icon={faShoppingCart} className="Ico"/></div>
                              <div className="NumberItems">{N_Items} </div>
                    </div>
                </Link>

        </div>

        <div class="Buscador" >
        <FontAwesomeIcon icon={faSearch} className="Lupa"/>
        <input class="Buscador_input" type="text" name="search" placeholder="Busca un producto..." autocomplete="off"/>
        </div>

   </div>
    </>
  );

}}


export default Header;
