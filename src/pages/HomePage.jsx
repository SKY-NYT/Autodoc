import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { GiCarBattery } from "react-icons/gi";
import { PiEngineFill } from "react-icons/pi";
import { TbCar4WdFilled } from "react-icons/tb";
import { RiSettings3Fill } from "react-icons/ri";

const HomePage = () => {
  return (
    <div>
      <section className="p-50"></section>

      <section className=" border-x-white border-x-28  ">
        <div className="grid place-items-center bg-neutral-300   py-10">
          <p className=" text-4xl text-center font-medium">
            We'll Fix You Up in a Jiffy
          </p>
          <br />
          <p className="text-center w-200 ">
            I'm a paragraph. Click here to add your own text and edit me i'm a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <br />
          <br />
          <button className="bg-orange-600  text-white rounded-full px-12 py-2.5 ">
            FIND OUT MORE
          </button>
        </div>
      </section>
      <section className="grid grid-cols-5 font-bold py-20">
        <div className="place-items-center">
          <GiCarWheel size={90} />
          <h2 className="text-center">Tire Change</h2>
        </div>
        <div className="place-items-center">
          <GiCarBattery size={90} />
          <h2>Battery Services</h2>
        </div>
        <div className="place-items-center">
          <PiEngineFill size={90} />
          <h2>Engine Services</h2>
        </div>
        <div className="place-items-center">
          <TbCar4WdFilled size={90} />
          <h2>Oil and Brake Checks</h2>
        </div>
        <div className="place-items-center">
          <RiSettings3Fill size={90} />
          <h2>Car Servicing</h2>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
