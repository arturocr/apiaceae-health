import React from 'react';

import { Genders, MaritalStatuses } from '../constants/enums';
import { IDemographicState } from '../types/context';

interface IDemographicSummaryProps {
  demographic: IDemographicState;
}

const DemographicSummary: React.FunctionComponent<IDemographicSummaryProps> = ({
  demographic,
}): React.ReactElement => {
  const genderName: string =
    Genders.find(x => x.id === demographic.gender)?.name || demographic.gender;
  const maritalStatusName: string =
    MaritalStatuses.find(x => x.id === demographic.maritalStatus)?.name ||
    demographic.maritalStatus;

  return (
    <dl className='mb-3'>
      <div className='px-4 py-3 bg-yellow-100 bg-opacity-40 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>First name</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {demographic.firstName}
        </dd>
      </div>
      <div className='px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>Last name</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {demographic.lastName}
        </dd>
      </div>
      <div className='px-4 py-3 bg-yellow-100 bg-opacity-40 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>Gender</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>{genderName}</dd>
      </div>
      <div className='px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>Date of Birth</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {demographic.birthDate}
        </dd>
      </div>
      <div className='px-4 py-3 bg-yellow-100 bg-opacity-40 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>Email</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {demographic.email}
        </dd>
      </div>
      <div className='px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>Phone</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {demographic.phone}
        </dd>
      </div>
      <div className='px-4 py-3 bg-yellow-100 bg-opacity-40 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>Street</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {demographic.street}
        </dd>
      </div>
      <div className='px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>City</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {demographic.city}
        </dd>
      </div>
      <div className='px-4 py-3 bg-yellow-100 bg-opacity-40 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>State</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {demographic.state}
        </dd>
      </div>
      <div className='px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>ZIP</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {demographic.zip}
        </dd>
      </div>
      <div className='px-4 py-3 bg-yellow-100 bg-opacity-40 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='text-sm font-bold'>Marital status</dt>
        <dd className='mt-1 text-sm sm:mt-0 sm:col-span-3'>
          {maritalStatusName}
        </dd>
      </div>
    </dl>
  );
};

export default DemographicSummary;
