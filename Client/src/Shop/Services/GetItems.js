import React from 'react';

class GetItems extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}
Prueba(Number){
  return Number
}
componentDidMount(){

    var user="Invitado";

      fetch('/Shop/ClientGetItems', {
            method: 'PUT',
            body: JSON.stringify({
            User:user,}),

            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'}
          }).then(res => res.json())
                .then((data) => {
                console.log("%c Productos en cesta: " + "",
                "background: #0b78ad; color: #ffffff; font-style: italic; font-size: 10px")
                this.props.ReceiveItems(data);
      });

}
    render() {
return (<>
  </>);
    }
            }

export default GetItems;
