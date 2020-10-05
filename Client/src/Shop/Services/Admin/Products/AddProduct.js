import React from 'react';


class AddProduct extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}
AddElementServer(){
  var user="Admin";
  var Element=this.props.Element;


  fetch("/AdminShop/Product/AddProduct", {
        method: 'PUT',
        body: JSON.stringify({
        User:user,
        Price:Element.Price,
        Name:Element.Name}),

        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'}
      }).then(res => res.json())
            .then((data) => {
      console.table(data);
          this.props.AddProduct(data);
  });
}
componentDidUpdate(){
  this.AddElementServer();
}
componentDidMount(){
  this.AddElementServer();
}

    render() {
return (<></>);
    }
            }

export default AddProduct;
