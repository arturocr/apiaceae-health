import React from 'react';

import useEnrollment from '../hooks/useEnrollment';

const Summary: React.FunctionComponent = (): React.ReactElement => {
  const enrollmentContext = useEnrollment();
  return (
    <fieldset>
      <h2 className='mb-3 text-2xl font-light'>Summary</h2>
      <h3 className='mb-2 text-lg font-medium'>Demographic Information</h3>
      <pre>{JSON.stringify(enrollmentContext.demographic, null, 2)}</pre>
      <h3 className='pt-2 mb-2 text-lg font-medium border-t border-yellow-200'>
        Conditions
      </h3>
      <pre>{JSON.stringify(enrollmentContext.conditions, null, 2)}</pre>
      <h3 className='pt-2 mb-2 text-lg font-medium border-t border-yellow-200'>
        Medical Questions
      </h3>
      <pre>{JSON.stringify(enrollmentContext.medicalQuestions, null, 2)}</pre>
    </fieldset>
  );
};

export default Summary;
