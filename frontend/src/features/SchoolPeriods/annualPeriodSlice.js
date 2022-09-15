import { createSlice } from "@reduxjs/toolkit";
const startDate = new Date();
const endDate = new Date();
const initialState = {
  annualPeriodState: [
    {
      id: 0,
      periodName: "Semester",
      periodStartDate: startDate.toString(),
      periodEndDate: endDate.toString(),
      isSemesterPeriodType: true,
      isTermPeriodType: false,
      isQuarterPeriodType: false,
      isCustomPeriodType: false,
      hasRegularShift: true,
      hasExtensionShift: false,
      hasWeekendShift: false,
      hasCustomShift: false,
      customShiftName: "",
      periodToUpdate: "isSemesterPeriodType",
    },
  ],
};

export const periodSlice = createSlice({
  name: "periods",
  initialState,
  reducers: {
    createPeriods: (state, action) => {
      state.annualPeriodState.push(action.payload);   
    },

    updatePeriods: (state, action) => {
      state.annualPeriodState.map((periodState) => {
        periodState.periodToUpdate = action.payload.periodToUpdate;
        if (action.payload.periodToUpdate === "isSemesterPeriodType") {
          periodState.isSemesterPeriodType =
            action.payload.isSemesterPeriodType;
        } else if (action.payload.periodToUpdate === "isTermPeriodType") {
          periodState.isTermPeriodType = action.payload.isTermPeriodType;
        } else if (action.payload.periodToUpdate === "isQuarterPeriodType") {
          periodState.isTermPeriodType = action.payload.isQuarterPeriodType;
        } else if (action.payload.periodToUpdate === "isCustomPeriodType") {
          periodState.isTermPeriodType = action.payload.isCustomPeriodType;
        } else if (action.payload.periodToUpdate === "hasRegularShift") {
          periodState.hasRegularShift = action.payload.hasRegularShift;
        } else if (action.payload.periodToUpdate === "hasExtensionShift") {
          periodState.hasExtensionShift = action.payload.hasExtensionShift;
        } else if (action.payload.periodToUpdate === "hasWeekendShift") {
          periodState.hasWeekendShift = action.payload.hasWeekendShift;
        } else if (action.payload.periodToUpdate === "hasCustomShift") {
          periodState.hasCustomShift = action.payload.hasCustomShift;
        }
        if (periodState.id === action.payload.id) {
          if (action.payload.periodToUpdate === "periodName") {
            periodState.periodName = action.payload.periodName;
          } else if (action.payload.periodToUpdate === "periodStartDate") {
            periodState.periodStartDate = action.payload.periodStartDate;
          } else if (action.payload.periodToUpdate === "periodEndDate") {
            periodState.periodEndDate = action.payload.periodEndDate;
          }
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
