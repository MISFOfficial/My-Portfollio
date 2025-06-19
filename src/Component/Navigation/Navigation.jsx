import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { GrProjects, GrResume } from 'react-icons/gr';
import { LuNotebookTabs } from 'react-icons/lu';
import { SiDataiku } from 'react-icons/si';
import { Link } from 'react-router';

const Navigation = () => {
    return (
        <div className=' hidden lg:flex lg:flex-col gap-10'>
            <div className='border p-4 border-gray-600 rounded-md bg-linear-to-r/srgb from-[#262627] to-[#464a4a]'>
                <h1>logo</h1>
            </div>
            <ul className=''>

                <Link>
                    <li className='border p-4 border-gray-600 rounded-t-md flex flex-col items-center justify-center gap-1 bg-linear-to-r/srgb from-[#262627] to-[#464a4a] '>
                        <div className='text-2xl'><SiDataiku></SiDataiku></div>
                        <p className='font-semibold'>About</p>
                    </li>
                </Link>

                <Link>
                    <li className='border-x border-b p-4 border-gray-600 flex flex-col items-center justify-center gap-1 bg-linear-to-r/srgb from-[#262627] to-[#464a4a]'>
                        <div className='text-2xl'><GrResume></GrResume></div>
                        <p className='font-semibold'>Resume</p>
                    </li>
                </Link>

                <Link>
                    <li className='border-x border-b p-4 border-gray-600 flex flex-col items-center justify-center gap-1 bg-linear-to-r/srgb from-[#262627] to-[#464a4a]'>
                        <div className='text-2xl'><GrProjects></GrProjects></div>
                        <p className='font-semibold'>Project</p>
                    </li>
                </Link>

                <Link>
                    <li className='border-x border-b p-4 border-gray-600 flex flex-col items-center justify-center gap-1 bg-linear-to-r/srgb from-[#262627] to-[#464a4a]'>
                        <div className='text-2xl'><LuNotebookTabs></LuNotebookTabs></div>
                        <p className='font-semibold'>Blog</p>
                    </li>
                </Link>

                <Link>
                    <li className='border-x border-b p-4 border-gray-600 flex flex-col items-center justify-center gap-1 rounded-b-md bg-linear-to-r/srgb from-[#262627] to-[#464a4a]'>
                        <div className='text-2xl'><FaTelegramPlane></FaTelegramPlane></div>
                        <p className='font-semibold'>Contact</p>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Navigation;