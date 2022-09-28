import {configureStore} from "@reduxjs/toolkit";
import applicationReducer from "./slices/application-slice";
import formReducer from "./slices/form-slice";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['form/addFiles'],
      },
    }),
});
