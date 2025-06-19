import React from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
    return (
        <div className='border-b flex items-center justify-between'>
            <h1>Muksitul Islam</h1>
            <div className='flex items-center gap-3'>
                <p>Dummy text</p>
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