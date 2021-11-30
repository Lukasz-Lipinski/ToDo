const ADD_ELEMENT_TO_LIST = "mainView/addElement";
const SHOW_ADD_ELEMENT_WINDOW = "app/showAddElementWindow";
const HIDE_ADD_ELEMENT_WINDOW = "app/hideAddElementWindow";
const SET_CONDITION_TO_FILTER_LIST = "mainView/takeConditionToFilter";

export const addElement = (payload) => ({ type: ADD_ELEMENT_TO_LIST, payload });
export const showAddElementWindow = () => ({ type: SHOW_ADD_ELEMENT_WINDOW });
export const hideAddElementWindow = () => ({ type: HIDE_ADD_ELEMENT_WINDOW });
export const takeConditionToFilter = (payload) => ({ type: SET_CONDITION_TO_FILTER_LIST, payload })

const INIT_STATE = {
  list: [],
  showAddElementWindow: false,
  filterCondition: null
};

export default function listReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_ELEMENT_TO_LIST:
      return {
        ...state,
        list: [...state.list, { element: action.payload.element, date: action.payload.date, category: action.payload.category }],
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
    case SET_CONDITION_TO_FILTER_LIST:
      return {
        ...state,
        filterCondition: action.payload
      }
    default:
      return state;
  };
};