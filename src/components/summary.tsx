import React from 'react';

import DemographicSummary from './demographic-sumary';
import MedicalQuestionsSummary from './medical-questions-sumary';
import useEnrollment from '../hooks/useEnrollment';

const Summary: React.FunctionComponent = (): React.ReactElement => {
  const {
    demographic,
    conditions,
    medicalQuestions,
    setStep,
  } = useEnrollment();
  return (
    <>
      <h2 className='mb-3 text-2xl font-light'>Summary</h2>
      <h3 className='mb-2 text-lg font-medium'>Demographic Information</h3>
      <DemographicSummary demographic={demographic} />
      <h3 className='pt-2 mb-2 text-lg font-medium border-t border-yellow-200'>
        Conditions
      </h3>
      <p className='mb-3'>{conditions.join(', ')}.</p>
      <h3 className='pt-2 mb-2 text-lg font-medium border-t border-yellow-200'>
        Medical Questions
      </h3>
      <MedicalQuestionsSummary medicalQuestions={medicalQuestions} />
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
    </>
  );
};

export default Summary;
