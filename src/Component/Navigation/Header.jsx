import React from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TiArrowDownThick } from 'react-icons/ti';

const Header = () => {
    return (
        <div className='border-b flex items-center justify-between py-3 border-gray-600'>
            <h1 className='name-style text-4xl'>muksitul islam</h1>
            <div className='flex items-center gap-3'>
                {/* button */}
                <button class="relative px-7 py-2 cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#262627] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#262627] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-2xl">                  
                    <span class="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>

                    <span class="relative text-xl font-semibold flex items-center">Resume<span className='animate-bounce '><TiArrowDownThick size={'25px'}></TiArrowDownThick></span></span>
                </button>

                {/* menu */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <HiOutlineMenuAlt3></HiOutlineMenuAlt3>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 -ml-15  p-2 shadow border">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;