import React from 'react';
import clsx from 'clsx';

import Icon from './icon';
import { IIterableCondition } from '../types/condition';

interface IChipProps {
  condition: IIterableCondition;
  onTap: Function;
}

const Chip: React.FunctionComponent<IChipProps> = ({
  condition,
  onTap,
}): React.ReactElement => {
  return (
    <button
      className={clsx(
        'flex items-center pr-4 m-1 transition-colors bg-yellow-100 border border-yellow-400 rounded-full shadow-md cursor-pointer whitespace-nowrap hover:bg-yellow-300 focus:outline-none',
        condition.selected && 'bg-green-200 border-green-700 hover:bg-green-300'
      )}
      onClick={() => onTap(condition.condition)}
      type='button'
    >
      <input
        checked={!!condition.selected}
        className='hidden'
        name='conditions'
        readOnly
        type='checkbox'
        value={condition.condition}
      />
      <span
        className={clsx(
          'flex items-center justify-center w-12 h-12 mr-2 rounded-full bg-yellow-50',
          condition.selected && 'bg-green-100'
        )}
        title={condition.type}
      >
        <Icon type={condition.type} />
      </span>
      {condition.condition}
    </button>
  );
};

export default Chip;
