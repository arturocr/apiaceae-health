import React, { useState } from 'react';
import clsx from 'clsx';

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

  const submitHanler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (step !== 4) {
      setStep(step => step + 1);
    } else {
      console.log('Done!');
    }
  };

  return (
    <div className='flex-1'>
      <h1 className='my-12 text-2xl font-light text-center sm:font-bold sm:text-3xl'>
        Patient Enrollment
      </h1>
      <EnrollmentContext.Provider
        value={{ demographic, setDemographic, conditions, setConditions }}
      >
        <section>
          <Stepper length={steps.length} step={step} onTap={setStep} />
          <form onSubmit={submitHanler}>
            {React.createElement(steps[step])}
            <div className='flex justify-between mt-6'>
              <button
                className={clsx(
                  'px-6 py-2 text-base font-bold transition-colors bg-white border border-black rounded-full hover:bg-yellow-500 focus:outline-none active:bg-yellow-300',
                  !step && 'opacity-40 pointer-events-none'
                )}
                onClick={() => setStep(step => step - 1)}
                disabled={!step}
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
        </section>
      </EnrollmentContext.Provider>
    </div>
  );
};

export default Enrollment;
