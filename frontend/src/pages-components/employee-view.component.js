import React, { Component } from 'react';

import Navbar from '../components/navbar.component';
import UserList from '../components/user-list.component';
import ReviewsList from '../components/reviews-list.component';

export default class EmployeeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div className='container'>
        <Navbar />
        <br />
        <div className='row'>
          <div className='col'>
            <h3>Add performance feedback for these employees</h3>
            <br/>
            <UserList />
          </div>
          <div className='col'>
            <h3>Reviews</h3>
            <br/>
            <ReviewsList />
          </div>
        </div>
      </div>
    )
  }
}
