import React from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import useEnrollment from '../hooks/useEnrollment';
import { IMedicalQuestionsState } from '../types/context';

const MedicalQuestions: React.FunctionComponent = (): React.ReactElement => {
  const { medicalQuestions, setMedicalQuestions, setStep } = useEnrollment();
  const {
    register,
    handleSubmit,
    formState: { errors },
    unregister,
    watch,
  } = useForm<IMedicalQuestionsState>({
    defaultValues: medicalQuestions,
  });

  const onSubmit = (data: IMedicalQuestionsState) => {
    setMedicalQuestions(data);
    setStep(step => step + 1);
  };

  const watchSmokesTobacco = watch('smokesTobacco') === 'yes';
  const watchDrinksAlcohol = watch('drinksAlcohol') === 'yes';
  const watchUsedIllicitDrugs = watch('usedIllicitDrugs') === 'yes';
  const watchCurrentMedications = watch('currentMedications') === 'yes';
  const watchAllergies = watch('allergies') === 'yes';
  const watchPastEvents = watch('pastEvents') === 'yes';

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className='mb-3 text-2xl font-light'>Medical Questions</h2>
      <div className='flex flex-wrap items-center mt-2'>
        <span className='mr-2 text-gray-700'>
          Do you smoke any tobacco products?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='yes'
              {...register('smokesTobacco', { required: true })}
            />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='no'
              onClick={() => unregister('smokesTobaccoDetails')}
              {...register('smokesTobacco', { required: true })}
            />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      {watchSmokesTobacco ? (
        <label className='block mb-3'>
          <span className='text-sm italic leading-tight'>
            How much and how often?
          </span>
          <input
            className={clsx(
              'block w-full mt-1',
              errors.smokesTobaccoDetails && 'error-field'
            )}
            type='text'
            {...register('smokesTobaccoDetails', {
              required: true,
            })}
          />
        </label>
      ) : null}
      <div className='flex flex-wrap items-center pt-2 mt-2 border-t border-yellow-200'>
        <span className='mr-2 text-gray-700'>Do you drink alcohol?</span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='yes'
              {...register('drinksAlcohol', { required: true })}
            />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='no'
              onClick={() => unregister('drinksAlcoholDetails')}
              {...register('drinksAlcohol', { required: true })}
            />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      {watchDrinksAlcohol ? (
        <label className='block mb-3'>
          <span className='text-sm italic leading-tight'>
            How much and how often?
          </span>
          <input
            className={clsx(
              'block w-full mt-1',
              errors.drinksAlcoholDetails && 'error-field'
            )}
            type='text'
            {...register('drinksAlcoholDetails', { required: true })}
          />
        </label>
      ) : null}
      <div className='flex flex-wrap items-center pt-2 mt-2 border-t border-yellow-200'>
        <span className='mr-2 text-gray-700'>
          Have you regularly used illicit drugs?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='yes'
              {...register('usedIllicitDrugs', { required: true })}
            />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='no'
              onClick={() => unregister('usedIllicitDrugsDetails')}
              {...register('usedIllicitDrugs', { required: true })}
            />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      {watchUsedIllicitDrugs ? (
        <label className='block mb-3'>
          <span className='text-sm italic leading-tight'>
            How much and how often?
          </span>
          <input
            className={clsx(
              'block w-full mt-1',
              errors.usedIllicitDrugsDetails && 'error-field'
            )}
            type='text'
            {...register('usedIllicitDrugsDetails', { required: true })}
          />
        </label>
      ) : null}
      <div className='flex flex-wrap items-center pt-2 mt-2 border-t border-yellow-200'>
        <span className='mr-2 text-gray-700'>
          Do you currently use medications?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='yes'
              {...register('currentMedications', { required: true })}
            />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='no'
              onClick={() => unregister('currentMedicationsDetails')}
              {...register('currentMedications', { required: true })}
            />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      {watchCurrentMedications ? (
        <label className='block mb-3'>
          <span className='text-sm italic leading-tight'>
            Please list any medications you are currently taking including
            non-prescription medications, vitamins and supplements.
          </span>
          <textarea
            className={clsx(
              'block w-full mt-1',
              errors.currentMedicationsDetails && 'error-field'
            )}
            {...register('currentMedicationsDetails', { required: true })}
          />
        </label>
      ) : null}
      <div className='flex flex-wrap items-center pt-2 mt-2 border-t border-yellow-200'>
        <span className='mr-2 text-gray-700'>
          Have you experienced any allergies or reactions to any medication?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='yes'
              {...register('allergies', { required: true })}
            />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='no'
              onClick={() => unregister('allergiesDetails')}
              {...register('allergies', { required: true })}
            />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      {watchAllergies ? (
        <label className='block mb-3'>
          <span className='text-sm italic leading-tight'>
            Please list any medication allergies or reactions.
          </span>
          <textarea
            className={clsx(
              'block w-full mt-1',
              errors.allergiesDetails && 'error-field'
            )}
            {...register('allergiesDetails', { required: true })}
          />
        </label>
      ) : null}
      <div className='flex flex-wrap items-center pt-2 mt-2 border-t border-yellow-200'>
        <span className='mr-2 text-gray-700'>
          Do you have any past hospital stays and/or surgeries?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              value='yes'
              {...register('pastEvents', { required: true })}
            />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              onClick={() => unregister('pastEventsDetails')}
              value='no'
              {...register('pastEvents', { required: true })}
            />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      {watchPastEvents ? (
        <label className='block pb-2 mt-2'>
          <span className='text-sm italic leading-tight'>
            Please list any type of surgery or reason for hospitalization and
            their approximate date / year.
          </span>
          <textarea
            className={clsx(
              'block w-full mt-1',
              errors.pastEventsDetails && 'error-field'
            )}
            {...register('pastEventsDetails', { required: true })}
          />
        </label>
      ) : null}
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
          type='submit'
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default MedicalQuestions;
