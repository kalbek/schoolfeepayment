import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  paymentState: [
    {
      id: 0,
      periodChecked: true,
      gradeLevelChecked: true,
      genderChecked: false,
      specialNeedChecked: false,
      scholarshipChecked: false,
      baseToUpdate: null,
      standardPaymentTerm: true,
      advancedPaymentTerm: false,
    },
  ],
};

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    // Creating states
    createPaymentBase: (state, action) => {
      state.paymentState.push(action.payload);
    },
    // Updating payment base states
    updatePayments: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.id) {
          if (action.payload.baseToUpdate === "periodBasedPayment") {
            paymentState.periodChecked = action.payload.periodChecked;
          } else if (action.payload.baseToUpdate === "gradeBasedPayment") {
            paymentState.gradeLevelChecked = action.payload.gradeLevelChecked;
          } else if (action.payload.baseToUpdate === "genderBasedPayment") {
            paymentState.genderChecked = action.payload.genderChecked;
          } else if (
            action.payload.baseToUpdate === "specialNeedBasedPayment"
          ) {
            paymentState.specialNeedChecked = action.payload.specialNeedChecked;
          } else if (
            action.payload.baseToUpdate === "scholarshipBasedPayment"
          ) {
            paymentState.scholarshipChecked = action.payload.scholarshipChecked;
          } else if (action.payload.termToUpdate === "standardPaymentTerm") {
            paymentState.standardPaymentTerm =
              action.payload.standardPaymentTerm;
          } else if (action.payload.termToUpdate === "advancedPaymentTerm") {
            paymentState.advancedPaymentTerm =
              action.payload.advancedPaymentTerm;
          }
        }
      });
    },

    // Updating payment term statues

    // Deleting states
    deletePaymentBase: (state, action) => {
      state.paymentState = state.paymentState.filter(
        (paymentBase) => paymentBase.id !== action.payload.id
      );
      state.paymentState.map((payment) => {
        if (payment.id > action.payload.id) {
          payment.id -= 1;
        }
      });
    },

    resetPaymentStates: (state) => {
      state.paymentState = state.paymentState.filter(
        (paymentBase) => paymentBase.id === 0
      );
      state.paymentState.map((payment) => {
        payment.periodChecked = true;
        payment.gradeLevelChecked = true;
        payment.genderChecked = false;
        payment.specialNeedChecked = false;
        payment.scholarshipChecked = false;
      });
    },
  },
});

export const {
  createPaymentBase,
  updatePayments,
  deletePaymentBase,
  resetPaymentStates,
} = paymentSlice.actions;

export default paymentSlice.reducer;
