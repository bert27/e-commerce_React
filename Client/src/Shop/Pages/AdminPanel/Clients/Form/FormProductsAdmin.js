import React from 'react';
import Sass from './FormProductsAdmin.sass';
import EditElementService from "./../../../../Services/Admin/Clients/EditClient";
import AddElementService from "./../../../../Services/Admin/Clients/AddClient";
class FormProductsAdmin extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    NewElement:{ID: 1,
    Name: 'Nombre',  Price: "Apellidos"},
    Edit:0,
    Service_Edit:<></>,}}
ConfirmServerAddOk(data){
  console.table(data);
  this.props.ElementAdd(data);
}
ConfirmServerEditOk(data){
  console.table(this.state.NewElement);
  console.table(data);
  this.props.ElementEd(data);
}
NewElement(){
  var CheckEdit=this.state.Edit;
  var NewElement=[];
    NewElement.Price = document.getElementById("Price").value;
    NewElement.Name = document.getElementById("Name").value;

      if(CheckEdit==1){
              console.log("Editando");
              //Edit Element:
              NewElement.Position=this.props.PositionElement;
              console.table(this.props.PositionElement);
                this.setState({
                      Service_Edit:<EditElementService
                      EditProduct={this.ConfirmServerEditOk.bind(this)} Element={NewElement}/>
                            });
            }
      else{
              this.setState({
                Service_Edit:<AddElementService
                AddProduct={this.ConfirmServerAddOk.bind(this)} Element={NewElement}/>
                          });
                      }
                     document.getElementById("Price").value=0;
                    document.getElementById("Name").value="Nombre";
    this.setState({
      NewElement:"",
      Edit:0,
    });
}
UpdateValuePrice(event){
  console.table(event.target.value);
}
componentDidUpdate(prevProps){
//if this.props change update
if ( this.props.ElementEdit !== prevProps.ElementEdit ) {
var Element=this.props.ElementEdit;
console.table(Element);

this.setState({
  NewElement:Element,
  Edit:1,
});

  }
      }
componentDidMount(){

}
    render() {
      var Element=this.state.NewElement;
      var Price=Element.Price;
      var Name=Element.Name;
      console.table(Element.Name);

return (
<>
{this.state.Service_Edit}

  <div className="FormularioAdmin_cont">

  {/*-------FORM------------------*/}
  <div className="FormularioAdmin">
        <div className="FormularioB-Elemento">
        <div className="LetrasFormC">Nombre: </div>
        <input type="text" className="form-control"
               id="Name" Value={Name}  />
        </div>


        <div className="FormularioB-Elemento">
        <div className="LetrasFormC">Apellidos: </div>
        <input type="text" className="form-control"
          onChange={this.UpdateValuePrice.bind(this)}   id="Price" Value={Price}  />
        </div>



</div>
<div className="ButtonAdmin_cont" >
<button type="submit" className="ButtonAdmin" onClick={this.NewElement.bind(this)}>
Añadir Cliente
</button>
</div>


{/*-------FORM------------------*/}


  </div>

</>
);
    }
            }

export default FormProductsAdmin;
