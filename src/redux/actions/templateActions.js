import { ActionTypes } from "../constants/action-types";

export const setTemplates = (templates) => {
  return {
    type: ActionTypes.SET_TEMPLATES,
    payload: templates
  };
};
