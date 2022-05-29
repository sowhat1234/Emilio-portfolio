import React from 'react';
import services from '../services/services';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';
import {
  FaVuejs,
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3,
} from 'react-icons/fa';

function Services() {
  return (
    <div className='py-12'>
      <SectionTitle>My Skills</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((service) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            icon={service.icon}
            desc={service.desc}
          />
        ))}
      </div>
      <p className='flex mt-10 justify-center gap-5 md:text-sm md:gap-10 md:mt-20'>
        <FaVuejs className='text-green-600 text-5xl'></FaVuejs>
        <FaReact className='text-blue-700 text-5xl'></FaReact>
        <FaJs className='text-yellow-600 text-5xl'></FaJs>
        <FaNodeJs className='text-green-600 text-5xl'></FaNodeJs>
        <FaHtml5 className='text-red-700 text-5xl'></FaHtml5>
        <FaCss3 className='text-blue-400 text-5xl'></FaCss3>
      </p>
    </div>
  );
}

export default Services;
