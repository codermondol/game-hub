import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center space-y-5'>
            <h2 className='font-bold text-5xl uppercase'>404 <span className='text-primary'>Not Found</span></h2>
            <Link to='/' className='btn btn-primary text-white uppercase border-2 border-primary hover:bg-white hover:text-primary'>Go back to Home page</Link>
        </div>
    );
};

export default ErrorPage;