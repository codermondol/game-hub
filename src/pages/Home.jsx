import React from 'react';
import Banner from '../components/homeLayout/Banner';
import PopularGames from '../components/homeLayout/PopularGames';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularGames></PopularGames>
        </div>
    );
};

export default Home;