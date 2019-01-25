const ENTITY = 'USER';

export const User = {
  LOGIN_SUCCESSFUL: `${ENTITY} LOGIN_SUCCESSFUL`,
  LOGIN_FAILED: `${ENTITY} LOGIN_FAILED`
};

const assignLoginData = (data) => ({
  type: User.LOGIN_SUCCESSFUL,
  payload: data
});

const rejectLogin = () => ({
  type: User.LOGIN_FAILED
});

export const submitLogin = (data) => (dispatch) => {
  const apiLogin = '/api/login';

  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  return fetch(apiLogin, init)
    .then(
      response => response.json(),
      error => console.error(error)
    )
    .then(data => {
      if (data.error) {
        console.error(data.error);
        return dispatch(rejectLogin());
      }
      else {
        console.log('data', data);
        return dispatch(assignLoginData(data));
      }
    })
    // .then(smth => dispatch(assignLoginData(smth)))
};
