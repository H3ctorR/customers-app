import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/customers">Customers</Link>
        <Link to="/customers/2">Customers 2</Link>
      </div>
    </Router>
  );
}

export default App;
