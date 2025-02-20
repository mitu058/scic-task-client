import React from 'react';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;