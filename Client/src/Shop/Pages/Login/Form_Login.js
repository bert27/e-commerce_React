import React from 'react';
import { faUser, faUnlock} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../ProductsImages/logoshop.png';
import SCSS from './Form_Login.sass';
class Form_Login extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
NameUser:"",
PasswordUser:"",
DataUser:[],
                }}
GetName(event) {
  var NameUser=this.state.NameUser;
var DataUser=this.state.DataUser;
//Evento que recoge el valor del input:
  this.setState({NameUser: event.target.value}, () => {
      DataUser.Name=this.state.NameUser;
  });
//Lo guarda agrupado en un estado que contiene un objeto.
  this.setState({DataUser: DataUser}, () => {
      console.table(DataUser);
  });

}
GetPassword(event) {
  var PasswordUser=this.state.PasswordUser;
var DataUser=this.state.DataUser;
//Evento que recoge el valor del input:
  this.setState({PasswordUser: event.target.value}, () => {
      DataUser.Password=this.state.PasswordUser;
  });
//Lo guarda agrupado en un estado que contiene un objeto.
  this.setState({DataUser: DataUser}, () => {
      console.table(DataUser);
  });
}
Login(){
  var DataUser=this.state.DataUser;
  console.table(DataUser);

  fetch('/Shop/LoginUser', {
      method: 'PUT',
    body: JSON.stringify({
    User:DataUser.Name,
  Password:DataUser.Password}),

      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'}
  }).then(res => res.json())
  .then((data) => {


  console.log("%c Usuario aceptado por el servidor: " + data + "",
  "background: #45e615; color: #ffffff; font-style: italic; font-size: 20px")

});
}
render() {
  return (
<div className="Body-Login">
  <a className="LogoLogin" href="./">
        <img className="img-fluid" src={Logo}></img>
  </a>

<div className="Form">
    <div className="Form-Options">
        <div className="Form-Enter"> Entrar </div>
        <div className="Form-NewClient"> Nuevo Cliente</div>
    </div>

<div className="Form-Inputs">

              <div className="EmailLogin">
              <FontAwesomeIcon icon={faUser} className="IcoF"/>
                Correo electrónico
              </div>

              <label>
              <input type="text"  name="Name" className="InputForm"
              onChange={this.GetName.bind(this)}
               value={this.state.NameUser}/>
              </label>

              <div className="Password-Title">
              <FontAwesomeIcon icon={faUnlock} className="IcoF"/>
                Contraseña
              </div>

              <label>
              <input type="password"  name="Password" className="InputForm"
              onChange={this.GetPassword.bind(this)}
               value={this.state.PasswordUser}/>
              </label>

              <div className="RememberPassword">¿Olvidó su contraseña?</div>


              </div>
              <div className="Button" onClick={()=>{this.Login()}}>Entrar</div>


  </div>
</div>
);
}
              }
      export default Form_Login;
