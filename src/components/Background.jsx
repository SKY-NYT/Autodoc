import React from "react";
import back from "../assets/images/back.png";
import pages from "../pages.json";
import { useLocation } from "react-router-dom";

const Background = () => {
  const location = useLocation();
  const currentPage = pages.find((page) => page.path == location.pathname);
  return (
    <>
      <section className="   text-white flex justify-center pt-24">
        <div className="flex-col  border-x-28 w-full  ">
          <div className="relative overflow-hidden h-40 ">
            <img src={back} className="w-full " />
            <div className="absolute top-0 w-full h-40 grid place-items-center">
              <h1 className=" text-6xl text-center text-white  font-medium">
                {currentPage ? currentPage.title : "Page Not Found"}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Background;
