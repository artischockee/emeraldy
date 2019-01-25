export const assignLoginData = (data) => ({
  type: 'FUCK_YOU_ASSHOLE',
  payload: data
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

  console.log('action submitLogin', data);

  return fetch(apiLogin, init)
    .then(
      response => console.log('response', response),
      error => console.error(error)
    )
    // .then(smth => dispatch(assignLoginData(smth)))
};