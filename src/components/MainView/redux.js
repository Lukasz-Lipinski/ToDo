const ADD_ELEMENT_TO_LIST = "mainView/addElement";
const SHOW_ADD_ELEMENT_WINDOW = "app/showAddElementWindow";
const HIDE_ADD_ELEMENT_WINDOW = "app/hideAddElementWindow";

export const addElement = (payload) => ({ type: ADD_ELEMENT_TO_LIST, payload });
export const showAddElementWindow = () => ({ type: SHOW_ADD_ELEMENT_WINDOW });
export const hideAddElementWindow = () => ({ type: HIDE_ADD_ELEMENT_WINDOW });

const INIT_STATE = {
  list: [],
  showAddElementWindow: false
}

export default function listReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_ELEMENT_TO_LIST:
      return {
        ...state,
        list: [{ element: action.payload.element, date: action.payload.date }],
        showAddElementWindow: false
      };
    case SHOW_ADD_ELEMENT_WINDOW:
      return {
        ...state,
        showAddElementWindow: true
      };
    case HIDE_ADD_ELEMENT_WINDOW:
      return {
        ...state,
        showAddElementWindow: false
      }
    default:
      return state;
  }
}