import React from 'react';
import { Link } from 'react-router-dom';
class Product extends React.Component {

  constructor() {
      super();
      this.state = {
      Class:"BuyButtonHiden",
      };
    }

ShowButtonBuy(ID){
//  console.log("Mostrando Boton:" + ID );
    this.setState({Class: "BuyButtonShow"})
}
HidenButtonBuy(ID){
//  console.log("Escondiendo Boton" + ID );
    this.setState({Class: "BuyButtonHiden"})
}

ConvertNum(Num){
var num=Num;
  var decimalesPrecio1=num% 1;
  if(decimalesPrecio1==0){
    num=Math.trunc(Num);
  }

  num=(Num.toString()).replace(/\./g, ",");

  return num;
}
render() {
    var product=[];
    var Price=parseFloat(this.props.Price).toFixed(2);
    var OldPrice=(Price*2).toFixed(2);
    Price=this.ConvertNum(Price);
    OldPrice=this.ConvertNum(OldPrice);

    return <div className="Producto">

      <Link  className="LinkF"
      onMouseEnter={() => this.ShowButtonBuy(this.props.id)}
      onMouseLeave={() => this.HidenButtonBuy(this.props.id)}

        to={
          {
            id:this.props.id,
            state: {
              ProductList: this.state.ProductList,
              data: this.state.data,
            },
              pathname: "./Product/" + this.props.id,
              Image:this.props.Image,
              Name: this.props.Name,
              Price:  this.props.Price,
              Description: this.props.Description,


          }
      }>

      <div className="Producto-Foto">
      <img className="img-fluid" src={this.props.Image}></img>
      </div>


      <div className="ProductInfo">
        <div className="Producto-Nombre">
        {this.props.Name}
        </div>
    <div className="Producto-Precio">{Price} €</div>

        <div className="FrasePrecioProducto">


              <div className="Producto-PrecioA">{OldPrice} €</div>
              <div className="Producto-Descuento">50%</div>


        </div>
      </div>

      <div className={this.state.Class}>COMPRAR</div>
  </Link>
      </div>

    }
  }
  export default Product;
