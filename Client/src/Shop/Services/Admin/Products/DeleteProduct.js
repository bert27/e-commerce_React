import React from 'react';


class EditProduct extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}
DeleteElementServer(){
  var user="Admin";
  var Element=this.props.Element;
  console.table(Element);

  fetch("/AdminShop/Product/DeleteProduct", {
        method: 'PUT',
        body: JSON.stringify({
        User:user,
        Price:Element.Price,
        Name:Element.Name,
        Position:parseInt(Element.Position)}),

        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'}
      }).then(res => res.json())
            .then((data) => {
            //  var List=this.props.Elements;
          //    console.table(List);
          //    List.splice(Element.Position,1);
console.table(data);
          this.props.DeleteProduct(data,Element.Position);
  });
}
componentDidUpdate(){
  this.DeleteElementServer();
}
componentDidMount(){
  this.DeleteElementServer();
}

    render() {
return (<></>);
    }
            }

export default EditProduct;
