import Navbar from "../components/Navbar";
import End from "../components/End";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import React from "react";

const MainLayout = () => {
  const location = useLocation();
  const isHompage = location.pathname === "/";

  return (
    <>
      <Navbar />
      <Outlet />
      <End isHompage={isHompage} />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
