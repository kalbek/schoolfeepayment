import { createSlice } from "@reduxjs/toolkit";
const startDate = new Date();
const endDate = new Date();
const initialState = {
  annualPeriodState: [
    {
      id: 0,
      periodTypeName: "Semester",
      periodName: "",
      shiftName: "regularShift",

      // periodStartDate: startDate.toString(),
      periodStartDate: "",
      // periodEndDate: endDate.toString(),
      periodEndDate: "",
      hasRegularShift: true,
      hasExtensionShift: false,
      hasWeekendShift: false,
      hasCustomShift: false,
      customShiftName: "",
      periodToUpdate: "periodType",
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
        if (action.payload.periodToUpdate === "periodType") {
          if (action.payload.periodTypeName === "Semester") {
            periodState.periodTypeName = "Semester";
          } else if (action.payload.periodTypeName === "Term") {
            periodState.periodTypeName = "Term";
          } else if (action.payload.periodTypeName === "Quarter") {
            periodState.periodTypeName = "Quarter";
          } else if (action.payload.periodTypeName === "Custom_Period") {
            periodState.periodTypeName = "Custom Period";
          }
        } else if (action.payload.periodToUpdate === "periodShift") {
          if (action.payload.shiftName === "regularShift") {
            periodState.hasRegularShift = action.payload.hasRegularShift;
          }
          if (action.payload.shiftName === "extensionShift") {
            periodState.hasExtensionShift = action.payload.hasExtensionShift;
          }
          if (action.payload.shiftName === "weekendShift") {
            periodState.hasWeekendShift = action.payload.hasWeekendShift;
          }
          if (action.payload.shiftName === "customShift") {
            periodState.hasCustomShift = action.payload.hasCustomShift;
          }
        } else if (
          action.payload.periodToUpdate === "periodDetails" &&
          action.payload.id === periodState.id
        ) {
          if (action.payload.periodDetailsType === "periodDescription") {
            periodState.periodName = action.payload.periodName;
          } else if (action.payload.periodDetailsType === "periodStartDate") {
            periodState.periodStartDate = action.payload.periodStartDate;
          } else if (action.payload.periodDetailsType === "periodEndDate") {
            periodState.periodEndDate = action.payload.periodEndDate;
          }
        }

      });
    },

    deletePeriods: (state, action) => {
      console.log("action id: " + action.payload.id);
      state.annualPeriodState = state.annualPeriodState.filter(
        (period) => period.id !== action.payload.id
      );
      state.annualPeriodState.map((period) => {
        if (period.id > action.payload.id) {
          period.id -= 1;
        }
      });
      // state.annualPeriodState.map((period) => {
      //   console.log(period.id + " " + action.payload.id);
      //   if (period.id === action.payload.id) {
      //     console.log("perid id first: " + period.id);
      //     try {
      //     } catch (error) {
      //       console.error("error: " + error);
      //     }
      //   }
      // });
      // state.annualPeriodState.map((period) => {
      //   if (period.id === action.payload.id) {
      //     console.log("perid id first: " + period.id);
      //   }
      // });
    },

    resetPeriods: (state, action) => {
      console.log("hey")
      state.annualPeriodState = state.annualPeriodState.filter(
        (period) => period.id === action.payload.id
      );
      // console.log(state.annualPeriodState);

      // state.annualPeriodState.map((period) => {
      //   period.periodTypeName = "Semester";
      //   period.periodStartDate = startDate.toString();
      //   period.periodEndDate = startDate.toString();
      // });
    },
  },
});

export const { createPeriods, updatePeriods, deletePeriods, resetPeriods } =
  periodSlice.actions;

export default periodSlice.reducer;
