import React from 'react';
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends React.Component {
  constructor(props) {
    super(props);
        this.state = {

                }}

Login(){
  console.log("Iniciando sesión");
//onClick={()=>{this.Login()}}
}
render() {
  return (
  <>
    <a href="/Registro" className="Link">
          <div className="Login"  onClick={()=>{this.Login()}}>

            <div>
            Entra o Registrate
            </div>

            <div>
            <FontAwesomeIcon icon={faUser} className="Ico" />
            </div>

            </div>
    </a>
  </>);
}
              }
      export default Login;
