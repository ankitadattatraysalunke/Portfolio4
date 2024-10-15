import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ title, des, src, githubLink, liveDemoLink, result }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split description into words
  const words = des.split(' ');
  const shouldShowReadMore = words.length > 50;

  // Truncate description if not expanded
  const truncatedDes = words.slice(0, 50).join(' ') + (words.length > 50 ? '...' : '');

  // Function to handle the toggle of description view
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex flex-col h-full p-4 bg-gradient-to-r from-bodyColor to-[#202327] rounded-lg shadow-shadowOne transition-transform duration-300'>
      <div className='w-full h-60 overflow-hidden rounded-lg'>
        <img 
          className='w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer' 
          src={src} 
          alt='Project' />
      </div>
      <div className='flex flex-col flex-grow mt-5'>
        <div className='flex items-center justify-between'>
          <h3 className='text-base uppercase text-designColor font-normal'>
            {title}
          </h3>
         
          <div className='flex gap-2'>
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                <BsGithub />
              </a>
            )}
            {liveDemoLink && (
              <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
                <FaGlobe />
              </a>
            )}
          </div>
        </div>
        <div>
        <p className=' px-4 py-2 w-25 text-designColor bg-black bg-opacity-25 rounded-lg 
          flex justify-center items-center shadow-shadowOne text-sm font-medium'>{result}</p>
        </div>
      
        <div className='flex-grow mt-3'>
          <p className={`text-sm tracking-wide ${isExpanded ? 'max-h-full' : 'max-h-24 overflow-hidden'} text-justify`}>
            {isExpanded ? des : truncatedDes}
          </p>
          {shouldShowReadMore && (
            <button 
              onClick={handleToggle} 
              className='text-designColor mt-2 cursor-pointer hover:underline block'>
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
