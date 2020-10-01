import React from "react";
import Popup from "reactjs-popup";
import PoliticaCookies from './PoliticaCookies/PoliticaCookies';
import BannerCookies from './BannerCookies.sass';
class Clase_BannerCookies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Activado: true };
    this.Abrir = this.Abrir.bind(this);
    this.Cerrar = this.Cerrar.bind(this);
    this.AceptarCookies = this.AceptarCookies.bind(this);
  }

  componentDidMount(){
    var AceptaCookies=localStorage.getItem('AceptaCookies');
    if(AceptaCookies=='Si'){
      this.Cerrar();
    }
  }
  Cerrar() {
    console.log("Cerrando banner");
    this.setState({ Activado: false });
  }
  Abrir() {
    console.log("Abriendo banner");
    this.setState({ Activado: true });
  }

  AceptarCookies(){
    localStorage.setItem('AceptaCookies','Si');
    this.setState({ Activado: false });
  }



  render() {
    const Modal = () => (
    <Popup
    open={this.state.Activado}
    onClose={this.Cerrar}
    closeOnDocumentClick>


    <div className="ContenidoBanner">

        <div>
        <a>Privacidad y cookies: este sitio utiliza cookies.</a>
        <a> Al continuar utilizando este sitio web, aceptas su uso.</a>
        <a> Para obtener más información, incluido cómo controlar las cookies,
        consulta aquí:  </a>
          <div className="Contenido_Cookies">
          <a href="./PoliticaCookies">Más información</a>
          </div>
        </div>
        <div className="Cerrar_Cookies">
        <a className="close" onClick={this.Cerrar}>&times;</a>
        </div>


    </div>

    <div className="BotonCookies">
    <button className="BotonAceptarCookies"
    onClick={this.AceptarCookies}>Estoy de acuerdo</button>
    </div>

            </Popup>
    );
    return (
      <div className="Banner">
      <Modal/>
      </div>
    );
  }
}

export default Clase_BannerCookies;
