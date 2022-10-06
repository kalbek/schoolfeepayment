import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  annualPeriodState: [
    {
      topLevelPeriod: [
        {
          id: 0,
          value: false,
          periodTypeName: "Semester",
          periodName: "",
          shiftName: "regularShift",
          periodStartDate: new Date().toISOString(),
          periodEndDate: new Date().toISOString(),
          hasRegularShift: true,
          hasExtensionShift: false,
          hasWeekendShift: false,
          hasCustomShift: false,
          customShiftName: "",
          periodToUpdate: "periodType",
          subPeriods: [
            {
              id: 0,
              periodTypeName: "Semester",
              periodName: "",
              shiftName: "regularShift",
              periodStartDate: new Date().toISOString(),
              periodEndDate: new Date().toISOString(),
              hasRegularShift: true,
              hasExtensionShift: false,
              hasWeekendShift: false,
              hasCustomShift: false,
              customShiftName: "",
              periodToUpdate: "periodType",
            },
          ],
        },
      ],

      id: 0,
      periodTypeName: "Semester",
      periodName: "",
      shiftName: "regularShift",
      periodStartDate: new Date().toISOString(),
      periodEndDate: new Date().toISOString(),
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
    // The new action
    // End of the new action

    // The new action
    createTopLevelPeriods: (state, action) => {
      state.annualPeriodState.push(action.payload);
    },
    createSubPeriods: (state, action) => {
      state.annualPeriodState.map((period) => {
        if (period.Id === action.payload.TopLevelId) {
          period.topLevelPeriod.subPeriods.push(action.payload.subPeriods);
        }
      });
    },
    updateTopLevelPeriods: (state, action) => {
      state.annualPeriodState.map((period) => {
        if (period.Id === action.payload.TopLevelId) {
          // To do updatation
          period.periodTypeName = action.payload.periodTypeName;
          period.periodName = action.payload.periodName;
          period.shiftName = action.payload.shiftName;
          period.periodStartDate = action.payload.periodStartDate;
          period.periodEndDate = action.payload.periodEndDate;
          period.hasRegularShift = action.payload.hasRegularShift;
          period.hasExtensionShift = action.payload.hasExtensionShift;
          period.hasWeekendShift = action.payload.hasWeekendShift;
          period.hasCustomShift = action.payload.hasCustomShift;
          period.customShiftName = action.payload.customShiftName;
          period.periodToUpdate = action.payload.periodToUpdate;
        }
      });
    },
    updateSubPeriods: (state, action) => {
      state.annualPeriodState.map((period) => {
        if (period.Id === action.payload.TopLevelId){
          period.subPeriods.map(subPeriod => {
            if (subPeriod.Id === action.payload.subPeriodId){
              // To do sub period updation
            }
          })
        }
      });
    },
    // End of the new action
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
          } else if (action.payload.periodTypeName === "Custom Period") {
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
      state.annualPeriodState = state.annualPeriodState.filter(
        (period) => period.id !== action.payload.id
      );
      state.annualPeriodState.map((period) => {
        if (period.id > action.payload.id) {
          period.id -= 1;
        }
      });
    },

    resetPeriods: (state, action) => {
      state.annualPeriodState = state.annualPeriodState.filter(
        (period) => period.id === action.payload.id
      );
    },
  },
});

export const { createPeriods, updatePeriods, deletePeriods, resetPeriods } =
  periodSlice.actions;

export default periodSlice.reducer;
