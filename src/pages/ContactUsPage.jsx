import React from "react";
import Background from "../components/Background";
import contactus from "../contactus.json";

const ContactUs = () => {
  return (
    <section className="relative">
      <div>
        <Background className="pb-1.5" />
      </div>
      <div className="  md:grid place-items-center py-10">
        <div className="md:grid grid-cols-3 gap-x-40  gap-y-20 text-center px-20 pb-5">
          {contactus.map((contact) => (
            <div>
              <h2 className="font-medium  text-3xl md:text-2xl pb-2">
                {contact.title}
              </h2>

              <div className="md:text-left pb-3">
                <p>{contact.description[0]}</p>
                <p>{contact.description[1]}</p>
              </div>
            </div>
          ))}
          <div />
        </div>

        <div>
          <form
            action=""
            className="flex flex-col md:text-left gap-y-3  ml-70 md:ml-0"
          >
            <div className=" md:flex flex-row gap-7">
              <div className="flex flex-col ">
                <label htmlFor="firstname">Firstname *</label>
                <input
                  className="text-black border-b-neutral-400 border-b-2 w-80 md:w-92 focus:outline-none"
                  id="firstname"
                  type="text"
                  name="firstname"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastname">Lastname *</label>
                <input
                  className="text-black border-b-neutral-400 border-b-2 w-80 md:w-92 focus:outline-none"
                  id="lastname"
                  type="text"
                  name="lastname"
                  required
                />
              </div>
            </div>

            <label htmlFor="email">Email *</label>
            <input
              className="text-black border-b-neutral-400 border-b-2  w-80 md:w-3xl focus:outline-none"
              id="email"
              type="email"
              name="email"
              required
              placeholder=""
            ></input>

            <label htmlFor="subject">Subject</label>
            <input
              className="text-black  border-b-neutral-400 border-b-2 w-80 md:w-3xl focus:outline-none"
              id="subject"
              type="tel"
              name="subject"
              placeholder=""
            ></input>

            <label htmlFor="message">Message</label>
            <textarea
              className="text-black border-b-neutral-400 border-b-2 w-80 md:w-3xl focus:outline-none"
              id="message"
              type="message"
              name="message"
              placeholder=""
            ></textarea>
            <div className="py-3 grid place-content-center mr-68 md:mr-0">
              <button
                type="submit"
                className="bg-orange-600 rounded-full px-35 md:px-40 py-2.5 text-white "
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div />
      </div>
    </section>
  );
};

export default ContactUs;
