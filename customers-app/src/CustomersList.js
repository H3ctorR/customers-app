import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './components/CustomerListItem';

const CustomersList = ({ customers }) =>{
    return(
        <div>
            <div className='customers-list'>
                {
                    customers.map(c => 
                        <CustomersListItem 
                            key={c.dni} 
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={ulrPath} >
                        </CustomersListItem>
                    )
                }
            </div>
        </div>
    )
}

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired
}

export default CustomersList;