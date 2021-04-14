import React, { useState } from 'react';

import Conditions from '../components/conditions';
import DemographicInformation from '../components/demographic-info';
import MedicalQuestions from '../components/medical-questions';
import Stepper from '../components/stepper';
import Summary from '../components/summary';
import Terms from '../components/terms';
import EnrollmentContext, { defaultState } from '../state/context';
import { IDemographicState } from '../types/context';

const Enrollment: React.FunctionComponent = (): React.ReactElement => {
  const [step, setStep] = useState<number>(0);
  const [demographic, setDemographic] = useState<IDemographicState>(
    defaultState.demographic
  );
  const [conditions, setConditions] = useState<Array<string>>(
    defaultState.conditions
  );
  const steps: React.FunctionComponent[] = [
    DemographicInformation,
    Conditions,
    MedicalQuestions,
    Summary,
    Terms,
  ];

  return (
    <div className='flex-1'>
      <h1 className='my-12 text-2xl font-light text-center sm:font-bold sm:text-3xl'>
        Patient Enrollment
      </h1>
      <EnrollmentContext.Provider
        value={{
          demographic,
          setDemographic,
          conditions,
          setConditions,
          step,
          setStep,
        }}
      >
        <section>
          <Stepper length={steps.length} />
          {React.createElement(steps[step])}
        </section>
      </EnrollmentContext.Provider>
    </div>
  );
};

export default Enrollment;
