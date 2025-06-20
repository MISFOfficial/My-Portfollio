import React from 'react';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

const Profile = () => {
    return (
        <div className=' h-fit '>
            <img className='w-80 rounded-t-xl' src="/profile.jpg" alt="" />
            <div class="relative  overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-b-xl">
                {/* animated reflection */}
                <span class="absolute right-0 w-30 h-full top-0 transition-all duration-1000 transform translate-x-0 bg-white opacity-5 -skew-x-12 group-hover:-translate-x-90 ease"></span>

                {/* content */}
                <div className='text-center py-5'>
                    <h1 className='text-2xl'>Muksitul Islam</h1>
                    <p className='text-green-400 font-bold'>Devoloper</p>
                    <div className='divider px-5'></div>
                    <div className='mt-5 flex items-center justify-center gap-3'>
                        {/* git btn */}
                        <button class="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                            <span class="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>

                            <div className='text-3xl'>
                                <FaGithub></FaGithub>
                            </div>
                        </button>
                        {/* git btn */}
                        <button class="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                            <span class="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>

                            <div className='text-3xl'>
                                <FaLinkedinIn></FaLinkedinIn>
                            </div>
                        </button>
                        {/* git btn */}
                        <button class="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                            <span class="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>

                            <div className='text-3xl'>
                                <FaYoutube></FaYoutube>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Profile;