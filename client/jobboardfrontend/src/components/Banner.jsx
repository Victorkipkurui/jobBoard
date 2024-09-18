import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

const Banner = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className='flex mt-6'>
      <form>
        <div className='mb-7 ml-7'>
          <div className=' w-80 relative flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 ml-4 '>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='What Position Are You Looking For ?'
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
              onChange={handleInputChange}
              value={query}
            />
            <FaSearch className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400' />
          </div>
        </div>
      </form>
      <form>
        <div className='mb-7 ml-7'>
          <div className=' w-80 relative flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 ml-4 '>
            <input
              type=''
              name='title'
              id='title'
              placeholder='What Position Are You Looking For ?'
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
              onChange={handleInputChange}
              value={query}
            />
            <FaSearch className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400' />
          </div>
        </div>
      </form>
      <form>
        <div className='mb-7 ml-7'>
          <div className=' w-80 relative flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 ml-4 '>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='All city'
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-400 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
              onChange={handleInputChange}
              value={query}
            />
            <FaLocationDot className='absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400' />
          </div>
          
        </div>
      </form>
      <div>
      <button className='block py-1 px-4 border rounded ml-5 bg-blue text-white'>
        Search
      </button>
      </div>
    </div>
  );
};

export default Banner;
