import React from 'react';


class GetProducts extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}

componentDidMount(){
  var user=this.props.User;
  fetch("/AdminShop/Product/GetProducts", {
        method: 'PUT',
        body: JSON.stringify({
        User:user,}),

        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'}
      }).then(res => res.json())
            .then((data) => {
              console.table(data);
          this.props.GetProducts(data);
  });
}

    render() {
return (<></>);
    }
            }

export default GetProducts;
