import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  hasRegularShift: true,
  hasExtensionShift: false,
  hasWeekendShift: false,
  hasCustomShift: false,
  customShiftName: "",
  annualPeriodState: [
    {
      id: 0,
      periodType: "Semester",
      periodName: "Semester 1",
      periodStartDate: new Date(),
      periodEndDate: new Date(),
    },
  ],
};

export const periodSlice = createSlice({
  name: "periods",
  initialState,
  reducers: {
    createPeriods: (state, action) => {
      //   initialState.hasRegularShift = true;
      //   initialState.hasExtensionShift = false;
      //   initialState.hasWeekendShift = false;
      //   initialState.hasCustomShift = false;
      //   initialState.customShiftName = "";
      state.annualPeriodState.push(action.payload);
    },
    updatePeriods: (state, action) => {
      initialState.hasRegularShift = action.payload.regularShift;
      initialState.hasExtensionShift = action.payload.hasExtensionShift;
      initialState.hasWeekendShift = action.payload.weekendShift;
      initialState.hasCustomShift = action.payload.customShift;
      initialState.customShiftName = action.payload.customShiftName;

      state.initialState.map((periodState) => {
        if (periodState.id === action.payload.id) {
          periodState.periodType = action.payload.periodType;
          periodState.periodName = action.payload.periodName;
          periodState.periodStartDate = action.payload.periodStartDate;
          periodState.periodEndDate = action.payload.periodEndDate;
        }
      });
    },

    deletePeriods: (state, action) => {
      state.annualPeriodState = state.annualPeriodState.filter(
        (period) => period.id !== action.payload.id
      );

      state.annualPeriodState.map((period) => {
        if (period.id > action.payload.id) {
          period.id -= 1;
        }
      });
    },

    resetPeriods: (state) => {
      state.annualPeriodState = state.annualPeriodState.filter(
        (period) => period.id === 0
      );

      state.annualPeriodState.map((period) => {
        period.periodType = "Semester";
        period.periodName = "Semester 1";
        period.periodStartDate = new Date();
        period.periodEndDate = new Date();
      });
    },
  },
});

export const { createPeriods, updatePeriods, deletePeriods, resetPeriods } =
  periodSlice.actions;

export default periodSlice.reducer;
