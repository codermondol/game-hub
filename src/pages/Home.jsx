import React from 'react';
import Banner from '../components/homeLayout/Banner';
import PopularGames from '../components/homeLayout/PopularGames';
import NewsLetter from '../components/homeLayout/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularGames></PopularGames>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;