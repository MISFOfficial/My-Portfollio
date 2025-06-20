import React from 'react';

const Profile = () => {
    return (
        <div className=' h-fit '>
            <img className='w-90 rounded-t-md' src="/profile.jpg" alt="" />
            <div class="relative  overflow-hidden group bg-linear-to-r/srgb from-[#262627] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#262627] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-b-md">
                {/* animated reflection */}
                <span class="absolute right-0 w-30 h-full top-0 transition-all duration-1000 transform translate-x-0 bg-white opacity-5 -skew-x-12 group-hover:-translate-x-90 ease"></span>

                {/* content */}
                <div className='h-30'>
                    hi
                </div>
            </div>
        </div>
    );
};

export default Profile;