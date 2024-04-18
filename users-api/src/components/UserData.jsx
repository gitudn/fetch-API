// UserData.jsx
import React from 'react';

const UserData = ({ users }) => { // getting users as props (distructured) from App.jsx
  return (
    <div>
      <h1>User Data</h1>
      <table>
        <thead>
          
          {/* table row */}
          <tr>
            {/* table heading */}
            <th>ID</th> 
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;