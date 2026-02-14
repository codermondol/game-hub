import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

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
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;