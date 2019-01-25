import { SubmissionError } from 'redux-form';
import { submitLogin } from '../../actions';
import { timeout } from '../';

const validateField = (field) => (
  !field || field === '' || /^\s*$/.test(field)
);

const submit = (values, dispatch) => {
  return timeout(750).then(() => {
    const noLogin = validateField(values.login);
    const noPassword = validateField(values.password);

    if (!noLogin && !noPassword)
      return dispatch(submitLogin(values));

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