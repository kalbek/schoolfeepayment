import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, step: [0] };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 0.5;
    },
    decrement(state) {
      state.count -= 0.5;
    },
    setStep(state, action) {
      state.count = action.payload;
    },
    resetStep(state) {
      state.count = 0;
    },
    trackStep(state, action) {
      state.step.push(action.payload);
    },
    setPopup(state, action) {
      state.popup = action.payload;
    },
  },
});

export const { increment, decrement, setStep, resetStep, trackStep } =
  counterSlice.actions;
export default counterSlice.reducer;
