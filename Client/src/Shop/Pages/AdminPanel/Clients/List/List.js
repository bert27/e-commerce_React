import React from 'react';
import Sass from './List.sass';
import Element from './Element/Element';
import GetProducts_service from '../../../../Services/Admin/Clients/GetClients';
import AnimationLoad from '../../AnimationLoad/AnimationLoad';

class List extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
  ProductsView:<AnimationLoad/>,
  ProductsData:"",
  }
}

  componentDidUpdate(prevProps){

  if ( this.props.ElementAdd !== prevProps.ElementAdd ) {
        var Products=this.props.ElementAdd;
        this.GetProducts(Products);
  }
  if ( this.props.ElementsFormServer !== prevProps.ElementsFormServer ) {
          console.table("Actualizando Lista sin pasar por el servidor");
          this.GetProducts(this.props.ElementsFormServer);
  }
  if ( this.props.ElementDelete !== prevProps.ElementDelete ) {
          console.table("Eliminando elemento de la lista");
          var Products=this.props.ElementDelete;
          var Element=Products.Position;
          var Position=Element.Position;

        Products=this.state.ProductsData;
        Products.splice(Position,1);

      console.table(Products);
          if(Products==""){
            Products=["Vacio"];
          }
         this.GetProducts(Products);
  }
    if ( this.props.ElementEdit !== prevProps.ElementEdit ) {
      var List=this.props.ElementEdit;
      console.table(List);
      this.GetProducts(List);
    }
}

componentDidMount(){
  //Carga componentes del servidor:
  this.setState({
    ProductsView:<GetProducts_service User={"Admin"} GetProducts={this.GetProducts.bind(this)} />,
  });

}
GetProducts(Products){
  //Transforma los datos del servidor en elementos de la lista:

console.table(Products);
console.table(Products.length);
if(Products[0]=="Vacio" ){

Productos=<div>Sin productos</div>;

}
else{
  console.table("Update");
var Productos=Object.keys(Products).map((item,i) =>
<Element
 Elements={Products}
Number={i}
item={item}
GetDataElement={this.props.GetDataElement}
ElementDelete={this.props.ElementDeletefunction}
ProductsData={this.state.ProductsData}

/>);
}
  this.setState({
    ProductsView: Productos,
    ProductsData:Products,
  });
}

  render() {

return (
<div className="ListAdmin">
  List
  {this.state.ProductsView}
</div>);
    }
            }

export default List;
