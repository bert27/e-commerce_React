import React from 'react';


class LoginAdmin extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}
CheckLogin(){
  console.table("Login");
  fetch('/AdminShop/LoginAdmin', {
    method: 'PUT',
    body: JSON.stringify({
        Name: this.props.Name,
        Password: this.props.Password,
  }),

  headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'}
}).then(res => res.json())
      .then((data) => {
console.table(data);
          this.props.LoginAdmin(data);
  });
}
componentDidUpdate(){
this.CheckLogin();
}
componentDidMount(){
this.CheckLogin();
}

    render() {
return (<></>);
    }
            }

export default LoginAdmin;
