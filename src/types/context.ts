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

export interface IMedicalQuestionsState {
  smokesTobacco: string;
  smokesTobaccoDetails?: string;
  drinksAlcohol: string;
  drinksAlcoholDetails?: string;
  usedIllicitDrugs: string;
  usedIllicitDrugsDetails?: string;
  currentMedications: string;
  currentMedicationsDetails?: string;
  allergies: string;
  allergiesDetails?: string;
  pastEvents: string;
  pastEventsDetails?: string;
}

export interface IEnrollmentContext {
  demographic: IDemographicState;
  setDemographic: Dispatch<SetStateAction<IDemographicState>>;
  conditions: Array<string>;
  setConditions: Dispatch<SetStateAction<string[]>>;
  medicalQuestions: IMedicalQuestionsState;
  setMedicalQuestions: Dispatch<SetStateAction<IMedicalQuestionsState>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
