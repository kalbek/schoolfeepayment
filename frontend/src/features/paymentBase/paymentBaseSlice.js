import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  initialAnnualPaymentBaseState: [{ id: 0, apChecked: false }],
  initialGradeLevelPaymentState: [{ id: 0, glChecked: false }],
};

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    setApPayments: (state, action) => {
      state.initialAnnualPaymentBaseState.push(action.payload);
    },
    deleteApPayments: (state, action) => {
      state.initialAnnualPaymentBaseState =
        state.initialAnnualPaymentBaseState.filter(
          (payments) => payments.id !== action.payload.id
        );
    },
    updateApPayments: (state, action) => {
      state.initialAnnualPaymentBaseState.map((payment) => {
        if (payment.id === action.payload.id) {
          payment.apChecked = action.payload.apChecked;
        }
      });
    },
    setGlPayments: (state, action) => {
      state.initialGradeLevelPaymentState.push(action.payload);
    },
    deleteGlPayments: (state, action) => {
      state.initialGradeLevelPaymentState =
        state.initialGradeLevelPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
    },
    updateGlPayments: (state, action) => {
      state.initialGradeLevelPaymentState.map((payment) => {
        if (payment.id === action.payload.id) {
          payment.glChecked = action.payload.glChecked;
        }
      });
    },
  },
});

export const {
  setApPayments,
  deleteApPayments,
  updateApPayments,
  setGlPayments,
  deleteGlPayments,
  updateGlPayments,
} = paymentSlice.actions;
export default paymentSlice.reducer;
