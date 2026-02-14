import React from "react";
import newsletterimg from '../../assets/newsletter-illustration.webp'

const NewsLetter = () => {
  return (
    <div className="w-8/12 bg-white shadow-xl rounded-2xl mx-auto p-10 my-10 border-2 border-primary flex justify-between items-center gap-10">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold uppercase">Subscribe to our <span className="text-primary">Newsletter</span></h2>
        <p>
          Stay updated with the latest news, exclusive tips, and special offers
          delivered straight to your inbox. Join our newsletter and never miss
          an update!
        </p>
        <form>
          <fieldset className="w-80">
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
      <div>
        <img src={newsletterimg} alt="" />
      </div>
    </div>
  );
};

export default NewsLetter;
