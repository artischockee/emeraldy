// The 'object' argument contains field names with the error string.
// example:
// {
//   login: 'The user paulmccartney'
// }

module.exports = function ErrorMessage(object) {
  this.hasError = true;

  Object.entries(object).forEach(entry => {
    this[entry[0]] = entry[1]
  });
};