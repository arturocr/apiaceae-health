import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FunctionComponent = (): React.ReactElement => (
  <header className='flex-shrink-0 mt-4 md:mt-10'>
    <div className='container flex items-center justify-center mx-auto'>
      <Link to='/' className='block'>
        <h1 className='px-2 text-3xl font-semibold border-b-2 border-yellow-300 sm:text-4xl'>
          <span className='italic font-light'>Apiaceae</span> Health
          <sup>&#174;</sup>
        </h1>
      </Link>
    </div>
  </header>
);

export default Header;
