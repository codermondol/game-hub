import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="bg-secondary opacity-98 text-white py-20 text-center">
        <h2 className="text-4xl font-bold uppercase">
          Contact <span className="text-primary">Us</span>
        </h2>
      </div>
      <div className="w-8/12 mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-5 font-bold">
        <div className="w-full bg-white shadow-xl p-10 text-center ">
          <div className="mx-auto m-5 p-3 bg-red-300 w-20 h-20 text-white rounded-full flex items-center justify-center">
            <IoCall className="text-2xl" />
          </div>
          <div className="">
            <p>call: +0011-564-543</p>
            <p>Monday-Friday (10am-18pm)</p>
          </div>
        </div>
        <div className="w-full bg-white shadow-xl p-10 text-center ">
          <div className="mx-auto m-5 p-3 bg-red-300 w-20 h-20 text-white rounded-full flex items-center justify-center">
            <MdEmail className="text-2xl" />
          </div>
          <div className="">
            <p>Email : cavalr32@gmail.com</p>
            <p>Web: www.example.com</p>
          </div>
        </div>
        <div className="w-full bg-white shadow-xl p-10 text-center ">
          <div className="mx-auto m-5 p-3 bg-red-300 w-20 h-20 text-white rounded-full flex items-center justify-center">
            <FaLocationDot className="text-2xl" />
          </div>
          <div className="">
            <p>Location : Newyork city 23 house/3 Road</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
