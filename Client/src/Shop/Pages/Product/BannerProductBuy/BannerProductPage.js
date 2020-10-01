import React from "react";
import Popup from "reactjs-popup";
import CssB from "./BannerProductPage.sass"
import { Link } from 'react-router-dom';
//import PoliticaCookies from '../PoliticaCookies/PoliticaCookies';
class BannerProductPage extends React.Component {constructor(props) {
  super(props);
  this.state = {
     };
  this.CloseFunction = this.CloseFunction.bind(this);
  this.BuyFuction = this.BuyFuction.bind(this);
}


      CloseFunction() {
          //console.log("Cerrando PopUp");
          this.props.ClosePopUp();
      }

      BuyFuction() {
          //console.log("Comprando");
            this.props.ClosePopUp();
      }


render() {
  return (
    <div className="BannerP">

<div className="PopUp_addProduct">

  <a className="close2" onClick={this.CloseFunction}>&times;</a>
  <div className="ContenidoBannerP">

          <div className="TextoAddProduct">
          Producto añadido correctamente.
          </div>

          <div className="Ficha">

                <div className="FlexAdd">
                    <img className="ImgCoo" src={this.props.Image}/>
                </div>

                <div className="DescriptionAdd">
                      <div>{this.props.Nombre}</div>
                      <div><b>Productos en el carrito:</b> {this.props.Total}</div>
                      <div><b>Total Del carrito: </b>{this.props.Precio} €</div>
                </div>

          </div>

          <div className="Buy">
<div className="LogoCarrito" onClick={this.CloseFunction}>
Continuar Comprando
          {/* <a href="/Tienda" className="LogoCarrito">Continuar Comprando</a>*/}
</div>

<button className="Button"
onClick={this.BuyFuction}>




<Link to={{pathname: "/Cart/",
state: {
ProductList:this.props.List,
data: this.props.data,

},

}}>
  Comprar
</Link>


</button>

          </div>



  </div>

      </div>

    </div>
  );
}
}

export default BannerProductPage;
