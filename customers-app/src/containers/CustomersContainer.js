import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import {fetchCustomers} from '../actions/fetchCustomers';


class CustomersContainer extends Component {
    componentDidMount(){
        this.props.fetchCustomers();
    }
    handleAddNew = () =>{
        this.props.history.push('/customers/new');
    }
    renderBody = customers => (
        <div>
            <CustomersList
                customers={customers}
                urlPath={'customer/'}>
            </CustomersList>

            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Clinte</button>
            </CustomersActions>
        </div>
    )
    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(this.props.customers) }>
                </AppFrame>
            </div>
        );
    };
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
};

CustomersContainer.defaultProps = {
    customers: [ ]
}

const mapStateToProps = state => ({
    customers: state.customers
});
const mapDispatchToProps = { fetchCustomers };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));