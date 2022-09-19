import { createSlice } from "@reduxjs/toolkit";
import { parseISO, format } from "date-fns";
 

const endDate = parseISO(
  "2021-7-13T12:30:00.000Z",
  "yyyy-M-dd'T'HH:mm:ss.SSSX",
  new Date()
);
console.log("hey")
console.log(new Date().toISOString())
// console.log(typeof format(parseISO("2021-7-13T12:30:00.000Z"), 'yy-m-dTh:mm:ss.lcz', { awareOfUnicodeTokens: true }))

const initialState = {
  annualPeriodState: [
    {
      id: 0,
      periodTypeName: "Semester",
      periodName: "",
      shiftName: "regularShift",

      periodStartDate: new Date().toISOString(),
      // periodStartDate: JSON.stringify(parseISO(new Date()), 1),
      periodEndDate: new Date().toISOString(),
      // periodEndDate: JSON.stringify(parseISO(new Date()), 1),
      hasRegularShift: true,
      hasExtensionShift: false,
      hasWeekendShift: false,
      hasCustomShift: false,
      customShiftName: "",
      periodToUpdate: "periodType",
    },
  ],
};
// console.log(typeof startDate);
// console.log(startDate);

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
            console.log(typeof action.payload.periodStartDate);
            periodState.periodStartDate = action.payload.periodStartDate;

            console.log(typeof action.payload.periodStartDate);
          } else if (action.payload.periodDetailsType === "periodEndDate") {
            periodState.periodEndDate = action.payload.periodEndDate;
          }
        }
      });
    },

    deletePeriods: (state, action) => {
      // console.log("action id: " + action.payload.id);
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
