import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const End = ({ isHompage }) => {
  return (
    <>
      <footer>
        <section className="   text-white flex justify-center">
          <div className="    flex-col  border-x-28 w-full ">
            {isHompage ? (
              <div className="grid place-items-center bg-neutral-700  py-10">
                <p className=" text-3xl md:text-5xl text-center font-medium">
                  Are You Interested in Our Services?
                </p>
                <br />
                <br />
                <button className="bg-white text-black rounded-full px-12 py-2.5 ">
                  CONTACT US
                </button>
              </div>
            ) : (
              <div className=" bg-neutral-300 grid place-items-center  md:flex  justify-center md:space-x-96 py-10 ">
                <p className="text-black text-3xl text-center ">
                  Need One Of Them? Give Us a Call Now!
                </p>
                <br />
                <button className="bg-orange-600 rounded-full px-7 py-2.5">
                  CONTACT US
                </button>
              </div>
            )}

            <div className="bg-neutral-950  p-4 ">
              <div className="md:flex justify-around ">
                <div>
                  <br />
                  <span className="text-xl">Our Services</span>
                  <br />
                  <br />
                  <ul>
                    <li>- Mechanics</li>
                    <li>- Car checks</li>
                    <li>- Oil and Break Checks</li>
                    <li>- Breakdown Service</li>
                    <li>- Tire Change</li>
                    <li>- Battery Change</li>
                  </ul>
                </div>
                <div>
                  <br />
                  <span span className="text-xl">
                    Opening Hours
                  </span>
                  <br />
                  <br />
                  <p>Mon - Fri: 7am - 10pm</p>
                  <p>Sat: 7am -3pm</p>
                  <br />
                  <div className=" flex gap-4">
                    <FaLinkedin size={30} /> <FaInstagram size={30} />{" "}
                    <FaFacebook size={30} />
                  </div>
                </div>
                <div>
                  <br />
                  <span span className="text-xl">
                    Contact Us
                  </span>
                  <br />
                  <br />
                  <p>Kumasi-Ghana</p>
                  <br />
                  <p>Tel:0596498103</p>
                  <p>Email:fiko8464@gmail.com</p>
                  <br />
                  <br />
                  <div className="text-3xl ">
                    <span className="text-orange-600">AUTO</span>DOCS
                  </div>
                </div>
              </div>
              <div className="grid place-items-center pt-15 pb-3">
                <hr className="text-amber-50 w-5/6 " />
              </div>
              <div className="grid place-items-center">
                © {new Date().getFullYear()} by Osei Kofi Frimpong.
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default End;
