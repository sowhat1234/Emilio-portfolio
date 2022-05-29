import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg'>
      <a href='#hero' className='block text-xl md:text-2xl font-semibold'>
        Emil Gutson
      </a>

      <a
        href='https://github.com/sowhat1234'
        target='_blank'
        className='text-2xl p-2 md:text-md hover:text-indigo-500 inline-block'
      >
        <IoLogoGithub></IoLogoGithub>
      </a>
      <a
        href='https://www.linkedin.com/in/emil-gutsan-66b223237/'
        target='_blank'
        className='text-2xl p-2 md:text-md hover:text-indigo-500 inline-block'
      >
        <IoLogoLinkedin></IoLogoLinkedin>
      </a>
      <p className='text-xs mt-2 text-gray-500'>
        © Emil Gutson Portfolio {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
