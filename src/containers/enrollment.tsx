import React, { useState } from 'react';
import clsx from 'clsx';

import Conditions from '../components/conditions';
import DemographicInformation from '../components/demographic-info';
import MedicalQuestions from '../components/medical-questions';
import Summary from '../components/summary';
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

  const submitHanler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (step !== 4) {
      setStep(step => step + 1);
    } else {
      console.log('Done!');
    }
  };

  return (
    <>
      <h1 className='mb-12 text-2xl font-light text-center sm:font-bold sm:text-3xl'>
        Patient Enrollment
      </h1>
      <EnrollmentContext.Provider
        value={{ demographic, setDemographic, conditions, setConditions }}
      >
        <section>
          <div className='flex items-center justify-around mb-6 border-t-2 border-black'>
            {[1, 2, 3, 4, 5].map(it => (
              <button
                className={clsx(
                  'inline-flex items-center justify-center w-8 h-8 -mt-4 font-bold text-gray-700 bg-yellow-200 border border-black rounded-full transition hover:bg-yellow-300 focus:outline-none md:-mt-6 md:w-12 md:h-12',
                  step === it - 1 && 'bg-yellow-500 hover:bg-yellow-500'
                )}
                key={it}
                onClick={() => setStep(it - 1)}
                type='button'
              >
                {it}
              </button>
            ))}
          </div>
          <div>
            <form onSubmit={submitHanler}>
              {step === 0 ? <DemographicInformation /> : null}
              {step === 1 ? <Conditions /> : null}
              {step === 2 ? <MedicalQuestions /> : null}
              {step === 3 ? <Summary /> : null}
              {step === 4 ? <>Terms</> : null}
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
          </div>
        </section>
      </EnrollmentContext.Provider>
    </>
  );
};

export default Enrollment;
