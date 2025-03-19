import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { GiCarBattery } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { TbCar4WdFilled } from "react-icons/tb";
import { RiSettings3Fill } from "react-icons/ri";
import { GiSpanner } from "react-icons/gi";
import pic from "../assets/images/back.png";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import homepic from "../assets/images/homepic.png";
const HomePage = () => {
  return (
    <div>
      <section
        className="relative grid place-items-center   w-full h-screen bg-cover bg-center bg-no-repeat md:border-x-28 border-white mt-20"
        style={{ backgroundImage: `url(${homepic})` }}
      >
        <div className="absolute inset-0  bg-black opacity-60  border-white"></div>
      </section>

      <section className=" border-x-white md:border-x-28  ">
        <div className=" grid place-items-center overflow-hidden md:h-40 relative ">
          <img src={pic} className=" w-full" />
        </div>
        <section className=" grid place-items-center ">
          <div
            className="absolute top-70
          md:top-85 text-5xl md:text-8xl  text-center text-white "
          >
            <h1>
              A MECHANIC <br />
              YOU CAN TRUST
            </h1>
          </div>
          <div className="absolute top-110 md:top-145 md:grid grid-cols-3 md:w-5/6  lg:border-0 place-content-center text-center  ">
            <div className="bg-neutral-100 px-16 py-13 flex flex-col items-center justify-center">
              <GiSpanner size={45} />
              <h2 className="font-bold mt-2">Experienced Mechanics</h2>
            </div>
            <div className="bg-neutral-300 px-16 py-13 flex flex-col items-center justify-center">
              <FaStar size={45} />
              <h2 className="font-bold mt-2">Quality Service</h2>
            </div>
            <div className="bg-neutral-400 px-16 py-13 flex flex-col items-center justify-center">
              <FaCheck size={45} />
              <h2 className="font-bold mt-2">Affordable Prices</h2>
            </div>
          </div>
        </section>
      </section>
      <section className="  border-x-white md:border-x-28  ">
        <div className="grid place-items-center bg-neutral-300   py-10">
          <p className=" text-3xl md:text-4xl text-center font-medium ">
            We'll Fix You Up in a Jiffy
          </p>
          <br />
          <p className="text-center md:w-[700px]  pb-7">
            I'm a paragraph. Click here to add your own text and edit me i'm a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>

          <button className="bg-orange-600  text-white rounded-full px-12 py-2.5 ">
            FIND OUT MORE
          </button>
        </div>
      </section>
      <section className=" md:grid grid-cols-5 font-bold py-20  ">
        <div
          className="place-items-center
          text-2xl md:text-base"
        >
          <GiCarWheel className="md:text-8xl text-9xl" />
          <h2>Tire Change</h2>
        </div>
        <br />
        <div
          className="place-items-center 
          text-2xl md:text-base"
        >
          <GiCarBattery className="md:text-8xl text-9xl" />
          <h2>Battery Services</h2>
        </div>
        <br />
        <div className="place-items-center text-2xl md:text-base">
          <PiEngineFill className="md:text-8xl text-9xl" />
          <h2>Engine Services</h2>
        </div>
        <br />
        <div
          className="place-items-center
          text-2xl md:text-base"
        >
          <TbCar4WdFilled className="md:text-8xl text-9xl" />
          <h2>Oil and Brake Checks</h2>
        </div>
        <br />
        <div
          className="place-items-center
          text-2xl md:text-base"
        >
          <RiSettings3Fill className="md:text-8xl text-9xl" />
          <h2>Car Servicing</h2>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
