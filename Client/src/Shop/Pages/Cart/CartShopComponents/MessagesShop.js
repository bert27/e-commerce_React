import React from 'react';
import Logo from './logoshop.png';
import { faPlusSquare,faMinusSquare,faInfo,faTruck,faSync,faShieldAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class MessagesShop extends React.Component {

  render() {
    return (

    <div className="MensajesCarrito">
    <a href="/Tienda" className="LogoShop">
    <img className="LogoShopImg" src={Logo}></img>
    </a>


  {/* <div className="MensajesCarritoC">
    <FontAwesomeIcon icon={faTruck} className="IcoF2"/>
    ENVÍOS Entre 24/72h</div>


    <div className="MensajesCarritoC">
    <FontAwesomeIcon icon={faSync} className="IcoF2"/>
    GARANTÍA 2 Años</div>

    <div className="MensajesCarritoC">
    <FontAwesomeIcon icon={faShieldAlt} className="IcoF2"/>
    PAGO SEGURO 100% seguro</div>
*/}
    </div>);
  }
}

export default MessagesShop;
