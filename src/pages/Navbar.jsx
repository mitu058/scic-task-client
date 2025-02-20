import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FormContext } from '../context/LoginContext';
import axios from 'axios';

const Navbar = () => {
    const { googleLogin, user, setUser } = useContext(FormContext);
    const navigate = useNavigate();
  
    const handelGoogleLogin = () => {
      googleLogin().then((res) => {
        setUser(res.user);
          navigate("/");
          const obj = {
              email: res.user.email,
              name: res.user.displayName,
              photoURL: res.user.photoURL,
          }
          axios.post(`${import.meta.env.VITE_URL}/user`, obj)
              .then(res => {
              console.log(res.data)
          })
      });
    };


    const links = <>
     <NavLink to='/'>Home</NavLink>
        <NavLink to='/add-task'>Add Task</NavLink>
        <NavLink to='/recorded-task'>Recorded Task</NavLink>
    </>
       
    
    return (
        <div className=' sticky z-50 top-0'>
            <div className="navbar text-white bg-blue-950 px-10 my-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">TrackFlow</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-5 font-semibold">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    
    <button onClick={handelGoogleLogin} className="btn bg-fuchsia-700 text-white">Login With google</button>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;
