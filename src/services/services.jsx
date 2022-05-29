import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
  {
    title: 'Web Design',
    icon: <MdWeb className='w-full h-full' />,
    desc: 'Design and layout websites, Think through the navigation of a site to provide the best user experience.',
  },
  {
    title: 'Ui Design',
    icon: <FaHandHoldingHeart className='w-full h-full' />,
    desc: 'The goal of user interface design is to create a user interface that makes it easy, efficient, and enjoyable for users to interact with a product',
  },
  {
    title: 'Web Development',
    icon: <VscCode className='w-full h-full' />,
    desc: `Responsible for the site's technical aspects, such as its performance and capacity which are measures of a website's speed and how much traffic the site can handle.`,
  },
];
