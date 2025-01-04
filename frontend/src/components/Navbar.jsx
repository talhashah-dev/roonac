import { logo, search_icon, cart_icon, user_icon } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <div className="group relative">
        <div className="flex items-center gap-3">
          <img src={user_icon} className="w-5 cursor-pointer" alt="User" />
          <Link to="/cart" className="relative">
            <img src={cart_icon} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
          </Link>
        </div>
        <div className="group-hover:block hidden absolute dropdown-menu left-0 pt-4">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            <p className="cursor-pointer hover:text-black text-right">
              پروفایل
            </p>
            <p className="cursor-pointer hover:text-black text-right">
              سفارشات
            </p>
            <p className="cursor-pointer hover:text-black text-right">خروج</p>
          </div>
        </div>
      </div>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-black">درباره</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="text-black">ارتباط</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/brands" className="flex flex-col items-center gap-1">
          <p className="text-black">برندها</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-black">خانه</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <img src={logo} className="w-24" alt="Roonac" />
    </div>
  );
};

export default Navbar;
