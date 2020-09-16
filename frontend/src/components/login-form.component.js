import React, { Component } from 'react';
import axios from 'axios';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'admin',
      users: []
    }

  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/users')
      .then(response => {
        if(response.data.length > 0) {
          this.setState({
            users: [...response.data]
          })
        }
      })
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.username === 'admin') {
      window.location = '/admin-view'
    } else {
      window.location = '/employee-view'
    }
  }

  render() {
    return (
      <div>
        <h3>Enter your name</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(user => {
                  return <option
                    data-role={user.role}
                    key={user.username}
                    value={user.username}>{user.username}
                  </option>
                })
              }
              </select>
          </div>
          <div className='form-group'>
            <input type='submit' value='Log in' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}
