import React from "react";
import newsletterimg from '../../assets/newsletter-illustration.webp'

const NewsLetter = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 bg-white shadow-xl rounded-2xl mx-auto p-5 md:p-8 lg:p-10 my-10 border-2 border-primary flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10">
      <div className="space-y-3 text-center lg:text-left">
        <h2 className="text-xl md:text-2xl font-bold uppercase">Subscribe to our <span className="text-primary">Newsletter</span></h2>
        <p className="text-sm md:text-base">
          Stay updated with the latest news, exclusive tips, and special offers
          delivered straight to your inbox. Join our newsletter and never miss
          an update!
        </p>
        <form className="flex justify-center lg:justify-start">
          <fieldset className="w-full max-w-xs md:max-w-sm">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item text-white">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
        <img src={newsletterimg} alt="" className="w-full h-auto"/>
      </div>
    </div>
  );
};

export default NewsLetter;
