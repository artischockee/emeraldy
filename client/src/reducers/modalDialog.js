import { Scholastic } from '../actions';

const modalDialog = (state = null, action) => {
  switch (action.type) {
    case Scholastic.INVOKE_DELETE_DIALOG:
      return {
        name: 'Delete Dialog',
        itemId: action.payload,
        callback: action.callback
      };
    case Scholastic.CLOSE_DIALOG:
      return null;
    default:
      return state;
  }
};

export default modalDialog;
