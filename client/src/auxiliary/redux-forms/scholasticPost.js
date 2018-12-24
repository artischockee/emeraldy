import { SubmissionError } from 'redux-form';
import { parsedDecimal, ISODate } from '../';

const validator = (values) => {
  const { project, date, hours, minutes } = values;
  const validObject = { project, date, hours, minutes };

  const errors = {};

  Object.entries(validObject).forEach(entry => {
    if (!entry[1])
      errors[entry[0]] = 'Required';
  });

  return errors;
};


const initialValues = {
  date: ISODate(),
  hours: 0,
  minutes: 0
};

export {
  validator as scholasticPostSyncValidator,
  initialValues as scholasticPostInitialValues
};