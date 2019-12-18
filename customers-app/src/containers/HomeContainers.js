import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomersActions';
import { withRouter } from 'react-router-dom';

class HomeContainer extends React.Component{
    handleOnClick = () =>{
        console.log('handleOn Click');
        //Esto hace lo mismo que Link
        //Con esto redireccionamos a una pagina
        this.props.history.push('/customers');
    }
    render(){
        return(
            <div>
                <AppFrame 
                    header='Home' 
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleOnClick} >Listado de clientes</button>
                                {/* <Link to="/customers">Listado de clientes</Link> */}
                            </CustomerActions>
                        </div>
                    } />
            </div>
        )
    }
}

HomeContainer.propTypes = {

}

// Solucion para el error de la version 2 de enrutar
export default withRouter(HomeContainer);