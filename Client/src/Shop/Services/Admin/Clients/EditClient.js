import React from 'react';


class EditProduct extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}
EditElementServer(){
  var user="Admin";
  var Element=this.props.Element;
  console.table(Element);

  fetch("/AdminShop/Client/EditClient", {
        method: 'PUT',
        body: JSON.stringify({
        User:user,
        Price:Element.Price,
        Name:Element.Name,
        Position:Element.Position}),

        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'}
      }).then(res => res.json())
            .then((data) => {
              console.table(data);
          this.props.EditProduct(data);
  });
}
componentDidUpdate(){
  this.EditElementServer();
}
componentDidMount(){
  this.EditElementServer();
}

    render() {
return (<></>);
    }
            }

export default EditProduct;
