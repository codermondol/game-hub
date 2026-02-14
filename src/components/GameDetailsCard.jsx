import React from "react";
import { FaDownload, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const GameDetailsCard = ({ games }) => {
  const {downloadLink, coverPhoto, title, category, description, developer, ratings } =
    games;
  return (
    <div className="flex justify-between items-center gap-10">
      <div className="bg-white shadow-2xl p-3 rounded-2xl">
        <img src={coverPhoto} alt="" />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold text-primary capitalize">{title}</h2>
        <div className="text-xl space-y-3">
          <p className="mt-5">
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

          <div className="space-y-2">
            <p><span className="text-primary font-bold">Description: </span></p>
            <p>{description}</p>
          </div>
        </div>
        <Link to={downloadLink} className="btn hover:btn-primary bg-white text-primary border-primary my-3 ">Download links <span ><FaDownload /></span></Link>
      </div>
    </div>
  );
};

export default GameDetailsCard;
