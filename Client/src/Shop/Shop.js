import React from 'react';
import Product1 from './ProductsImages/1.png';
import Product2 from './ProductsImages/2.png';
import Product3 from './ProductsImages/3.png';
import Product from "./Components/Product";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import SCSS from './Shop.sass';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Banner1 from './Banners/Banner1';
import BannerPrincipal from './Banners/BannerPrincipal';
class App extends React.Component {

  constructor(props) {
    super(props);
        this.state = {
          N_Items:0,
          ProductList:{},
                }}
                UpdateNItemsCart(Items){
                console.table(Items);
                }
render() {
  var Items=3;
return (<>

<Banner1/>

<Header
 UpdateNItemsCart={this.UpdateNItemsCart.bind(this)}/>

<BannerPrincipal/>
<body>

<div className="Barra"></div>

  <div className="ContenedorProductos">
    <Product Name={"Roborock Xiaowa"} id={1} Image={Product1} Price={15}  Description="Robot aspirador con mapeo láser"/>
    <Product Name={"Mi Electric"} id={2} Image={Product2} Price={20} Description="Patinete eléctrico adulto"/>
    <Product Name={"Rowenta rh9151"} id={3} Image={Product3} Price={100}  Description="Aspirador escoba con motor digital"/>
    <Product Name={"Producto4"} id={4} Image={Product1} Price={15}  Description="Robot aspirador con mapeo láser"/>
    <Product Name={"Producto5"} id={5} Image={Product2} Price={60} Description="Patinete eléctrico adulto"/>
    <Product Name={"Producto6"} id={6} Image={Product3} Price={56}  Description="Aspirador escoba con motor digital"/>
    <Product Name={"Producto7"} id={7} Image={Product1} Price={78}  Description="Robot aspirador con mapeo láser"/>
    <Product Name={"Producto8"} id={8} Image={Product2} Price={208}  Description="Patinete eléctrico adulto"/>
  </div>

</body>
<Footer/>
  </>);
}
}
export default App;
