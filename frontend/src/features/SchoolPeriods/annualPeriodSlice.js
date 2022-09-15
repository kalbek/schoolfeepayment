import { createSlice } from "@reduxjs/toolkit";
const startDate = new Date();
const endDate = new Date();
const initialState = {
  annualPeriodState: [
    {
      id: 0,
      periodName: "isSemesterPeriodType",
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
        console.log(periodState.isSemesterPeriodType);
        console.log(periodState.isTermPeriodType);
        console.log(periodState.isQuarterPeriodType);
        console.log(periodState.isCustomPeriodType);
        if (action.payload.periodToUpdate === "periodType") {
          if (action.payload.periodName === "isSemesterPeriodType"){
            periodState.isSemesterPeriodType = !periodState.isSemesterPeriodType;
            periodState.periodToUpdate = "isSemesterPeriodType";
          }
          else if (action.payload.periodName === "isTermPeriodType"){
            periodState.isTermPeriodType = !periodState.isTermPeriodType;
            periodState.periodToUpdate = "isTermPeriodType";
          }
          else if (action.payload.periodName === "isQuarterPeriodType"){
            periodState.isQuarterPeriodType = !periodState.isQuarterPeriodType;
            periodState.periodToUpdate = "isQuarterPeriodType";
          }
          else if (action.payload.periodName === "isCustomPeriodType"){
            periodState.isCustomPeriodType = !periodState.isCustomPeriodType;
            periodState.periodToUpdate = "isCustomPeriodType";
          }
        
          console.log("thens");
          console.log(periodState.isSemesterPeriodType);
          console.log(periodState.isTermPeriodType);
          console.log(periodState.isQuarterPeriodType);
          console.log(periodState.isCustomPeriodType);
        }

        // if (action.payload.periodToUpdate === "hasRegularShift") {
        //   periodState.hasRegularShift = action.payload.hasRegularShift;
        // } else if (action.payload.periodToUpdate === "hasExtensionShift") {
        //   periodState.hasExtensionShift = action.payload.hasExtensionShift;
        // } else if (action.payload.periodToUpdate === "hasWeekendShift") {
        //   periodState.hasWeekendShift = action.payload.hasWeekendShift;
        // } else if (action.payload.periodToUpdate === "hasCustomShift") {
        //   periodState.hasCustomShift = action.payload.hasCustomShift;
        // }
        // if (periodState.id === action.payload.id) {
        //   if (action.payload.periodToUpdate === "periodName") {
        //     periodState.periodName = action.payload.periodName;
        //   } else if (action.payload.periodToUpdate === "periodStartDate") {
        //     periodState.periodStartDate = action.payload.periodStartDate;
        //   } else if (action.payload.periodToUpdate === "periodEndDate") {
        //     periodState.periodEndDate = action.payload.periodEndDate;
        //   }
        // }
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
        period.periodName = "Semester";
        period.periodStartDate = startDate.toString();
        period.periodEndDate = startDate.toString();
        period.isSemesterPeriodType = true;
        period.isTermPeriodType = false;
        period.isQuarterPeriodType = false;
        period.isCustomPeriodType = false;
      });
    },
  },
});

export const { createPeriods, updatePeriods, deletePeriods, resetPeriods } =
  periodSlice.actions;

export default periodSlice.reducer;
