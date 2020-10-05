import React from 'react';
import Sass from './PanelCrud.sass';
import Clients from '../Clients/Clients';
import Products from '../Products/Products';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
class PanelCrud extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
          Menu:<div className="PanelCrud">
                <div className="Option_Crud" onClick={()=>{this.OptionChoose("Clientes")}}>
                <FontAwesomeIcon icon='user'  className="IconAdmin"/>
                Clientes</div>
                <div className="Option_Crud" onClick={()=>{this.OptionChoose("Productos")}}>
                <FontAwesomeIcon icon='cube'  className="IconAdmin"/>
                Productos</div>
          </div>,
        }}
OptionChoose(Option){
          console.table(Option);
          var Menu=<></>;
                              if(Option=="Productos"){
                                        Menu=<Products/>;
                              }else{
                                        Menu=<Clients/>;
                              }

                      this.setState({ Menu:Menu});
}
render() {
return (<>
{this.state.Menu}
  </>
    );
}
}
export default PanelCrud;
