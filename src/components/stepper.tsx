import React from 'react';
import clsx from 'clsx';

interface IStepperProps {
  length: number;
  step: number;
  onTap: Function;
}

const Stepper: React.FunctionComponent<IStepperProps> = ({
  length,
  step,
  onTap,
}): React.ReactElement => {
  const steps = Array.from({ length }, (x, i) => i);
  return (
    <div className='flex items-center justify-around mb-6 border-t-2 border-black'>
      {steps.map(index => (
        <button
          className={clsx(
            'inline-flex items-center justify-center w-8 h-8 -mt-4 font-bold text-gray-700 bg-yellow-200 border border-black rounded-full transition hover:bg-yellow-300 focus:outline-none md:-mt-6 md:w-12 md:h-12',
            step === index && 'bg-yellow-500 hover:bg-yellow-500'
          )}
          key={index}
          onClick={() => onTap(index)}
          type='button'
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Stepper;
