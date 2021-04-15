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
        'flex items-center pr-4 m-1 transition-colors bg-yellow-50 border border-yellow-400 rounded-full shadow-md cursor-pointer text-gray-700 whitespace-nowrap hover:bg-yellow-300 focus:outline-none',
        condition.selected && 'bg-yellow-500 hover:bg-yellow-500'
      )}
      onClick={() => onTap(condition.condition)}
      type='button'
    >
      <span
        className={clsx(
          'flex items-center justify-center w-12 h-12 mr-2 rounded-full bg-white border-r border-b border-yellow-400',
          condition.selected && 'bg-yellow-100'
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
