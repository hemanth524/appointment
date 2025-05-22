import React from 'react';
import { cities } from '../assets/assets';
import { Link } from 'react-router-dom';

const City = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='specialitybar'>
      <h1 className='text-3xl font-medium'>Find by City</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through top cities, schedule your appointment hassle-free.
      </p>

      {/* Horizontal scroll container */}
      <div className='flex sm:justify-center gap-6 pt-5 w-full overflow-x-auto px-4'>
        {cities.map((item, index) => (
          <Link
            key={index}
            onClick={() => scrollTo(0, 0)}
            to={`/doctors/${item.cityname}`}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-200'
          >
            {/* Circular, fixed-size image */}
            <img
              src={item.image}
              alt=""
              className='w-24 h-24 object-cover rounded-full border border-gray-200'
            />
            <p className='mt-2 text-center'>{item.cityname}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default City;
