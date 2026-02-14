import React from "react";
import aboutImg from "../assets/inner_about_img01.png";

const About = () => {
  return (
    <div>
      <div className="bg-secondary opacity-98 text-white py-20 text-center">
        <h2 className="text-4xl font-bold uppercase">
          About <span className="text-primary">Us</span>
        </h2>
      </div>
      <div className="my-20 w-9/12 mx-auto flex justify-between items-center gap-15">
        <div className="w-1/2">
          <h3 className="text-3xl text-primary font-bold uppercase mb-5">About Game Hub</h3>
          <p className="text-secondary text-xl">
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
        <div className="w-1/2 bg-white shadow-2xl rounded-2xl p-5">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
