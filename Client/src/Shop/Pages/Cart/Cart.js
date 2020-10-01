import React from 'react';

import MessagesShop from './CartShopComponents/MessagesShop';
import { faPlusSquare,faMinusSquare,faInfoCircle,faTruck,faSync,faShieldAlt,} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import SCSS from './Cart.sass';
import GetItems from "./../../Services/GetItems";
class Cart extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
          N_Items:0,
          ProductList:<></>,
          TotalPrice:"",
          LoadList:<></>,
        }}
ReceiveItems(data){
  console.log("Cargando Lista desde el carrito");
      data.ProductList=this.DeleteEmptys(data.ProductList);
  this.setState({
    N_Items:data.Number,
    ProductList:data.ProductList,
    TotalPrice:data.TotalPrice,
  });
}

DeleteEmptys(Lista){
console.log(Lista.length);
console.table(Lista);


  for(var i=0;i<Lista.length;i++){
    if(Lista[i]!=null){
    if(Lista[i].Nombre==undefined){
        delete Lista[i];
    }

  }else{
    delete Lista[i];
  }


}
    return Lista
}
  componentDidMount(){
 if(this.props.location && this.props.location.state && this.props.location.state.ProductList){
    var Lista=this.props.location.state.ProductList;
  console.table(Lista);
    Lista=this.DeleteEmptys(Lista);

    var data=this.props.location.state.data;

    this.setState({
      N_Items:data.Number,
      ProductList:Lista,
      TotalPrice:data.TotalPrice,
    });

    this.setState({
   LoadList: <GetItems ReceiveItems={this.ReceiveItems.bind(this)}/>,
 });

 }else{
   console.log("Pagina cargada directamente");
      this.setState({
     LoadList: <GetItems ReceiveItems={this.ReceiveItems.bind(this)}/>,
   });

 }

}

  BuyItem(Product){
  console.table(Product);

  }
  AddQuantity(Position,Object){
  console.log("Añadiendo Cantidad del objeto en la posición:" + Position);
  console.table(Object);
  var price=Object.Precio;
  var Quantity=Object.Cantidad+1;
  Object.Total=Quantity*Object.Precio;

            fetch('/Shop/AddProduct', {
                method: 'PUT',
                body: JSON.stringify({
                Position: Position,
                Product: Object,
                User:"Invitado",
                Price:price,
              }),
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'}
}).then(res => res.json())
    .then((data) => {
      console.log("N Elementos:" + data.Number);
          console.table(data);
    data.ProductList=this.DeleteEmptys(data.ProductList);

                this.setState({
                      N_Items:data.Number,
                      ProductList:data.ProductList,
                      TotalPrice:data.TotalPrice,
                        });      });
  }

  RemoveQuantity(item,price){
  console.log("Disminuyendo Cantidad:" + item);
var Object={};
Object.Product=item;
Object.User="Invitado";
Object.Price=price;
  fetch('/Shop/DeleteProduct', {
      method: 'DELETE',
      body: JSON.stringify({
      Product:Object,
    }),
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'}
}).then(res => res.json())
    .then((data) => {
    console.log("N Elementos:" + this.state.N_Items);
   data.ProductList=this.DeleteEmptys(data.ProductList);
        this.setState({
            N_Items:data.Number,
            ProductList:data.ProductList,
            TotalPrice:data.TotalPrice,
      });    });
  }

render() {
  var BotonComprar=<div className="SeguirC">

  <a href="/Tienda">
  Seguir Comprando</a>
  </div>;
  var NProducts=this.state.N_Items;
  var Narticulos=<>Tienes ({NProducts}) productos en el carrito</>;
  var ProductList=this.state.ProductList;
  var List="";
  var Header="";
  var Cart="";
  var Info=
  <div className="DivCart">
      <div className="TotalPrice">
           <div>Total de Productos:</div>
           <div>{this.state.TotalPrice} €</div>
      </div>

      <div>
      ¡Gastos de envío gratis!
      *Solo para España Península</div>

      <div className="TextCart">
      <div>
            <FontAwesomeIcon icon={faTruck} className="IcoF2"/>
             Política de seguridad confianza online
            </div>

            <div>
            <FontAwesomeIcon icon={faShieldAlt} className="IcoF2"/>
             Entrega en 24-72 horas laborables
             </div>
       </div>

       <div className="BannerBuy">
              {BotonComprar}
              <div className="Button">Comprar</div>
       </div>
    </div>;


  if(NProducts==0){
    Cart=
    <>

    <div className="DivCart-empty" data-testid='without_product'>


    <div className="DivCart-Title">
      <FontAwesomeIcon icon={faInfoCircle} className="IcoF2"/>
          No tienes productos en el carrito
    </div>

    </div>
        {BotonComprar}
    </>;
    Info=<></>;
  }else{


/****/

    console.table(ProductList);

var Header=<div className="DivCart_SubTitle">
<div className="DivCart-headboard">Producto</div>
<div className="DivCart-headboard">Nombre</div>
<div className="DivCart-headboard">Precio</div>
<div className="DivCart-headboard">Cantidad</div>
<div className="DivCart-headboard">Total</div>
</div>;

var List=Object.keys(ProductList).map((item,i) =>
<div key={i} className="ProductCart" data-testid='with_product' >
<Link  className="LinkC"  to={
    {
id:ProductList[item].id,
pathname: "/Product/" + ProductList[item].id,
Image:  <div className="Producto-Foto">
<img className="img-fluid" src={ProductList[item].Image}></img></div>,
Name: <div className="Producto-Nombre">{ProductList[item].Nombre}</div>,
Price:  <div className="Producto-Precio">{ProductList[item].Precio}</div>,
AddProduct:this.BuyItem.bind(this),}}>

<img class="Product-Img" src={ProductList[item].Image}/>
</Link>

<Link  className="LinkC" to={
        {
id:ProductList[item].id,
pathname: "/Product/" + ProductList[item].id,
Image:  <div className="Producto-Foto">
<img className="img-fluid" src={ProductList[item].Image}></img></div>,
Name: <div className="Producto-Nombre">{ProductList[item].Nombre}</div>,
Price:  <div className="Producto-Precio">{ProductList[item].Precio}</div>,
AddProduct:this.BuyItem.bind(this),}}>

<div className="ProductC2">{ProductList[item].Nombre}</div>
</Link>

<div className="ProductC">{ProductList[item].Precio} €</div>
<div className="ProductC">
    <div className="ProductC-Q2">
      {ProductList[item].Cantidad}
      </div>
      <div className="ProductC-Q">
      <FontAwesomeIcon icon={faMinusSquare} className="IcoF3" onClick={()=>{this.RemoveQuantity(item,ProductList[item].Precio)}}/>
      <FontAwesomeIcon icon={faPlusSquare} className="IcoF3" onClick={()=>{this.AddQuantity(item,ProductList[item])}}/>

      </div>
</div>

        <div className="ProductC">
          {ProductList[item].Total} €
        </div>

      </div>
          );

          Cart=
          (<div className="DivCart">

              <div className="DivCart-Title">

                    {Narticulos}
              </div>

                {Header}
                <div className="ListCart">
                  {List}
                </div>


            </div>);
  }



return (
    <div className="Body-Cart">
            {this.state.LoadList}
              <MessagesShop/>
              <div className="DivCartP"  data-testid='Container'>
                {Cart}
                {Info}
              </div>
    </div>);


}
              }
      export default Cart;
