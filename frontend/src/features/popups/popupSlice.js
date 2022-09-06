import { createSlice } from "@reduxjs/toolkit";

const initialState = { popup: false, popupType: "" };

export const popupSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    setPopup(state, action) {
      state.popup = action.payload;
    },
    setPopupType(state, action) {
      state.popupType = action.payload;
    },
  },
});

export const { setPopup, setPopupType } = popupSlice.actions;
export default popupSlice.reducer;
