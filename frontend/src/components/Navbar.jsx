import { useState } from "react";
import {
  logo,
  search_icon,
  cart_icon,
  user_icon,
  menu_icon,
  close_menu_icon,
} from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={logo} className="w-24" alt="Roonac" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-black">HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/brands" className="flex flex-col items-center gap-1">
          <p className="text-black">COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-black">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="text-black">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="group relative">
        <div className="flex items-center gap-3">
          <img src={user_icon} className="w-5 cursor-pointer" alt="User" />
          <Link to="/cart" className="relative">
            <img src={cart_icon} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              10
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            <p className="cursor-pointer hover:text-black">Profile</p>
            <p className="cursor-pointer hover:text-black">Orders</p>
            <p className="cursor-pointer hover:text-black">Logout</p>
          </div>
        </div>
      </div>

      {/* sidebar for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 mt-5 cursor-pointer"
          >
            <img src={close_menu_icon} className="h-4 rotate-180" alt="" />
          </div>

          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/collections">COLLECTIONS</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
