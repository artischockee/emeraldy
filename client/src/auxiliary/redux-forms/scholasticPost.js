import { SubmissionError } from 'redux-form';
import { parsedDecimal, ISODate } from '../';

const validator = (values) => {
  const { project, date, time } = values;
  const validObject = { project, date, time };

  const errors = {};

  Object.entries(validObject).forEach(entry => {
    if (!entry[1])
      errors[entry[0]] = 'Required';
  });

  return errors;
};


const initialValues = {
  date: ISODate()
};

export {
  validator as scholasticPostSyncValidator,
  initialValues as scholasticPostInitialValues
};