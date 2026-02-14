import React from "react";
import { useLoaderData, useParams } from "react-router";
import GameCard from "../components/GameCard";

const Games = () => {
  const obj = useParams();
  const gameData = useLoaderData();
  console.log(obj)

  return (
    <div>
      <div className="bg-secondary opacity-98 text-white py-20 text-center">
        <h2 className="text-4xl font-bold capitalize">
          List of <span className="text-primary">All</span> Games
        </h2>
      </div>
      <div className="w-11/12 mx-auto my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {gameData.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
