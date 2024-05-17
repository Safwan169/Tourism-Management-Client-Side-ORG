import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { myContext } from "./Authentication";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";
import Lottie from "lottie-react";
// import Animation- from "./groovyWalk.json";
import pp from '../../public/pp.json'



const Nav = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
      document.querySelector('html').setAttribute('data-theme', localTheme);
    }
  }, []);

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.querySelector('html').setAttribute('data-theme', newTheme);
  };
 



  const info = useContext(myContext)
  const { user, setDep2, dep2 } = info
  //console.log(user)
  const [use, setUse] = useState(false)
  const signOutt = () => {

    const auth = getAuth();
    signOut(auth)
      .then(() => {


        Swal.fire({
          title: "You have been successfully logged out",
          icon: "success",
          showConfirmButton: false,
          timer: 2000

        });
        setDep2(!dep2)


      })
  }


  const nav = <>
    <li className="text-xl font-semibold"><NavLink to={'/'} style={({ isActive }) => ({
      background: isActive ? "white" : "", color: isActive ? "#1bc91b" : "black"
    })}>Home</NavLink></li>

    <div className="lg:flex">  <li className="text-xl font-semibold">
      <NavLink to={'/spot'} style={({ isActive }) => ({
        background: isActive ? "white" : "", color: isActive ? "#1bc91b" : "black"
      })}>All Tourists Spot</NavLink>
    </li>
    </div>
    <div className="lg:flex">  <li className="text-xl font-semibold">
      <NavLink to={'/add'} style={({ isActive }) => ({
        background: isActive ? "white" : "", color: isActive ? "#1bc91b" : "black"
      })}>Add Tourists Spot</NavLink>
    </li>
    </div>
    <div className="lg:flex">  <li className="text-xl font-semibold">
      <NavLink to={'/list'} style={({ isActive }) => ({
        background: isActive ? "white" : "", color: isActive ? "#1bc91b" : "black"
      })}>My List</NavLink>
    </li>
    </div>

    <div className="navbar-end visible lg:hidden md:hidden w-[80px] ">
      {
        user ? <Link ><button onClick={() => signOutt()} className=" font-bold  p-1 btn  justify-center flex rounded-xl w-[80px]">Log out</button></Link> : <Link to={'/login'}><button className="btn font-bold p-1  justify-center flex rounded-xl w-[80px]">Log in</button></Link>
      }
    </div>

  </>
  return (
    <div className='static navbar bg-base-100 px-20'>
      <Toaster></Toaster>
      <div className="navbar-start">

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52">
            {nav}
          </ul>
        </div>
        <a className="flex items-center text-xl"><img className="w-24 h-full" src="https://i.ibb.co/R44y6TY/Brite-logo-300x300.png" alt="" /> </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {nav}
        </ul>
      </div>
      <div className="navbar-end">

      </div>
      <div className="navbar-end lg:flex md:flex hidden    w-[120px] ml-4">
        {
          user ? <div onClick={() => setUse(!use)} className="  -ml-[50px] tooltip hover:tooltip-open tooltip-left z-30" data-tip={user.displayName ? user.displayName : "Not Available"}  ><img className="rounded-[50%] w-[50px] bg-white " src={user.photoURL} alt="" /></div> : <button onClick={() => setUse(!use)} className=" text-black justify-center  "><FaUserCircle size={40} className="hover:text-red-400" /></button>}
        {
          use ? <div className="absolute border-2 z-50 bg-gray-400 text-white space-y-2 border-gray-300 rounded-xl py-2 top-16  right-9 px-10 mt-4  font-semibold">
            {
              user ? <Link className="hover:underline" onClick={() => signOutt()}>Sign Out</Link > : <div className="flex flex-col space-y-2">
                <Link className="hover:underline" to={"/login"}>Sign In</Link >
                <Link className="hover:underline" to={"/register"} >Register</Link >
              </div>
            }
          </div> : ''
        }

      </div>
      <div className=" ml-4">


        <div className="flex items-center">
          <input
            type="checkbox"
            id="toggleTheme"
            checked={theme === 'dark'}
            onChange={handleToggle}
            className="hidden"
          />
          <label
            htmlFor="toggleTheme"
            className={`w-12 h-6 flex items-center pl-1 rounded-full cursor-pointer ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`}
          >
            <span className={`block w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : ''}`}></span>
          </label>
        </div>


      </div>


    </div>


  );
};

export default Nav;