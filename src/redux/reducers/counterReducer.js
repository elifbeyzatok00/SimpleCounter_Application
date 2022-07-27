import { getValue } from "@testing-library/user-event/dist/utils";
import * as actionTypes from "../actions/actionTypes";
const counterReducer = (state = 0, action) => {
  let newstate;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newstate = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newstate = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newstate = state + action.payload);

    default:
      return state;
  }
};

export default counterReducer;
