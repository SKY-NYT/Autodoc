// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="bg-[#f40000]">
        <div className=" flex justify-between px-10 pt-8 text-white">
          {openMenu ? (
            <IoMdClose
              onClick={() => setOpenMenu(false)}
              className="md:hidden text-2xl"
            />
          ) : (
            <IoMenu
              onClick={() => setOpenMenu(true)}
              className="md:hidden text-2xl"
            />
          )}

          <div>
            <img src="./images/wsports.jpg" alt="" className="h-14 w-36" />
          </div>
          <div className="hidden md:block">
            <input
              className="w-72 h-8 rounded-md text-sm px-6 py-2"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div>
            <p>Phone Logo</p>
          </div>
        </div>
        <div className="md:flex hidden  justify-center text-white gap-11 text-lg font-semibold pb-8">
          <Link
            to="/"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            Shop
          </Link>
          <Link
            to="/services"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            Services
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            Contact
          </Link>
        </div>
      </div>

      {openMenu && (
        <div className="bg-[#f40000] flex flex-col md:hidden gap-4 text-white px-2">
          <Link
            to="/"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            Shop
          </Link>
          <Link
            to="/services"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            Services
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500 rounded-md "
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
