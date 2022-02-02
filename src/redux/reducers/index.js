import { combineReducers } from "@reduxjs/toolkit";

import { templateReducer } from "./templateReducer";

export const reducers = combineReducers({
  allTemplates: templateReducer
});
