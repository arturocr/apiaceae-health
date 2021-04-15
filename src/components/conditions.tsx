import React, { useState } from 'react';

import Chip from './chip';
import rawConditions from '../data/conditions.json';
import useEnrollment from '../hooks/useEnrollment';
import { ICondition, IIterableCondition } from '../types/condition';
import { camelize } from '../utils';

const Conditions: React.FunctionComponent = (): React.ReactElement => {
  const { conditions, setConditions, setStep } = useEnrollment();
  const [searchText, setSearchText] = useState<string>('');

  const toggleCondition = (condition: string) => {
    setConditions(prevValues => {
      const index = prevValues.indexOf(condition);
      if (index >= 0) {
        return [...prevValues.filter(val => val !== condition)];
      }
      return [...prevValues, condition];
    });
  };

  const conditionsList: IIterableCondition[] = rawConditions
    .filter(condition => {
      const filterText = searchText.toLowerCase();
      return (
        condition.condition.toLowerCase().indexOf(filterText) >= 0 ||
        condition.type.toLowerCase().indexOf(filterText) >= 0
      );
    })
    .map((cond: ICondition) => ({
      ...cond,
      id: camelize(`${cond.type} ${cond.condition}`),
      selected: conditions.indexOf(cond.condition) >= 0,
    }));

  return (
    <form>
      <h2 className='mb-3 text-2xl font-light'>Conditions</h2>
      <p className='my-3'>
        Please select your medical conditions by tapping on them.
      </p>
      <div className='relative'>
        <input
          className='block w-full mt-1 px-9'
          value={searchText}
          type='text'
          placeholder='Filter'
          onChange={e => setSearchText(e.target.value)}
        />
        <svg
          className='absolute w-6 h-6 text-gray-500 top-2 left-2'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
        </svg>
        {searchText.trim() ? (
          <svg
            className='absolute w-6 h-6 cursor-pointer right-3 top-2'
            fill='none'
            onClick={() => setSearchText('')}
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : null}
      </div>
      <div className='flex flex-wrap my-3 md:justify-center'>
        {conditionsList.length ? (
          conditionsList.map(condition => (
            <Chip
              key={condition.id}
              condition={condition}
              onTap={toggleCondition}
            />
          ))
        ) : (
          <>No conditions match.</>
        )}
      </div>
      <div className='flex justify-between mt-6'>
        <button
          className='px-6 py-2 text-base font-bold transition-colors bg-white border border-black rounded-full hover:bg-yellow-500 focus:outline-none active:bg-yellow-300'
          onClick={() => setStep(step => step - 1)}
          type='button'
        >
          Back
        </button>
        <button
          className='px-6 py-2 text-base font-bold transition-colors bg-white border border-black rounded-full hover:bg-yellow-500 focus:outline-none active:bg-yellow-300'
          onClick={() => setStep(step => step + 1)}
          type='button'
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Conditions;
