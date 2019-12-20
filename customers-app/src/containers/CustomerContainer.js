import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';


class CustomerContainer extends Component {
    renderbody = () => (
        <Route path="/customers/:dni/edit" children={
            ( { match } ) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer} />
            }
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