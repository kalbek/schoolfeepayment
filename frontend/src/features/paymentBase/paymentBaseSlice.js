import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  initialPeriodBasedPaymentState: [{ id: 0, periodChecked: false }],
  initialGradeLevelBasedPaymentState: [{ id: 0, gradeLevelChecked: false }],
  initialGenderBasedPaymentState: [{ id: 0, genderChecked: false }],
  initialSpecialNeedBasedPaymentState: [{ id: 0, specialNeedChecked: false }],
  initialScholarshipBasedPaymentState: [{ id: 0, scholarshipChecked: false }],
};

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    // Creating states
    setPeriodBasedPayments: (state, action) => {
      state.initialPeriodBasedPaymentState.push(action.payload);
    },
    setGradeLevelBasedPayments: (state, action) => {
      state.initialGradeLevelBasedPaymentState.push(action.payload);
    },
    setGenderPayments: (state, action) => {
      state.initialGenderBasedPaymentState.push(action.payload);
    },
    setSpecialNeedPayments: (state, action) => {
      state.initialSpecialNeedBasedPaymentState.push(action.payload);
    },
    setScholarshipBasedPayments: (state, action) => {
      state.initialScholarshipBasedPaymentState.push(action.payload);
    },
    // Updating states
    updatePeriodBasedPayments: (state, action) => {
      state.initialPeriodBasedPaymentState.map((payment) => {
        if (payment.id === action.payload.id) {
          payment.apChecked = action.payload.apChecked;
        }
      });
    },
    updateGradeLevelBasedPayments: (state, action) => {
      state.initialGradeLevelBasedPaymentState.map((payment) => {
        if (payment.id === action.payload.id) {
          payment.glChecked = action.payload.glChecked;
        }
      });
    },
    updateGenderBasedPayments: (state, action) => {
      state.initialGenderBasedPaymentState.map((payment) => {
        if (payment.id === action.payload.id) {
          payment.genderChecked = action.payload.genderChecked;
        }
      });
    },
    updateSpecialNeedPayments: (state, action) => {
      state.initialSpecialNeedBasedPaymentState.map((payment) => {
        if (payment.id === action.payload.id) {
          payment.specialNeedChecked = action.payload.specialNeedChecked;
        }
      });
    },
    updateScholarshipBasedPayments: (state, action) => {
      state.initialScholarshipBasedPaymentState.map((payment) => {
        if (payment.id === action.payload.id) {
          payment.scholarshipChecked = action.payload.scholarshipChecked;
        }
      });
    },

    // Deleting states
    deletePeriodBasedPayments: (state, action) => {
      state.initialPeriodBasedPaymentState =
        state.initialPeriodBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
      // iterate starting from the removed state till the end states
      // get the next state
      // set the next state to previous state
      console.log(state.initialPeriodBasedPaymentState);
      state.initialPeriodBasedPaymentState.map((currentState, index) => {});
    },
    deleteGradeLevelBasedPayments: (state, action) => {
      state.initialGradeLevelBasedPaymentState =
        state.initialGradeLevelBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
    },
    deleteGenderBasedPayments: (state, action) => {
      state.initialGradeLevelBasedPaymentState =
        state.initialGradeLevelBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
    },
    deleteSpecialNeedPayments: (state, action) => {
      state.initialSpecialNeedBasedPaymentState =
        state.initialSpecialNeedBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
    },
    deleteScholarshipBasedPayments: (state, action) => {
      state.initialScholarshipBasedPaymentState =
        state.initialScholarshipBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
    },
  },
});

export const {
  setPeriodBasedPayments,
  setGradeLevelBasedPayments,
  setGenderPayments,
  setSpecialNeedPayments,
  setScholarshipBasedPayments,
  updatePeriodBasedPayments,
  updateGradeLevelBasedPayments,
  updateGenderBasedPayments,
  updateSpecialNeedPayments,
  updateScholarshipBasedPayments,
  deletePeriodBasedPayments,
  deleteGradeLevelBasedPayments,
  deleteGenderBasedPayments,
  deleteSpecialNeedPayments,
  deleteScholarshipBasedPayments,
} = paymentSlice.actions;

export default paymentSlice.reducer;
