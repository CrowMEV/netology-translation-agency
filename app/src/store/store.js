import {configureStore} from "@reduxjs/toolkit";
import applicationReducer from "./slices/application-slice";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
  },
});
