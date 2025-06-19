import React from 'react';
import Navigation from '../Component/Navigation/Navigation';
import Profile from '../Component/Profile/Profile';
import { Outlet } from 'react-router';
import Header from '../Component/Navigation/Header';

const Home = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Header></Header>
            <div className='flex mt-20'>
                <div className='flex'>
                    <Navigation></Navigation>
                    <Profile></Profile>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;