const ADD_ELEMENT_TO_LIST = "mainView/addElement";
const SET_CONDITION_TO_FILTER_LIST = "mainView/takeConditionToFilter";
const SET_CONDITION_DATE_TO_FILTER_LIST = "mainView/takeConditionDateToFilter";
const SET_NEW_LIST_AFTER_REMOVING_ELEMENT = "mainView/removeElement";
const SET_AS_DONE = "mainView/setDone";
const SET_FILTER_DATE = "mainview/settingFilterDate";
const SHOW_ADD_ELEMENT_WINDOW = "app/showAddElementWindow";
const HIDE_ADD_ELEMENT_WINDOW = "app/hideAddElementWindow";

export const addElement = (payload) => ({ type: ADD_ELEMENT_TO_LIST, payload });
export const showAddElementWindow = () => ({ type: SHOW_ADD_ELEMENT_WINDOW });
export const hideAddElementWindow = () => ({ type: HIDE_ADD_ELEMENT_WINDOW });
export const takeConditionToFilter = (payload) => ({ type: SET_CONDITION_TO_FILTER_LIST, payload })
export const setNewList = (payload) => ({ type: SET_NEW_LIST_AFTER_REMOVING_ELEMENT, payload })
export const setAsDone = (payload) => ({ type: SET_AS_DONE, payload });
export const takeConditionDateToFilter = (payload) => ({ type: SET_CONDITION_DATE_TO_FILTER_LIST, payload });
export const setIsFilterDate = (payload) => ({ type: SET_FILTER_DATE, payload });


const INIT_STATE = {
  list: [],
  showAddElementWindow: false,
  filterCondition: "All",
  filterConditionDate: "",
  id: 0,
  doneList: [],
  isFilterDate: false
};

export default function listReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_ELEMENT_TO_LIST:
      return {
        ...state,
        list: [...state.list, { element: action.payload.element, date: action.payload.date, category: action.payload.category, id: state.id }],
        showAddElementWindow: false,
        id: state.id + 1
      };
    case SET_NEW_LIST_AFTER_REMOVING_ELEMENT:
      return {
        ...state,
        list: action.payload
      }
    case SHOW_ADD_ELEMENT_WINDOW:
      return {
        ...state,
        showAddElementWindow: true
      };
    case HIDE_ADD_ELEMENT_WINDOW:
      return {
        ...state,
        showAddElementWindow: false
      };
    case SET_CONDITION_TO_FILTER_LIST:
      return {
        ...state,
        filterCondition: action.payload
      };
    case SET_AS_DONE:
      return {
        ...state,
        doneList: [...state.doneList, ...action.payload]
      };
    case SET_CONDITION_DATE_TO_FILTER_LIST: 
      return {
        ...state,
        filterConditionDate: action.payload
      };
    case SET_FILTER_DATE: 
      return {
        ...state,
        isFilterDate: action.payload
      };
    default:
      return state;
  };
};