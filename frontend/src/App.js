import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar.component';
import LoginForm from './components/login-form.component';

import AdminView from './pages-components/admin-view.component';
import EmployeeView from './pages-components/employee-view.component';


function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={LoginForm} />
        <Route path='/admin-view' component={AdminView} />
        <Route path='/employee-view' component={EmployeeView} />
      </div>
    </Router>
  );
}

export default App;
