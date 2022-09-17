import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  face: 'Юридическое лицо',
  city: '',
  initials: '',
  telephone: '',
  email: '',
  originalLang: 'с языка',
  targetLang: 'на язык',
  image: 'В электронном виде',
  date: '',
  comment: '',
  privacy: false,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      const {name, value} = action.payload;
      return {
          ...state,
          [name]: value,
      };
    },
  }
});


export const {
  updateValue,
} = formSlice.actions;

export default formSlice.reducer;
