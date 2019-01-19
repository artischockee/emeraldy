import { SubmissionError } from 'redux-form';
import { timeout } from '../timeout';

const validateField = (field) => (
  !field || field === '' || /^\s*$/.test(field)
);

const submit = (values) => {
  return timeout(750)
    .then(() => {
      const noLogin = validateField(values.login);
      const noPassword = validateField(values.password);

      if (!noLogin && !noPassword) {
        console.log('will submit', values);
        return;
      }
      const errorData = {
        _error: true
      };

      if (noLogin)
        errorData.login = true;
      if (noPassword)
        errorData.password = true;

      throw new SubmissionError(errorData);
    });
};

export { submit as loginSubmitValidator };