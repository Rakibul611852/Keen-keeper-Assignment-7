import React from 'react'

import logo from "../../../assets/logo.png"
import { AiOutlineHome } from "react-icons/ai";
import { RiTimeLine } from 'react-icons/ri';
import { ImStatsDots } from 'react-icons/im';
import { NavLink } from 'react-router';

const Navbar = () => {
const Links = <>
  <li>
    <NavLink 
      to={"/"} 
      className={({ isActive }) => 
      `flex items-center mr-1 
      border border-green-200 rounded-md px-2 py-1 font-semibold ${ isActive 
          ? " text-white bg-[#244D3F] px-2 py-1 rounded" 
          : ""}`
      }
    >
      <AiOutlineHome /> Home
    </NavLink>
  </li>
  
  <li>
    <NavLink 
      to={"/timeline"} 
       className={({ isActive }) => 
      `flex items-center mr-1 
      border border-green-200 rounded-md px-2 py-1 font-semibold${ isActive 
          ? " text-white bg-[#244D3F] px-2 py-1 rounded" 
          : ""}`
      }
    >
      <RiTimeLine /> Timeline
    </NavLink>
  </li>

  <li>
    <NavLink 
      to={"/stats"} 
       className={({ isActive }) => 
      `flex items-center mr-1 
      border border-green-200 rounded-md px-2 py-1 font-semibold ${ isActive 
          ? " text-white bg-[#244D3F] px-2 py-1 rounded" 
          : ""}`
      }
    >
      <ImStatsDots /> Stats
    </NavLink>
  </li>
</>

  return (
<div className='navbar bg-base-100 shadow-lg'>
     <div className='flex justify-between container mx-auto'>

             {/* left */}
         <div className="">
            <img src={logo} alt="Logo" />
         </div>

             {/* right */}
         <div>
             <ul className="flex items-center gap-5">
             {Links}
             </ul>
         </div>
     </div>
</div>
  )
}
export default Navbar;
                       