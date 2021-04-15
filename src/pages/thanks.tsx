import React from 'react';
import { Link } from 'react-router-dom';

import ThanksIllustration from '../components/thanks-illustration';

const Terms: React.FunctionComponent = (): React.ReactElement => (
  <div className='flex flex-col items-center justify-center h-full pl-0 sm:pl-8 xl:pl-0 md:flex-row md:justify-between'>
    <div className='flex flex-col items-center w-5/6 md:items-start sm:w-1/2 lg:w-3/8 lg:mt-10'>
      <h1 className='relative mb-4 text-3xl font-bold text-center md:font-extrabold lg:font-black lg:text-5xl xl:text-6xl md:text-left'>
        Thank you!
      </h1>
      <p className='my-1 text-base text-center md:my-3 xl:text-xl md:text-left'>
        We have received your enrollment.
      </p>
      <p className='my-1 text-base text-center md:my-3 xl:text-xl md:text-left'>
        We will get back to you soon.
      </p>
      <Link to='/' className='mt-5'>
        <span className='inline-block w-full h-full px-8 py-3 text-base font-bold transition-colors bg-white border border-black rounded-full hover:bg-yellow-500 focus:outline-none active:bg-yellow-300'>
          Back to homepage
        </span>
      </Link>
    </div>
    <div className='flex flex-col items-end justify-center w-5/6 h-auto pl-0 pr-0 mt-10 sm:pl-20 sm:pr-8 xl:pr-0 md:mt-0 md:h-full sm:w-2/3'>
      <ThanksIllustration classNames='w-full h-auto' />
    </div>
  </div>
);

export default Terms;
