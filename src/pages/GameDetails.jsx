import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import GameDetailsCard from "../components/GameDetailsCard";

const GameDetails = () => {
    const gamesData = useLoaderData()
    const {id} = useParams()
    const [games, setGames] = useState({})

    useEffect(() => {

        const gamesDetails = gamesData.find(game => game.id == id)
        setGames(gamesDetails)
    }, [gamesData, id])


  return (
    <div>
      <div className="bg-secondary opacity-98 text-white py-20 text-center">
        <h2 className="text-4xl font-bold capitalize">
          Game <span className="text-primary">details</span> 
        </h2>
      </div>
      <div className="w-10/12 mx-auto my-10">
        <GameDetailsCard games={games}></GameDetailsCard>
      </div>
    </div>
  );
};

export default GameDetails;
