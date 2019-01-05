export const ISODate = () => new Date().toISOString().substring(0, 10);

export const stringDatesDiffer = (d1, d2, comparator) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  let date1comp, date2comp;

  switch (comparator) {
    case 'm':
      date1comp = date1.getMonth();
      date2comp = date2.getMonth();
      break;

    default:
      return true;
  }

  return date1comp !== date2comp;
};