import React from 'react';
import './ProductPage.sass';
import Header from './../../Header/Header';
import Footer from './../../Footer/Footer';

import Product1 from './../../ProductsImages/1.png';
import Product2 from './../../ProductsImages/2.png';
import Product3 from './../../ProductsImages/3.png';

import ThumbailsImages from './ThumbailsImages/ThumbailsImages';
import PopUpBuy from "./BannerProductBuy/BannerProductPage"
import BuyItemsEndPoint from './../../Services/BuyItem';
class ProductPage extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
          Price:"",
          Name:"",
          Image:"",
          Description:"",
          NumeroCarrito:"0",
          Banner:<></>,
          PrecioTotal:"",
          BuyItemsEndPoint:<></>
        };


      }
componentDidMount(){
  console.log("%c Cargando producto: " + "",
  "background: #0b78ad; color: #ffffff; font-style: italic; font-size: 10px");

  if(this.props.location.Name!=undefined){
  console.log("Cargando a traves del link");
  var Object={};
  Object.Price=this.props.location.Price;
  Object.Name= this.props.location.Name;
  Object.Image= this.props.location.Image;
  Object.Description= this.props.location.Description;
  console.table(Object);

  this.setState({
  Price:Object.Price,
  Name:Object.Name,
  Image: Object.Image,
  Description: Object.Description,
  });

}

  if(this.props.location.Name==undefined) {
    console.log("Cargando por enlace Directo");

    var Price=this.state.Price;
    var Name=this.state.Name;
    var Image=this.state.Image;
    var Description=this.state.Description;

    var Object={};
    Object.Id=this.props.match.params.productid;
    Object.Ruta= this.props.location.pathname;
    Object.Image= this.props.location.Image;
    console.table(Object);


    this.GetDataProduct(Object.Id);

  }

}
BuyItem(Product){
console.log("Añadiendo al carrito");

var ID=this.props.match.params.productid;
var Precio=this.state.Price;
var Nombre=this.state.Name;
var Imagen=this.state.Image;
console.log(ID);

  fetch('/Shop/ServerGetItems', {
    method: 'PUT',
    body: JSON.stringify({
    id:ID,
    Precio:Precio,
    Nombre:Nombre,
    Image:Imagen,
            }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}
      }).then(res => res.json())
      .then((data) => {
    console.table(data);
    this.setState({
      PrecioTotal:data.TotalPrice,
      NumeroCarrito:data.Number,
      Banner:
      <PopUpBuy
      Nombre={Nombre}
      Precio={Precio}
      Image={Imagen}
      data={data}
      Total={data.Number}
      Precio={data.TotalPrice}
      List={data.ProductList}
      ClosePopUp={this.ClosePopUp.bind(this)}/>,
    });
      });


    }

    //Close popup when Buy Item.
          ClosePopUp(){
            this.setState({  Banner:<></>,  });}
    //Update Number of Header (logo cart) with number of Items.
        UpdateNItemsCart(Items){
          console.log("Items:" + Items);
        this.setState({   NumeroCarrito:Items,  });  }

GetDataProduct(id){
console.log("Id" + id);

if(id==1 || id==4 || id==7){
    this.setState({
    Price:15,
    Name:"Roborock Xiaowa",
    Image:  Product1,
    Description:"Robot aspirador con mapeo láser",
    });
  }

  if(id==2 || id==5 || id==8){
      this.setState({
      Price:15,
      Name:"Mi Electric",
      Image:  Product2,
      Description:"Patinete eléctrico adulto",
      });
    }
    if(id==3 || id==6 || id==9){
        this.setState({
        Price:15,
        Name:"Rowenta rh9151",
        Image:  Product3,
        Description:"Aspirador escoba con motor digital",
        });
      }

}
render() {
  var Price=this.state.Price;
  var Name=this.state.Name;
  var Image=this.state.Image;
  var Description=this.state.Description;
  var Euro="€";

  return(
    <>
<div className="ProductPage">
      {this.state.Banner}

      <Header
       NumeroCarrito={this.state.NumeroCarrito}
       UpdateNItemsCart={this.UpdateNItemsCart.bind(this)}/>

      <div className="Body-ProductPage">
            <div>
                  <a itemprop="item" name="title" class="Volver" href="/Tienda" title="Volver al inicio">
                  <span itemprop="name" name="title"> {"<<"} Regresar</span>
                  <meta itemprop="position" content="1"/></a>
            </div>

            <div className="ProductPicAndThumbail">

                      <div className="ProductoPic">
                      <img className="ProductoPic_Img" src={Image}></img>
                      </div>
                      <ThumbailsImages/>

              <div className="DescriptionProduct">

                    <div className="ProductName">
                         <div>{Name}</div>
                         <div className="stock">En Stock</div>

                    </div>
                    <div className="DescriptionProduct_Des">
                          <div> {Description}</div>

                              <div className="Price"> {Price} {Euro}</div>

                          <div>
                            <div> Envío gratis en 24-72 horas laborables.</div>
                            <div> Garantía de 2 años.</div>
                          </div>

                          <div className="Price_ProductPage">
                              <div className="PriceM"> {Price} {Euro}</div>
                              <div className="Button" onClick={this.BuyItem.bind(this)}>Añadir al carrito</div>
                          </div>
                    </div>



                </div>


            </div>




      </div>
</div>
<Footer/>
  </>
);
}
              }
      export default ProductPage;
