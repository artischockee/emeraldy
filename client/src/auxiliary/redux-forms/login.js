import { SubmissionError } from 'redux-form';
import { timeout } from '../timeout';

const submit = (values) => {
  const validateField = (field) => (
    !field || field === '' || /^\s*$/.test(field)
  );

  return timeout(250)
    .then(() => {
      const noLogin = validateField(values.login);
      const noPassword = validateField(values.password);

      if (!noLogin && !noPassword)
        return;

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