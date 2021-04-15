import React from 'react';

import { IMedicalQuestionsState } from '../types/context';

interface IMedicalQuestionsSummaryProps {
  medicalQuestions: IMedicalQuestionsState;
}

const MedicalQuestionsSummary: React.FunctionComponent<IMedicalQuestionsSummaryProps> = ({
  medicalQuestions,
}): React.ReactElement => (
  <>
    <div className='px-4 py-3 text-sm bg-yellow-100 bg-opacity-40 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
      <div>
        <div className='font-bold'>Do you smoke any tobacco products?</div>
        <span className='capitalize'>{medicalQuestions.smokesTobacco}</span>
      </div>
      {medicalQuestions.smokesTobaccoDetails === 'yes' ? (
        <div className='mt-2 sm:mt-0'>
          <div className='font-bold'>How much and how often?</div>
          {medicalQuestions.smokesTobaccoDetails}
        </div>
      ) : null}
    </div>
    <div className='px-4 py-3 text-sm sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
      <div>
        <div className='font-bold'>Do you drink alcohol?</div>
        <span className='capitalize'>{medicalQuestions.drinksAlcohol}</span>
      </div>
      {medicalQuestions.drinksAlcohol === 'yes' ? (
        <div className='mt-2 sm:mt-0'>
          <div className='font-bold'>How much and how often?</div>
          {medicalQuestions.drinksAlcoholDetails}
        </div>
      ) : null}
    </div>
    <div className='px-4 py-3 text-sm bg-yellow-100 bg-opacity-40 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
      <div>
        <div className='font-bold'>Have you regularly used illicit drugs?</div>
        <span className='capitalize'>{medicalQuestions.usedIllicitDrugs}</span>
      </div>
      {medicalQuestions.usedIllicitDrugs === 'yes' ? (
        <div className='mt-2 sm:mt-0'>
          <div className='font-bold'>How much and how often?</div>
          {medicalQuestions.usedIllicitDrugsDetails}
        </div>
      ) : null}
    </div>
    <div className='px-4 py-3 text-sm sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
      <div>
        <div className='font-bold'>Do you currently use medications?</div>
        <span className='capitalize'>
          {medicalQuestions.currentMedications}
        </span>
      </div>
      {medicalQuestions.currentMedications === 'yes' ? (
        <div className='mt-2 sm:mt-0'>
          <div className='font-bold'>List</div>
          {medicalQuestions.currentMedicationsDetails}
        </div>
      ) : null}
    </div>
    <div className='px-4 py-3 text-sm bg-yellow-100 bg-opacity-40 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
      <div>
        <div className='font-bold'>
          Have you experienced any allergies or reactions to any medication?
        </div>
        <span className='capitalize'>{medicalQuestions.allergies}</span>
      </div>
      {medicalQuestions.allergies === 'yes' ? (
        <div className='mt-2 sm:mt-0'>
          <div className='font-bold'>List</div>
          {medicalQuestions.allergiesDetails}
        </div>
      ) : null}
    </div>
    <div className='px-4 py-3 text-sm sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6'>
      <div>
        <div className='font-bold'>
          Do you have any past hospital stays and/or surgeries?
        </div>
        <span className='capitalize'>{medicalQuestions.pastEvents}</span>
      </div>
      {medicalQuestions.pastEvents === 'yes' ? (
        <div className='mt-2 sm:mt-0'>
          <div className='font-bold'>List</div>
          {medicalQuestions.pastEventsDetails}
        </div>
      ) : null}
    </div>
  </>
);

export default MedicalQuestionsSummary;
