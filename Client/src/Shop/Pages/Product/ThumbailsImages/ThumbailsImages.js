import React from 'react';
import M1 from './1.jpg';
import M2 from './2.jpg';
import M3 from './3.jpg';
import './ThumbailsImages.sass';
class ThumbailsImages extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}

    render() {
return (<>
{/*<div className="ProductPage-Col1">*/}

    <div className="thumbnail">
            <div className="thumbnail_wrapper">
                <img className="thumbnail_img" src={M1}/>
            </div>

            <div className="thumbnail_wrapper">
                <img className="thumbnail_img" src={M2}/>
            </div>

            <div className="thumbnail_wrapper">
                <img className="thumbnail_img" src={M3}/>
            </div>
    </div>


{/*}</div>*/}


  </>);
    }
            }

export default ThumbailsImages;
