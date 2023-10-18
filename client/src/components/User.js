import { Outlet } from 'react-router-dom';

const User = () =>{
  return (
    <>
      {/* <ul>
        <li><Link to='/users/listAll'>List All Users</Link></li>
        <li><Link to={`/users/register`}>Register</Link></li>
        <li><Link to={`/users/getUser/${username}`}>Get Single User</Link></li>
        <li><Link to={`/users/updateUser/${username}`}>Update User</Link></li>
        <li><Link to={`/users/deleteUser/${username}`}>Delete User</Link></li>
      </ul> */}
      <Outlet />
    </>
  );
} 

export {User};