import React from 'react';
import { faUser, faUnlock} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../../ProductsImages/logoshop.png';
import SCSS from './Form_LoginAdmin.sass';
import LoginAdminService from '../../../Services/Admin/LoginAdmin';
class Form_Login extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
        NameUser:"",
        PasswordUser:"",
        DataUser:[],
        Message:<>Introduce una contraseña</>,
        LoginService:<></>,
                }}
  GetName(event) {
          var NameUser=this.state.NameUser;
          var DataUser=this.state.DataUser;

          //Evento que recoge el valor del input:
            this.setState({
              NameUser: event.target.value}, () => {
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
LoginAdmin(data){
            if(data[0]=="Ok"){
                  //Login
                  console.log("Usuario validado");
                  this.setState({Message:<>Usuario Validado</>});
                  this.props.Auth();
            }
            else{
                    this.setState({Message: <div className="ErrorAuthAdmin">Usuario o contraseña incorrectos</div>});
            }

}
ButtonLogin(){
        var DataUser=this.state.DataUser;
        console.table(DataUser);
        var name=DataUser.Name;
        var password=DataUser.Password;
      if(name==undefined){
        name="Vacio";
      }

      this.setState({
        LoginService: <LoginAdminService
        Name={name}
        Password={password}
        LoginAdmin={this.LoginAdmin.bind(this)}/>});
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
            {this.state.Message}
    </div>

<div className="Form-Inputs">
              <div className="EmailLogin">
              <FontAwesomeIcon icon={faUser} className="IcoF"/>
                Admin:
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
              <div className="Button" onClick={()=>{this.ButtonLogin()}}>Entrar</div>

  </div>
  {this.state.LoginService}
</div>
);
}
              }
      export default Form_Login;
