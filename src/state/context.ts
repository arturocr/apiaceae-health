import React from 'react';

import { IEnrollmentContext } from '../types/context';

export const defaultState: IEnrollmentContext = {
  demographic: {
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: undefined,
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    maritalStatus: '',
  },
  setDemographic: () => {},
  conditions: [],
  setConditions: () => {},
  medicalQuestions: {
    smokesTobacco: 'no',
    drinksAlcohol: 'no',
    usedIllicitDrugs: 'no',
    currentMedications: 'no',
    allergies: 'no',
    pastEvents: 'no',
  },
  setMedicalQuestions: () => {},
  step: 0,
  setStep: () => {},
};

const EnrollmentContext: React.Context<IEnrollmentContext> = React.createContext(
  defaultState
);

export default EnrollmentContext;
