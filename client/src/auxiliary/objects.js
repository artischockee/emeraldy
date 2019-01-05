const compareFunction = (a, b) => {
  const { '0': keyA } = a;
  const { '0': keyB } = b;

  if (keyA < keyB)
    return -1;

  if (keyA > keyB)
    return 0;

  return 0;
};

const typesDiffer = (o1, o2) => typeof o1 !== typeof o2;

const entriesAmountDiffer = (e1, e2) => e1.length !== e2.length;

const keyNamesDiffer = (k1, k2) => k1.some((k, i) => k !== k2[i]);

const valuesDiffer = (e1, e2) => (
  e1.some((e, i) => {
    const { '1' : v } = e;

    if (typeof v === 'object')
      return objectsDiffer(v, e2[i][1]);
    else
      return v !== e2[i][1];
  })
);

export const objectsDiffer = (obj1, obj2) => {
  if (obj1 === null || obj2 === null)
    return true;

  if (
    (obj1 === null && obj2 !== null)
    || (obj1 !== null && obj2 === null)
  ) return true;

  if (typesDiffer(obj1, obj2))
    return true;

  const keysObj1 = Object.keys(obj1).sort();
  const keysObj2 = Object.keys(obj2).sort();
  const entriesObj1 = Object.entries(obj1).sort(compareFunction);
  const entriesObj2 = Object.entries(obj2).sort(compareFunction);

  if (entriesAmountDiffer(keysObj1, keysObj2))
    return true;

  // if (keysObj1.some((key, index) => key !== keysObj2[index]))
  if (keyNamesDiffer(keysObj1, keysObj2))
    return true;

  // if (entriesObj1.some((entry, index) => {
  //   const { '1': value } = entry;
  //
  //   if (typeof value === "object") {
  //     return objectsDiffer(value, entries2[index][1]);
  //   }
  //   else {
  //     return value !== entriesObj2[index][1];
  //   }
  // }))
  //   return true;
  if (valuesDiffer(entriesObj1, entriesObj2))
    return true;
};