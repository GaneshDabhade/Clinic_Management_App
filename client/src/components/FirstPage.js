import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const FirstPage = () => {
  return (
    <>
    <ul>
      {/* <li><Link to="/users/login">Login</Link></li>
      <li><Link to="/users/register">Register</Link></li> */}
    </ul>
    <Outlet />
    </>
  )
}

export default FirstPage;