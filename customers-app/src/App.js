import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import HomeContainer from './containers/HomeContainers';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';



class App extends React.Component {
  renderHome = () => <HomeContainer />;
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <CustomersContainer /> ;
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render(){
    return (
      <Router>
        <div>
          {/* <Route exact path='/' component={HomeContainer} /> */}
          {/* Version 2 de enrutar pero tira un error mirar app.js en la parte de export */}
          <Route exact path='/' component={this.renderHome} />

          <Route exact path='/customers' component={this.renderCustomerListContainer} />
          <Switch>
            <Route exact path='/customers/new' component={this.renderCustomerNewContainer} />
            <Route exact path='/customers/:dni' 
                    render={props => <CustomerContainer dni={props.match.params.dni} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
