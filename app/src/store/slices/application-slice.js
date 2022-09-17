import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {

    showSuccessPopup: (state, action) => {

      state.successPopupVisible = true;
    },
    hideSuccessPopup: (state, action) => {
      state.successPopupVisible = false;
    },

  }
});

export const {
  showSuccessPopup,
  hideSuccessPopup,
} = applicationSlice.actions;

export default applicationSlice.reducer;
