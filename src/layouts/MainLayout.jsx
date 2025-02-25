import Navbar from "../components/Navbar";
import End from "../components/End";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import React from 'react'

const MainLayout = () => {
  return (
    <>
    <Navbar className="fixed pb-16" />
    <Outlet/>
    <End/>
    <ToastContainer/>
    
    </>
  )
}

export default MainLayout