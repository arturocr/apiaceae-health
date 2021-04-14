import { Dispatch, SetStateAction } from 'react';

export interface IDemographicState {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate?: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  maritalStatus: string;
}

export interface IEnrollmentContext {
  demographic: IDemographicState;
  setDemographic: Dispatch<SetStateAction<IDemographicState>>;
  conditions: Array<string>;
  setConditions: Dispatch<SetStateAction<string[]>>;
  medicalQuestions?: any;
  termsAccepted?: boolean; //!TODO: Must not be optional
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
