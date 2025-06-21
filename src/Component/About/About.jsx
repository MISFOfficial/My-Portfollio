import React from 'react';
import { motion } from "motion/react"
import { FiTriangle } from 'react-icons/fi';
import { SiGoogleearthengine } from 'react-icons/si';

const About = () => {
    return (
        <div className=''>
            {/* top portion */}
            <motion.div
                initial={{ x: 50, opacity: .5 }}
                animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1 }
                }}
                class="relative px-7 py-2 cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">
                <span class="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-200 ease"></span>
                <div className=' justify-items-start p-10'>
                    <h1 className='text-4xl font-bold text-gray-300'>Know about me</h1>
                    <p className='text-start mt-4 text-gray-400'>Web development professional with comprehensive understanding of both front-end and
                        back-end frameworks. Proven ability to design and implement scalable web applications
                        while maintaining focus on collaborative team dynamics. Known for adaptability and
                        consistently meeting project deadlines, leveraging skills in JavaScript, HTML, CSS, and
                        various backend technologies.
                    </p>
                </div>
            </motion.div>

            <div className='flex gap-5 mt-5' >
                {/* left portion */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1, delay: .2 }
                    }} class="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">
                    <div className=' justify-items-start p-7'>
                        <div className='flex items-center gap-3'>
                            {/* git btn */}
                            <button class="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                                <div className='text-3xl'>
                                    <SiGoogleearthengine></SiGoogleearthengine>
                                </div>
                            </button>
                            <h1 className='text-xl'>UI/UX Design</h1>
                        </div>
                        <div class="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#242424] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-5 rounded-lg w-full mt-3">
                            <div className=''>
                                <div className='flex items-center justify-between'>
                                    <h1>Project completed</h1>
                                    <p className='font-bold text-green-400'>3+</p>
                                </div>
                                <div className='divider px-0'></div>
                                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem labore magnam error obcaecati dicta saepe repellendus iusto minima incidunt!</p>
                                <div className='divider px-0'></div>
                                <div className='flex items-center justify-between'>
                                    <h1>Start from </h1>
                                    <p className='font-bold text-green-400'>$200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-100 ease"></span>
                </motion.div>
                {/* right portion */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1, delay: .4 }
                    }}
                    class="relative cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300 rounded-xl w-full">

                    <div className=' justify-items-start p-7'>
                        <div className='flex items-center gap-3'>
                            {/* git btn */}
                            <button class="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#000000] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-3 rounded-[100px]">
                                <div className='text-3xl'>
                                    <FiTriangle></FiTriangle>
                                </div>
                            </button>
                            <h1 className='text-xl'>Web Devolopment</h1>
                        </div>
                        <div class="relative  cursor-pointer overflow-hidden group bg-linear-to-r/srgb from-[#242424] to-[#464a4a]  hover:bg-linear-to-r/srgb hover:from-[#000000] hover:to-[#464a4a] text-white transition-all ease-out duration-300  p-5 rounded-lg w-full mt-3">
                            <div className=''>
                                <div className='flex items-center justify-between'>
                                    <h1>Project completed</h1>
                                    <p className='font-bold text-green-400'>3+</p>
                                </div>
                                <div className='divider px-0'></div>
                                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem labore magnam error obcaecati dicta saepe repellendus iusto minima incidunt!</p>
                                <div className='divider px-0'></div>
                                <div className='flex items-center justify-between'>
                                    <h1>Start from </h1>
                                    <p className='font-bold text-green-400'>$300</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="absolute right-0 w-30 h-full top-0 transition-all duration-2000 transform translate-x-28 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-100 ease"></span>
                </motion.div>
            </div>
        </div>
    );
};

export default About;