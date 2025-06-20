import React from 'react';
import Navigation from '../Component/Navigation/Navigation';
import Profile from '../Component/Profile/Profile';
import { Outlet } from 'react-router';
import Header from '../Component/Navigation/Header';

const Home = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='sticky top-0 z-[1000]'>
                <Header></Header>
            </div>
            <div className='flex  gap-5 mt-18'>
                <div className='flex gap-10 sticky top-35.5 z-[1000]  h-fit'>
                    <Navigation></Navigation>
                    <Profile></Profile>
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;