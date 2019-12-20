import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';


class CustomerContainer extends Component {
    renderbody = () => (
        <Route path="/customers/:dni/edit" children={
            ( {match} ) => (match ? <p>Es edicion</p> : <p>No es edicion</p>)
        } />
    )
    // <p>Datos del cliente {this.props.customer.name} </p>
    render() {
        console.log(this.props)
        return (
            <div>
                <AppFrame 
                    header={`Cliente ${this.props.dni}`} 
                    body={this.renderbody()} 
                />
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};
const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})
export default connect(mapStateToProps, null)(CustomerContainer);