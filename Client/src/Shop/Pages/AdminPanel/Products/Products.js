import React from 'react';
import Sass from './Products.sass';
import FormProductsAdmin from './Form/FormProductsAdmin';
import List from './List/List';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

class Products extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    ElementListToForm:"",
    ElementsFormServer:"",
    ElementAdd:"",
    ElementDelete:"",
    ElementEdit:"",
    Position:"k",
  }
}
UpdateViewListFormAdd(data){
  console.table(data);

 this.setState({
    ElementAdd:data,
  });
}
UpdateViewListFormEdit(List){
  console.table(List);
  this.setState({
     ElementEdit:List,
   });
}
UpdateViewListFormDelete(List,Position){
  console.table(List);
  List.Position=Position;
this.setState({
    ElementDelete:List,
  });
}
//Edition Element
DataElementtoForm(Element){
  console.table(this.state.ElementListToForm);

  console.table(Element);
  this.setState({
    ElementListToForm:Element,
    Position:Element.Position,
  });
}
    render() {
return (
<div className="ProductsAdmin">
<div className="TitleAdmin">
  <FontAwesomeIcon icon='cube'  className="IconAdmin"/>
Productos
</div>

<div className="ProductsBody">
<FormProductsAdmin
ElementEdit={this.state.ElementListToForm}
ElementEd={this.UpdateViewListFormEdit.bind(this)}
ElementAdd={this.UpdateViewListFormAdd.bind(this)}
PositionElement={this.state.Position}
/>
<List
ElementAdd={this.state.ElementAdd}
GetDataElement={this.DataElementtoForm.bind(this)}
ElementDeletefunction={this.UpdateViewListFormDelete.bind(this)}
ElementDelete={this.state.ElementDelete}
ElementsFormServer={this.state.ElementsFormServer}
ElementEdit={this.state.ElementEdit}

/>
</div>
</div>);
    }
            }

export default Products;
