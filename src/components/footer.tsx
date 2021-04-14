import React from 'react';

const Footer: React.FunctionComponent = (): React.ReactElement => (
  <footer className='flex items-center justify-center flex-shrink-0 py-3 bg-yellow-100 border-t border-yellow-200'>
    <small>
      &copy; {new Date().getFullYear()} - Crafted by{' '}
      <a className='font-bold' href='https://twitter.com/arturocr'>
        @arturocr
      </a>
    </small>
  </footer>
);

export default Footer;
