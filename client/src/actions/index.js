export const Value = {
  INC: 'INC',
  DEC: 'DEC',
  NUL: 'NUL'
};

export const increment = () => ({
  type: Value.INC
})

export const decrement = () => ({
  type: Value.DEC
})

export const nullify = () => ({
  type: Value.NUL
})
