import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchButton from "./searchbutton";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);

  const linkClass = ({ isActive }) =>
    isActive ? "text-amber-700" : "hover:text-amber-700";

  return (
    <nav>
      <div className=" md:pt-5 flex  md:grid place-items-center fixed w-full top-[-20px] z-30 bg-white">
        <div className="flex justify-center gap-9 p-7 md:p-4 ">
          <div className="text-3xl pr-28 ">
            <span className="text-orange-600">AUTO</span>DOCS
            <p className="text-base ">#1 Automobile Repairs </p>
          </div>
          <div className="md:hidden">
            {menuOpen ? (
              <IoClose
                size={40}
                onClick={toggle}
                className="fixed cursor-pointer z-50  right-5"
              />
            ) : (
              <LuMenu
                size={40}
                onClick={toggle}
                className="cursor-pointer absolute right-3"
              />
            )}
          </div>

          <div className=" hidden md:flex gap-8 pt-5">
            <NavLink to="/" className={linkClass}>
              {" "}
              Home{" "}
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              {" "}
              Services{" "}
            </NavLink>
            <NavLink to="/about_us" className={linkClass}>
              {" "}
              About Us{" "}
            </NavLink>
            <NavLink to="contact_us" className={linkClass}>
              {" "}
              Contact Us{" "}
            </NavLink>

            <div className="">
              <SearchButton />
            </div>
          </div>

          {/* Mobile Menu  */}
          {menuOpen && (
            <div className=" z-40 fixed bg-white top-0 right-0 h-full  py-40 px-15 flex w-5/6 flex-col gap-8 text-left font-bold text-2xl   md:hidden">
              <NavLink to="/" className={linkClass} onClick={toggle}>
                {" "}
                Home{" "}
              </NavLink>
              <NavLink to="/services" className={linkClass} onClick={toggle}>
                {" "}
                Services{" "}
              </NavLink>
              <NavLink to="/about_us" className={linkClass} onClick={toggle}>
                {" "}
                About Us{" "}
              </NavLink>
              <NavLink to="contact_us" className={linkClass} onClick={toggle}>
                {" "}
                Contact Us{" "}
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
