import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../components/Loading';

const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
              {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet> }  
            </main>
        </div>
    );
};

export default HomeLayout;