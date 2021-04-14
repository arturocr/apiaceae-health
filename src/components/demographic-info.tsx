import React from 'react';
import useEnrollment from '../hooks/useEnrollment';

const DemographicInformation: React.FunctionComponent = (): React.ReactElement => {
  const { demographic, setDemographic } = useEnrollment();

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setDemographic(prevValues => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <fieldset>
      <h2 className='mb-3 text-2xl font-light'>Demographic Information</h2>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>First Name</span>
          <input
            className='block w-full mt-1'
            defaultValue={demographic.firstName}
            name='firstName'
            onChange={handleChange}
            type='text'
          />
        </label>
        <label className='flex-1 mt-2'>
          <span>Last Name</span>
          <input
            className='block w-full mt-1'
            defaultValue={demographic.lastName}
            name='lastName'
            onChange={handleChange}
            type='text'
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>Gender Identity</span>
          <select
            className='block w-full mt-1'
            defaultValue={demographic.gender}
            name='gender'
            onChange={handleChange}
          >
            <option>Select an option</option>
            <option value='woman'>Woman</option>
            <option value='man'>Man</option>
            <option value='trans'>Transgender</option>
            <option value='non-b'>Non-binary/conforming</option>
            <option value='no-response'>Prefer not to respond</option>
          </select>
        </label>
        <label className='flex-1 mt-2'>
          <span>Date of Birth</span>
          <input
            className='block w-full mt-1'
            defaultValue={demographic.birthDate}
            name='birthDate'
            onChange={handleChange}
            type='date'
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>Email</span>
          <input
            className='block w-full mt-1'
            defaultValue={demographic.email}
            name='email'
            onChange={handleChange}
            type='email'
          />
        </label>
        <label className='flex-1 mt-2'>
          <span>Phone Number</span>
          <input
            className='block w-full mt-1'
            defaultValue={demographic.phone}
            name='phone'
            onChange={handleChange}
            type='text'
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>Street Address</span>
          <input
            className='block w-full mt-1'
            defaultValue={demographic.street}
            name='street'
            onChange={handleChange}
            type='text'
          />
        </label>
        <label className='flex-1 mt-2'>
          <span>City</span>
          <input
            className='block w-full mt-1'
            defaultValue={demographic.city}
            name='city'
            onChange={handleChange}
            type='text'
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>State</span>
          <input
            className='block w-full mt-1'
            defaultValue={demographic.state}
            name='state'
            onChange={handleChange}
            type='text'
          />
        </label>
        <label className='flex-1 mt-2'>
          <span>Zip</span>
          <input
            className='block w-full mt-1'
            defaultValue={demographic.zip}
            name='zip'
            onChange={handleChange}
            type='text'
          />
        </label>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <label className='flex-1 mt-2'>
          <span>Marital Status</span>
          <select
            className='block w-full mt-1'
            defaultValue={demographic.maritalStatus}
            name='maritalStatus'
            onChange={handleChange}
          >
            <option>Select an option</option>
            <option value='married'>Married</option>
            <option value='single'>Single</option>
            <option value='divorced'>Divorced</option>
            <option value='life-partner'>Life Partner</option>
            <option value='separated'>Separated</option>
            <option value='widowed'>Widowed</option>
            <option value='other'>Other</option>
          </select>
        </label>
      </div>
    </fieldset>
  );
};

export default DemographicInformation;
