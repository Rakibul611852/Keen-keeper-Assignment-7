import React from 'react'
import logo from "../../../assets/logo.png"
import { AiOutlineHome } from "react-icons/ai";
import { RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';
import { NavLink } from 'react-router';
import { RxDropdownMenu } from 'react-icons/rx';

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 border border-green-200 rounded-md px-3 py-1 font-semibold ${
      isActive ? "text-white bg-[#244D3F]" : "hover:bg-[#244D3F] hover:text-white"
    }`;

  const Links = (
    <>
      <li>
        <NavLink to={"/"} className={linkClass}>
          <AiOutlineHome /> Home
        </NavLink>
      </li>

      <li>
        <NavLink to={"/timeline"} className={linkClass}>
          <RiTimeLine /> Timeline
        </NavLink>
      </li>

      <li>
        <NavLink to={"/stats"} className={linkClass}>
          <ImStatsDots /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg px-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo"/>
        </div>

        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-xl">
            <RxDropdownMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            {Links}
          </ul>
        </div>

        {/* 🔥 DESKTOP MENU (Tablet + Desktop) */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-5">
            {Links}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;