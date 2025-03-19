import React from "react";
import Background from "../components/Background";
import services from "../services.json";
const ServicesPage = () => {
  return (
    <section className="relative">
      <div>
        <Background className="pb-1.5" />
      </div>
      <div className=" p-5 md:p-20 grid place-items-center  py-10 ">
        <div className="md:grid grid-cols-3 gap-6 text-center  md:w-5/6">
          {services.map((service, index) => (
            <div key={index}>
              <span className="text-amber-600 text-7xl  md:text-7xl">
                {service.id}
              </span>
              <p className="pb-6 text- ">
                <h2 className="font-bold text-2xl md:text-xl">
                  {service.title}
                </h2>
                <br />
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
