import { ActionTypes } from "../constants/action-types";

const initialState = {
  template: [
    {
      id: 1,
      name: "Tega",
      course: "csc"
    }
  ]
};
export const templateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TEMPLATES:
      return state;

    default:
      return state;
  }
};
