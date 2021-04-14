import { useContext } from 'react';
import EnrollmentContext from '../state/context';
import { IEnrollmentContext } from '../types/context';

export default (): IEnrollmentContext => {
  const enrollmentContext = useContext(EnrollmentContext);

  if (enrollmentContext === undefined || enrollmentContext === null) {
    throw new Error(
      'useEnrollment must be used within EnrollmentContext.Provider'
    );
  }

  return enrollmentContext;
};
