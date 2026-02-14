import React from "react";
import aboutImg from "../assets/inner_about_img01.png";

const About = () => {
  return (
    <div>
      <title>Gamehub - About Us</title>
      <div className="bg-secondary text-white py-12 md:py-16 lg:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          About <span className="text-primary">Us</span>
        </h2>
      </div>
      <div
        className="my-10 md:my-16 lg:my-20 w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl text-primary font-bold uppercase mb-4 md:mb-5">
            About Game Hub
          </h3>
          <p className="text-secondary text-sm sm:text-base md:text-lg lg:text-xl">
            Welcome to Game Hub, your ultimate destination for gaming
            enthusiasts! We bring you the latest news, reviews, and insights
            from the world of video games, covering everything from blockbuster
            releases to indie gems. Our mission is to create a vibrant community
            where gamers can explore new titles, share experiences, and stay
            updated on industry trends. With expert guides, tips, and in-depth
            analysis, Game Hub makes gaming more exciting and accessible for
            everyone. Whether you’re a casual player or a hardcore gamer, we’re
            here to level up your gaming journey.
          </p>
        </div>
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-1/2 bg-white shadow-2xl rounded-2xl p-4 md:p-5">
          <img src={aboutImg} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
