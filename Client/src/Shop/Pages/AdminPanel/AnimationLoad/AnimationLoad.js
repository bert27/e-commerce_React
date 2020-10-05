import React from 'react';
import GridLoader from "react-spinners/GridLoader";
import Sass from './AnimationLoad.sass';
class AnimationLoad extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}

    render() {
return (<>

  <div className="AnimationLoad">
          <GridLoader
            size={20}
            color={"rgb(5,81,107)"}
            loading={true}/>
<div>Cargando...</div>
        </div>

  </>);
    }
            }

export default AnimationLoad;
