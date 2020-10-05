import React from 'react';
import Sass from './Element.sass';
import PicEdit from './Images/editbutton.png';
import PicDelete from './Images/deleteicon.png';
import PicProduct from './Images/User.png';
import DeleteElementService from "./../../../../../Services/Admin/Clients/DeleteClient";
class Element extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
  Service_Delete:<></>,
  }
}
ConfirmServerDeleteOk(data){
  var Elements=this.props.Elements;
  var Number=this.props.Number;
  var Item=this.props.item;

  this.props.ElementDelete(data,Elements[Item]);
}
DeleteElement(){
  var Elements=this.props.Elements;
  var Number=this.props.Number;
  var Item=this.props.item;
  console.log("Delete");
  Elements[Item].Position=Item;
  this.setState({
    Service_Delete:<DeleteElementService
    DeleteProduct={this.ConfirmServerDeleteOk.bind(this)}
    Element={Elements[Item]}
    Elements={this.props.Elements}/>,
  });
}
EditElement(){
  var Elements=this.props.Elements;
  var Number=this.props.Number;
  var Item=this.props.item;
    Elements[Item].Position=Item;
  //console.table(Elements[Item]);
  this.props.GetDataElement(Elements[Item]);
}
    render() {
      var Elements=this.props.Elements;
      var Number=this.props.Number;
      var Item=this.props.item;

return (<>
  {this.state.Service_Delete}
<div className="ElementList">
{/*Image Product*/}
      <div>
          <input  type="image" src={PicProduct}
          alt="Submit" className="ImageProduct" ></input>
      </div>
{/*Name and Price*/}
      <div>
      {Elements[Item].Name}
      </div>

      <div>
      {Elements[Item].Price}
      </div>
{/*Buttons*/}
      <div onClick={this.DeleteElement.bind(this)}>
          <input  type="image" src={PicDelete}
          alt="Submit" className="IcoProduct" ></input>
      </div>

      <div onClick={this.EditElement.bind(this)}>
          <input  type="image" src={PicEdit}
          alt="Submit" className="IcoProduct" >
          </input>
      </div>

</div></>);
    }
            }

export default Element;
