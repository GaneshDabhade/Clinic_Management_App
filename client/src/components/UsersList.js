import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([{}]);
  useEffect(()=>{
    async function getAllUsers(){
      try {
        const resp = await axios.get('http://localhost:5000/users/listAll');
        console.log("List All users API Response: ", resp.data);
        setUsers(resp.data);
      } catch (error) {
        throw error;
      }
    }
    getAllUsers();
  }, []);

  return (
    <>
      <div>List of Users: </div>
      <div>{users.map((user)=>(
        <ul>
          <li>{user.username}</li>
        </ul>
        
      ))}</div>
    </>
  )
}

export default UsersList;