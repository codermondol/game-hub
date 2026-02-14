import React from "react";
import logoImg from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaLocationDot, FaXTwitter, FaYoutube, FaHeadphones } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-secondary text-white py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-11/12 md:w-10/12 mx-auto gap-6 md:gap-8">

        {/* Logo & Contact */}
        <div className="space-y-4 md:space-y-5 sm:text-left">
          <img src={logoImg} alt="Game Hub Logo" className="mx-auto sm:mx-0 w-32 md:w-36" />
          <p className="text-sm md:text-base">
            Game Hub – Your ultimate destination for the latest games, news, and epic adventures!
          </p>
          <div className="space-y-2 md:space-y-3 text-sm md:text-base">
            <div className="flex items-center gap-2 md:gap-3">
              <FaLocationDot className="text-primary" />
              <span>Address: PO Box W75 Street lan West New Queens</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <FaHeadphones className="text-primary" />
              <span>Phone: +24 1245 654 235</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <MdEmail className="text-primary" />
              <span>Email: info@exemple.com</span>
            </div>
          </div>
        </div>

        {/* Important Links */}
        <div className=" sm:text-left mt-6 sm:mt-0">
          <h4 className="uppercase text-primary font-bold text-lg md:text-xl border-b-2 mb-4 md:mb-5 pb-1 md:pb-2">
            Important links
          </h4>
          <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base">
            <NavLink to="#" className="hover:text-primary">Privacy</NavLink>
            <NavLink to="#" className="hover:text-primary">Refund Policy</NavLink>
            <NavLink to="#" className="hover:text-primary">Terms & Conditions</NavLink>
            <NavLink to="#" className="hover:text-primary">More Details</NavLink>
          </div>
        </div>

        {/* Navigation Links */}
        <div className=" sm:text-left mt-6 sm:mt-0">
          <h4 className="uppercase text-primary font-bold text-lg md:text-xl border-b-2 mb-4 md:mb-5 pb-1 md:pb-2">
            Navigation links
          </h4>
          <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-base">
            <NavLink to="/" className="hover:text-primary">Home</NavLink>
            <NavLink to="/about" className="hover:text-primary">About</NavLink>
            <NavLink to="/games" className="hover:text-primary">Games</NavLink>
            <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>
          </div>
        </div>

        {/* Social Links */}
        <div className=" sm:text-left mt-6 sm:mt-0">
          <h4 className="uppercase text-primary font-bold text-lg md:text-xl border-b-2 mb-4 md:mb-5 pb-1 md:pb-2">
            Social links
          </h4>
          <div className="flex sm:justify-start gap-2 md:gap-3">
            <NavLink to="#" className="bg-primary p-2 md:p-3 border-2 border-primary rounded hover:bg-white hover:text-primary">
              <FaFacebookF />
            </NavLink>
            <NavLink to="#" className="bg-primary p-2 md:p-3 border-2 border-primary rounded hover:bg-white hover:text-primary">
              <FaXTwitter />
            </NavLink>
            <NavLink to="#" className="bg-primary p-2 md:p-3 border-2 border-primary rounded hover:bg-white hover:text-primary">
              <FaInstagram />
            </NavLink>
            <NavLink to="#" className="bg-primary p-2 md:p-3 border-2 border-primary rounded hover:bg-white hover:text-primary">
              <FaYoutube />
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
