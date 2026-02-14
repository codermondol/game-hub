import React, { use } from "react";
import PopularGame from "./PopularGame";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

const gamesPromise = fetch("/games.json").then((res) => res.json());

const PopularGames = () => {
  const gamesData = use(gamesPromise);
  return (
    <div className="w-11/12 mx-auto py-20">
      <h2 className="text-center mb-10 font-bold text-4xl">Popular Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gamesData.slice(0, 3).map((game) => (
          <PopularGame key={game.id} game={game}></PopularGame>
        ))}
      </div>
      <div className="my-10 text-center">
        <Link to='/games' className="btn text-white btn-primary hover:bg-white hover:text-primary">All Games Here <span><FaLongArrowAltRight /></span></Link>
      </div>
    </div>
  );
};

export default PopularGames;
