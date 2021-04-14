import React from 'react';

const MedicalQuestions: React.FunctionComponent = (): React.ReactElement => {
  return (
    <fieldset>
      <h2 className='mb-3 text-2xl font-light'>Medical Questions</h2>
      <div className='flex flex-wrap items-center mt-2'>
        <span className='mr-2 text-gray-700'>
          Do you smoke any tobacco products?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input type='radio' value='true' name='smokesTobacco' />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input type='radio' value='false' name='smokesTobacco' />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      <label className='block pb-2 mt-2 border-b border-yellow-200'>
        <span className='text-sm italic leading-tight'>
          How much and how often?
        </span>
        <input
          className='block w-full mt-1'
          type='text'
          name='smokesTobacoDetails'
        />
      </label>
      <div className='flex flex-wrap items-center mt-2'>
        <span className='mr-2 text-gray-700'>Do you drink alcohol?</span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input type='radio' value='true' name='drinksAlcohol' />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input type='radio' value='false' name='drinksAlcohol' />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      <label className='block pb-2 mt-2 border-b border-yellow-200'>
        <span className='text-sm italic leading-tight'>
          How much and how often?
        </span>
        <input
          className='block w-full mt-1'
          type='text'
          name='drinksAlcoholDetails'
        />
      </label>
      <div className='flex flex-wrap items-center mt-2'>
        <span className='mr-2 text-gray-700'>
          Have you regularly used illicit drugs?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input type='radio' value='true' name='usedIllicitDrugs' />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input type='radio' value='false' name='usedIllicitDrugs' />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      <label className='block pb-2 mt-2 border-b border-yellow-200'>
        <span className='text-sm italic leading-tight'>
          How much and how often?
        </span>
        <input
          className='block w-full mt-1'
          type='text'
          name='usedIllicitDrugsDetails'
        />
      </label>
      <div className='flex flex-wrap items-center mt-2'>
        <span className='mr-2 text-gray-700'>
          Do you currently use medications?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input type='radio' value='true' name='currentMedications' />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input type='radio' value='false' name='currentMedications' />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      <label className='block pb-2 mt-2 border-b border-yellow-200'>
        <span className='text-sm italic leading-tight'>
          Please list any medications you are currently taking including
          non-prescription medications, vitamins and supplements.
        </span>
        <textarea
          className='block w-full mt-1'
          name='currentMedicationsDetails'
        />
      </label>
      <div className='flex flex-wrap items-center mt-2'>
        <span className='mr-2 text-gray-700'>
          Have you experienced any allergies or reactions to any medication?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input type='radio' value='true' name='allergies' />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input type='radio' value='false' name='allergies' />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      <label className='block pb-2 mt-2 border-b border-yellow-200'>
        <span className='text-sm italic leading-tight'>
          Please list any medication allergies or reactions.
        </span>
        <textarea className='block w-full mt-1' name='allergiesDetails' />
      </label>
      <div className='flex flex-wrap items-center mt-2'>
        <span className='mr-2 text-gray-700'>
          Do you have any past hospital stays and/or surgeries?
        </span>
        <div className='flex space-x-3'>
          <label className='inline-flex items-center'>
            <input type='radio' value='true' name='pastEvents' />
            <span className='ml-1'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input type='radio' value='false' name='pastEvents' />
            <span className='ml-1'>No</span>
          </label>
        </div>
      </div>
      <label className='block pb-2 mt-2'>
        <span className='text-sm italic leading-tight'>
          Please list any type of surgery or reason for hospitalization and
          their approximate date / year.
        </span>
        <textarea className='block w-full mt-1' name='pastEventsDetails' />
      </label>
    </fieldset>
  );
};

export default MedicalQuestions;
