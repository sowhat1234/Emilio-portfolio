import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

function HeroSection() {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold'>
          Welcome To Emilio's Portfolio
        </h1>
        <p className='text-md md:text-xl  mb-3 text-gray-600 dark:text-gray-300'>
          Full-Stack Web Developer.{' '}
        </p>
        <a
          href='https://drive.google.com/file/d/1LEnD7KJfli0LO8Nn-9M2iNPjmI7uJada/view'
          target='_blank'
          className='flex justify-center items-center mx-20 md:mx-40 py-2 px-4 mb-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'
        >
          <AiOutlineDownload></AiOutlineDownload>{' '}
          <span className='px-1'>Download CV</span>
        </a>
        <a
          href='#works'
          className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md '
        >
          Check Out My Projects
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
