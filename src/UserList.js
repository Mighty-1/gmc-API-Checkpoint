import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    // Fetch user data from API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUser(response.data); // Save data to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Run once when the component is mounted

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
