import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  initialPeriodBasedPaymentState: [{ id: 0, periodChecked: true }],
  initialGradeLevelBasedPaymentState: [{ id: 0, gradeLevelChecked: true }],
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
          payment.periodChecked = action.payload.periodChecked;
        }
      });
    },
    updateGradeLevelBasedPayments: (state, action) => {
      state.initialGradeLevelBasedPaymentState.map((payment) => {
        if (payment.id === action.payload.id) {
          payment.gradeLevelChecked = action.payload.gradeLevelChecked;
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
      // filter the existing state by id to remove that specific state
      state.initialPeriodBasedPaymentState =
        state.initialPeriodBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
      // update ids of the state after a single state is removed by index
      state.initialPeriodBasedPaymentState.map((payment) => {
        if (payment.id > action.payload.id) {
          payment.id -= 1;
        }
      });
    },
    deleteGradeLevelBasedPayments: (state, action) => {
      state.initialGradeLevelBasedPaymentState =
        state.initialGradeLevelBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );

      state.initialGradeLevelBasedPaymentState.map((payment) => {
        if (payment.id > action.payload.id) {
          payment.id -= 1;
        }
      });
    },
    deleteGenderBasedPayments: (state, action) => {
      state.initialGradeLevelBasedPaymentState =
        state.initialGradeLevelBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
      state.initialGenderBasedPaymentState.map((payment) => {
        if (payment.id > action.payload.id) {
          payment.id -= 1;
        }
      });
    },
    deleteSpecialNeedPayments: (state, action) => {
      state.initialSpecialNeedBasedPaymentState =
        state.initialSpecialNeedBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
      state.initialSpecialNeedBasedPaymentState.map((payment) => {
        if (payment.id > action.payload.id) {
          payment.id -= 1;
        }
      });
    },
    deleteScholarshipBasedPayments: (state, action) => {
      state.initialScholarshipBasedPaymentState =
        state.initialScholarshipBasedPaymentState.filter(
          (payments) => payments.id !== action.payload.id
        );
      state.initialScholarshipBasedPaymentState.map((payment) => {
        if (payment.id > action.payload.id) {
          payment.id -= 1;
        }
      });
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
