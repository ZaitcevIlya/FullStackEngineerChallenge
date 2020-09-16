import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-light navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>&larr; Back to Login Screen</Link>
      </nav>
    )
  }
}
