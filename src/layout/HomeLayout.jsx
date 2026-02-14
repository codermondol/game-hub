import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';

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
            <ToastContainer />
        </div>
    );
};

export default HomeLayout;