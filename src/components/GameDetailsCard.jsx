import React from "react";
import { FaDownload, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const GameDetailsCard = ({ games }) => {
  const {downloadLink, coverPhoto, title, category, description, developer, ratings } =
    games;
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10">
      <title>{title}</title>
      <div className="bg-white shadow-2xl p-3 rounded-2xl w-full sm:w-10/12 md:w-8/12 lg:w-1/2">
        <img src={coverPhoto} alt="" className="w-full h-auto rounded-xl"/>
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary capitalize">{title}</h2>
        <div className="text-sm sm:text-base md:text-lg space-y-2 md:space-y-3">
          <p className="mt-3 md:mt-5">
            <span className="text-primary font-bold">Category: </span>{" "}
            {category}
          </p>
          <p>
            <span className="text-primary font-bold">Developer:</span>{" "}
            {developer}
          </p>
          <p>
            <span className="text-primary font-bold">Rating: </span>
            {ratings}
          </p>

          <div className="space-y-1 md:space-y-2">
            <p><span className="text-primary font-bold">Description: </span></p>
            <p>{description}</p>
          </div>
        </div>
        <Link to={downloadLink} className="btn btn-sm sm:btn-md hover:btn-primary bg-white text-primary border-primary mt-4 md:mt-6">Download links <span ><FaDownload /></span></Link>
      </div>
    </div>
  );
};

export default GameDetailsCard;
