import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <title>Gamehub - Contact Us</title>
      <div className="bg-secondary text-white py-12 md:py-16 lg:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          Contact <span className="text-primary">Us</span>
        </h2>
      </div>

      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-10 md:my-16 lg:my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 font-bold">
        
        <div className="w-full bg-white shadow-xl p-6 md:p-8 lg:p-10 text-center rounded-xl">
          
          <div className="mx-auto mb-4 p-3 bg-primary w-16 h-16 md:w-20 md:h-20 text-white rounded-full flex items-center justify-center">
            <IoCall className="text-xl md:text-2xl" />
          </div>

          <div className="text-sm md:text-base">
            <p>Call: +0011-564-543</p>
            <p>Monday-Friday (10am-18pm)</p>
          </div>
        </div>

        <div className="w-full bg-white shadow-xl p-6 md:p-8 lg:p-10 text-center rounded-xl">
          
          <div className="mx-auto mb-4 p-3 bg-primary w-16 h-16 md:w-20 md:h-20 text-white rounded-full flex items-center justify-center">
            <MdEmail className="text-xl md:text-2xl" />
          </div>

          <div className="text-sm md:text-base break-words">
            <p>Email: cavalr32@gmail.com</p>
            <p>Web: www.example.com</p>
          </div>
        </div>

        <div className="w-full bg-white shadow-xl p-6 md:p-8 lg:p-10 text-center rounded-xl">
          
          <div className="mx-auto mb-4 p-3 bg-primary w-16 h-16 md:w-20 md:h-20 text-white rounded-full flex items-center justify-center">
            <FaLocationDot className="text-xl md:text-2xl" />
          </div>

          <div className="text-sm md:text-base">
            <p>Location: Newyork city 23 house/3 Road</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
