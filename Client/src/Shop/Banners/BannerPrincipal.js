import React from 'react';

import Imagen1 from './ImagesBannerPrincipal/image1.png';
import Imagen2 from './ImagesBannerPrincipal/image2.png';
import Imagen3 from './ImagesBannerPrincipal/image3.png';
import Imagen4 from './ImagesBannerPrincipal/image4.jpg';
import Imagen5 from './ImagesBannerPrincipal/image5.jpg';
import './BannerPrincipal.scss';
class BannerPrincipal extends React.Component {

  render() {
    var EstadoAccionMenu=this.props.MenuAccion;

    var claseBanner="CarouselTotal2";
  	if(EstadoAccionMenu==1){
  		claseBanner="CarouselTotal3";

  	}
    if(EstadoAccionMenu==0){
      claseBanner="CarouselTotal2";

    }


  	return (<div id="CarouselTotal" class="carousel slide" data-ride="carousel">

      <div class="carousel-inner">

      <ol class="carousel-indicators">
        <li data-target="#CarouselTotal" data-slide-to="0" class="active"></li>
        <li data-target="#CarouselTotal" data-slide-to="1"></li>
        <li data-target="#CarouselTotal" data-slide-to="2"></li>
        <li data-target="#CarouselTotal" data-slide-to="4"></li>
        <li data-target="#CarouselTotal" data-slide-to="5"></li>
      </ol>
              <div class="carousel-item active">
                <img class="d-block w-100" src={Imagen1} alt="First slide"/>
              </div>

              <div class="carousel-item">
                <img class="d-block w-100" src={Imagen2} alt="Second slide"/>
              </div>

              <div class="carousel-item">
                <img class="d-block w-100" src={Imagen3} alt="Third slide"/>
              </div>

              <div class="carousel-item">
                <img class="d-block w-100" src={Imagen4} alt="Third slide"/>
              </div>

              <div class="carousel-item">
                <img class="d-block w-100" src={Imagen5} alt="Third slide"/>
              </div>

      </div>

      <a class="carousel-control-prev" href="#CarouselTotal" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#CarouselTotal" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>




  	)

  }

}

export default BannerPrincipal;
