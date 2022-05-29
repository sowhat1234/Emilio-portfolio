import React from 'react';
import works from '../services/works';
import SectionTitle from './SectionTitle';
import WorkItem from './WorkItem';

function Works() {
  return (
    <div className='py-12'>
      <SectionTitle id='works'>My Projects</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
