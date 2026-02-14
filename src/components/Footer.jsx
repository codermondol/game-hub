import React from "react";
import logoImg from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaLocationDot, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-secondary opacity-98 text-white py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-11/12 mx-auto gap-5">
        <div className="space-y-5">
          <img src={logoImg} alt="" />
          <p>
            Game Hub – Your ultimate destination for the latest games, news, and epic adventures!
          </p>
          <div>
            <div className="flex items-center gap-3">
              <span>
                <FaLocationDot />
              </span>
              Address : PO Box W75 Street lan West new queens
            </div>
            <div className="flex items-center gap-3">
              <span>
                <FaHeadphones />
              </span>
              Phone : +24 1245 654 235
            </div>
            <div className="flex items-center gap-3">
              <span>
                <MdEmail />
              </span>
              Email : info@exemple.com
            </div>
          </div>
        </div>
        <div>
          <h4 className="uppercase text-primary font-bold text-xl border-b-3 mb-5">
            Important links
          </h4>
          <div className="flex flex-col gap-3">
            <NavLink to="#" className='hover:text-primary'>privacy</NavLink>
            <NavLink to="#" className='hover:text-primary'>refund policy</NavLink>
            <NavLink to="#" className='hover:text-primary'>terms and conditions</NavLink>
            <NavLink to="#" className='hover:text-primary'>more details</NavLink>
          </div>
        </div>
        <div>
          <h4 className="uppercase text-primary font-bold text-xl border-b-3 mb-5">
            Navigation links
          </h4>
          <div className="flex flex-col gap-3">
            <NavLink to="/" className='hover:text-primary'>Home</NavLink>
            <NavLink to="/about" className='hover:text-primary'>About</NavLink>
            <NavLink to="/games" className='hover:text-primary'>Games</NavLink>
            <NavLink to="/contact" className='hover:text-primary'>Contact</NavLink>
          </div>
        </div>
        <div>
          <h4 className="uppercase text-primary font-bold text-xl border-b-3 mb-5">
            Social links
          </h4>
          <div className=" flex gap-3">
            <NavLink to="#" className='hover:text-primary bg-primary p-2 border-2 border-primary hover:text-primary hover:bg-white'><FaFacebookF /></NavLink>
            <NavLink to="#" className='hover:text-primary bg-primary p-2 border-2 border-primary hover:text-primary hover:bg-white'><FaXTwitter /></NavLink>
            <NavLink to="#" className='hover:text-primary bg-primary p-2 border-2 border-primary hover:text-primary hover:bg-white'><FaInstagram /></NavLink>
            <NavLink to="#" className='hover:text-primary bg-primary p-2 border-2 border-primary hover:text-primary hover:bg-white'><FaYoutube /></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
