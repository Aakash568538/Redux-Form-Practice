import React, { Component } from 'react';
import ProfileViewPageDetails from './ProfileViewPageDetails';

class ProfileViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

componentWillMount() {
  let existingUsers = [];    
  var users = localStorage.getItem('users');
  var parsedUsers = JSON.parse(users);
  parsedUsers.forEach(user => {
    let userObj = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      city: user.city,
      picture: user.picture,
    };
    existingUsers = existingUsers.concat(userObj);
  });
  this.setState({ users: existingUsers });
} 

  render() {
    return (
      <div>
        <ProfileViewPageDetails
        users={this.state.users} 
        />
      </div>
    );
  }
}

export default ProfileViewPage;