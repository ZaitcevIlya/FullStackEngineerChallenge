import React, { Component } from 'react';

import CreateUser from '../components/create-user.component';
import UserList from '../components/user-list.component';

export default class AdminView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <CreateUser />
          </div>
          <div className='col'>
            <h3>Employees</h3>
            <UserList admin />
          </div>
        </div>
      </div>
    )
  }
}
