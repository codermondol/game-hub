import React from "react";
import { Link, NavLink } from "react-router";

const GameCard = ({ game }) => {
  const {id, coverPhoto, title, category, developer, ratings, description} = game;
  return (
    <Link to={`/games/${id}`} className="border border-gray-300 rounded-xl ">
      <img
        src={coverPhoto}
        alt=""
        className="rounded-t-lg w-full h-[240px] object-cover"
      />
      <div className="p-3 space-y-2 text-color">
        <h4 className="text-xl font-bold font-sans">{title}</h4>
        <p className="mt-5">
          <span className="text-primary font-bold">Category: </span> {category}
        </p>
        <p>
          <span className="text-primary font-bold">Developer:</span> {developer}
        </p>
        <p>
          <span className="text-primary font-bold">Rating: </span>
          {ratings}
        </p>
        <p>
          <span className="text-primary font-bold">Description:</span>{" "}
          {description}
        </p>
        {/* <NavLink to={`/games/${id}`} className="btn text-white btn-primary hover:bg-white hover:text-primary">
          More Details
        </NavLink> */}
      </div>
    </Link>
  );
};

export default GameCard;
