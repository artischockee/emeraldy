const ENTITY = "Scholastic";

export const Scholastic = {
  LOAD_DATA: `${ENTITY} LOAD DATA`,
  UNLOAD_DATA: `${ENTITY} UNLOAD DATA`
};

export const loadData = (data) => ({
  type: Scholastic.LOAD_DATA,
  payload: data
});

export const unloadData = () => ({
  type: Scholastic.UNLOAD_DATA
});