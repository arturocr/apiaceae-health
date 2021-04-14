import clsx from 'clsx';
import React from 'react';
import { useForm } from 'react-hook-form';

import useEnrollment from '../hooks/useEnrollment';
import { IDemographicState } from '../types/context';

const DemographicInformation: React.FunctionComponent = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDemographicState>();
  const { demographic, setDemographic, setStep } = useEnrollment();

  const onSubmit = (data: IDemographicState) => {
    setDemographic(data);
    setStep(step => step + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className='mb-3 text-2xl font-light'>Demographic Information</h2>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>First Name</span>
          <input
            className={clsx(
              'block w-full mt-1',
              errors.firstName && 'error-field'
            )}
            defaultValue={demographic.firstName}
            type='text'
            {...register('firstName', { required: true })}
          />
        </label>
        <label className='flex-1 mt-2'>
          <span>Last Name</span>
          <input
            className={clsx(
              'block w-full mt-1',
              errors.lastName && 'error-field'
            )}
            defaultValue={demographic.lastName}
            type='text'
            {...register('lastName', { required: true })}
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>Gender Identity</span>
          <select
            className={clsx(
              'block w-full mt-1',
              errors.gender && 'error-field'
            )}
            defaultValue={demographic.gender}
            {...register('gender', { required: true })}
          >
            <option value=''>Select an option</option>
            <option value='woman'>Woman</option>
            <option value='man'>Man</option>
            <option value='trans'>Transgender</option>
            <option value='non-b'>Non-binary/conforming</option>
            <option value='no-response'>Prefer not to respond</option>
          </select>
        </label>
        <label className='flex-1 mt-2'>
          <span>Date of Birth</span>
          <input
            className={clsx(
              'block w-full mt-1',
              errors.birthDate && 'error-field'
            )}
            defaultValue={demographic.birthDate}
            type='date'
            {...register('birthDate', { required: true })}
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>Email</span>
          <input
            className={clsx(
              'block w-full mt-1',
              errors.birthDate && 'error-field'
            )}
            defaultValue={demographic.email}
            type='email'
            {...register('email', {
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </label>
        <label className='flex-1 mt-2'>
          <span>Phone Number</span>
          <input
            className={clsx('block w-full mt-1', errors.phone && 'error-field')}
            defaultValue={demographic.phone}
            type='text'
            {...register('phone', { required: true })}
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>Street Address</span>
          <input
            className={clsx(
              'block w-full mt-1',
              errors.street && 'error-field'
            )}
            defaultValue={demographic.street}
            type='text'
            {...register('street', { required: true })}
          />
        </label>
        <label className='flex-1 mt-2'>
          <span>City</span>
          <input
            className={clsx('block w-full mt-1', errors.city && 'error-field')}
            defaultValue={demographic.city}
            type='text'
            {...register('city', { required: true })}
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>State</span>
          <input
            className={clsx('block w-full mt-1', errors.state && 'error-field')}
            defaultValue={demographic.state}
            type='text'
            {...register('state', { required: true })}
          />
        </label>
        <label className='flex-1 mt-2'>
          <span>Zip</span>
          <input
            className={clsx('block w-full mt-1', errors.zip && 'error-field')}
            defaultValue={demographic.zip}
            type='text'
            {...register('zip', { required: true })}
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>Marital Status</span>
          <select
            className={clsx(
              'block w-full mt-1',
              errors.maritalStatus && 'error-field'
            )}
            defaultValue={demographic.maritalStatus}
            {...register('maritalStatus', { required: true })}
          >
            <option value=''>Select an option</option>
            <option value='married'>Married</option>
            <option value='single'>Single</option>
            <option value='divorced'>Divorced</option>
            <option value='life-partner'>Life Partner</option>
            <option value='separated'>Separated</option>
            <option value='widowed'>Widowed</option>
            <option value='other'>Other</option>
          </select>
        </label>
      </div>
      <div className='flex justify-end mt-6'>
        <button
          className='px-6 py-2 text-base font-bold transition-colors bg-white border border-black rounded-full hover:bg-yellow-500 focus:outline-none active:bg-yellow-300'
          type='submit'
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default DemographicInformation;
