import React, { useState } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import useEnrollment from '../hooks/useEnrollment';

const Terms: React.FunctionComponent = (): React.ReactElement => {
  const history = useHistory();
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const { demographic, conditions, medicalQuestions } = useEnrollment();

  const sendData = () => {
    console.log({ demographic, conditions, medicalQuestions });
    history.push('/thanks');
  };

  return (
    <>
      <h2 className='mb-3 text-2xl font-light'>Terms</h2>
      <p className='my-3'>
        Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia
        bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis
        euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
      </p>
      <p className='my-3'>
        Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget
        urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur
        ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper.
        Donec ullamcorper nulla non metus auctor fringilla.
      </p>
      <div className='flex flex-col items-start justify-start mt-4 space-y-3'>
        <label className='inline-flex items-center'>
          <input
            className='mr-3'
            type='checkbox'
            defaultChecked={termsAccepted}
            onChange={() => setTermsAccepted(termsAccepted => !termsAccepted)}
          />{' '}
          Accept terms &amp; conditions
        </label>
        <button
          className={clsx(
            'px-6 py-2 text-base font-bold transition-colors bg-white border border-black rounded-full hover:bg-yellow-500 focus:outline-none active:bg-yellow-300',
            !termsAccepted && 'pointer-events-none opacity-50'
          )}
          disabled={!termsAccepted}
          onClick={sendData}
          type='button'
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Terms;
