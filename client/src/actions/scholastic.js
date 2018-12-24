const ENTITY = "Scholastic";

export const Scholastic = {
  LOAD_DATA: `${ENTITY} LOAD DATA`,
  UNLOAD_DATA: `${ENTITY} UNLOAD DATA`,
  INVOKE_DELETE_DIALOG: `${ENTITY} INVOKE DELETE DIALOG`,
  CLOSE_DIALOG: `${ENTITY} CLOSE DIALOG`
};

export const loadData = (data) => ({
  type: Scholastic.LOAD_DATA,
  payload: data
});

export const unloadData = () => ({
  type: Scholastic.UNLOAD_DATA
});

export const invokeDeleteDialog = (objectIdToDelete, callback) => ({
  type: Scholastic.INVOKE_DELETE_DIALOG,
  payload: objectIdToDelete,
  callback
});

export const closeDialog = () => ({
  type: Scholastic.CLOSE_DIALOG,
});