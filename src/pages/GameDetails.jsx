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
      <div className="bg-secondary text-white py-12 md:py-16 lg:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          Game <span className="text-primary">details</span> 
        </h2>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto my-6 md:my-10">
        <GameDetailsCard games={games}></GameDetailsCard>
      </div>
    </div>
  );
};

export default GameDetails;
