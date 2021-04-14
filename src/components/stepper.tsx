import React from 'react';
import clsx from 'clsx';

import useEnrollment from '../hooks/useEnrollment';

interface IStepperProps {
  length: number;
}

const Stepper: React.FunctionComponent<IStepperProps> = ({
  length,
}): React.ReactElement => {
  const { step } = useEnrollment();
  const steps = Array.from({ length }, (x, i) => i);
  return (
    <ul className='flex items-center justify-around mb-6 border-t-2 border-black'>
      {steps.map(index => (
        <li
          className={clsx(
            'inline-flex items-center justify-center w-8 h-8 -mt-4 font-bold text-gray-700 border border-black rounded-full transition focus:outline-none md:-mt-6 md:w-12 md:h-12',
            step === index && 'bg-yellow-400',
            step !== index && 'bg-yellow-100'
          )}
          key={index}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
