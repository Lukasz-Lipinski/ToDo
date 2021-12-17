<<<<<<< HEAD
const IS_ADDED_TRUE = "snackbar/elementAdded_true";
const IS_ADDED_FALSE = "snackbar/elementAdded_false";
const IS_DONE_TRUE = "snackbar/elementDone_true";
const IS_DONE_FALSE = "snackbar/elementDone_false";

export const isAddedTrue = () => ({ type: IS_ADDED_TRUE });
export const isAddedFalse = () => ({ type: IS_ADDED_FALSE });
export const isDoneTrue = () => ({ type: IS_DONE_TRUE });
export const isDoneFalse = () => ({ type: IS_DONE_FALSE });

const initialState = {
  isAdded: false,
  isDone: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case IS_ADDED_TRUE: 
			return {
        isAdded: true,
			};
    case IS_ADDED_FALSE:
      return {
        isAdded: false,
      };
    case IS_DONE_TRUE: 
      return {
        isDone: true
      };
    case IS_DONE_FALSE:
      return {
        isDone: false
      };
    default:
      return state;
    }
=======
const IS_ADDED_TRUE = "snackbar/elementAdded_true";
const IS_ADDED_FALSE = "snackbar/elementAdded_false";
const IS_DONE_TRUE = "snackbar/elementDone_true";
const IS_DONE_FALSE = "snackbar/elementDone_false";

export const isAddedTrue = () => ({ type: IS_ADDED_TRUE });
export const isAddedFalse = () => ({ type: IS_ADDED_FALSE });
export const isDoneTrue = () => ({ type: IS_DONE_TRUE });
export const isDoneFalse = () => ({ type: IS_DONE_FALSE });

const initialState = {
  isAdded: false,
  isDone: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case IS_ADDED_TRUE: 
			return {
        isAdded: true,
			};
    case IS_ADDED_FALSE:
      return {
        isAdded: false,
      };
    case IS_DONE_TRUE: 
      return {
        isDone: true
      };
    case IS_DONE_FALSE:
      return {
        isDone: false
      };
    default:
      return state;
    }
>>>>>>> 9f9f7ecf5291bf3006d4b273cdc17fdc114973ae
}