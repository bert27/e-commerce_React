import React from 'react';
import Login from './Login/Form_LoginAdmin';
import PanelCrud from './Crud/PanelCrud';
class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
          Menu:<Login Auth={this.LoginAdmin.bind(this)}/>,
          //Bypass
        // Menu:<PanelCrud/>,
        }}
            LoginAdmin(){
            console.log("Entrando en Panel");
            this.setState({
              Menu:<PanelCrud/>
            });
            }
render() {
return (
          <>
          {this.state.Menu}
          </>

    );


}
}
export default AdminPanel;
