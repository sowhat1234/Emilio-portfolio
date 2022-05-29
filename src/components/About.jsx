import React from 'react';
import myImg from '../images/MyPhoto.png';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12'>
      <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          I am a Full-Stack Web developer, passionate about building websites
          and web applications. My goal is to write and style the components
          that meet the highest standards of modern day websites.
        </p>
        <a
          href='mailto:emiliu1234e@gmail.com'
          className='block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500'
        >
          emiliu1234e@gmail.com
        </a>
      </div>

      <img
        src={myImg}
        alt='Me'
        className='w-full md:w-6/12 rounded-lg object-cover'
      />
    </div>
  );
}

export default About;
