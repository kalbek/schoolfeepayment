import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
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
};

export const periodSlice = createSlice({
  name: "periods",
  initialState,
  reducers: {
    // The new action
    // End of the new action

    // The new action
    createTopLevelPeriods: (state, action) => {
      state.topLevelPeriod.push(action.payload);
    },
    createSubPeriods: (state, action) => {
      console.log("topLevelId: " + action.payload.topLevelId);
      state.annualPeriodState.map((period) => {
        if (period.Id === action.payload.TopLevelId) {
          period.topLevelPeriod.subPeriods.push(action.payload.subPeriods);
        }
      });
    },

    includeTopLevelPeriods: (state, action) => {
      state.topLevelPeriod[0].value = action.payload.value;
    },

    updateSubPeriods: (state, action) => {
      state.annualPeriodState.map((period) => {
        if (period.Id === action.payload.TopLevelId) {
          period.subPeriods.map((subPeriod) => {
            if (subPeriod.Id === action.payload.subPeriodId) {
              // To do sub period updation
            }
          });
        }
      });
    },

    // End of the new action
    createSubPeriods: (state, action) => {
      state.topLevelPeriod.map((toplevelPeriod) => {
        if (toplevelPeriod.id === action.payload.topLevelId) {
          toplevelPeriod.subPeriods.push(action.payload.subPeriod);
        }
      });
    },

    updatePeriods: (state, action) => {
      state.topLevelPeriod.map((periodState) => {
        periodState.periodToUpdate = action.payload.periodToUpdate;
        if (action.payload.periodToUpdate === "periodType") {
          periodState.subPeriods.map((subPeriod) => {
            if (action.payload.periodTypeName === "Semester") {
              subPeriod.periodTypeName = "Semester";
            } else if (action.payload.periodTypeName === "Term") {
              subPeriod.periodTypeName = "Term";
            } else if (action.payload.periodTypeName === "Quarter") {
              subPeriod.periodTypeName = "Quarter";
            } else if (action.payload.periodTypeName === "Custom Period") {
              subPeriod.periodTypeName = "Custom Period";
            }
          });
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
        } else if (action.payload.periodToUpdate === "periodDetails") {
          periodState.subPeriods.map((subPeriod) => {
            if (subPeriod.id === action.payload.subPeriodId) {
              if (action.payload.periodDetailsType === "periodDescription") {
                // console.log(subPeriod.id + " : " + action.payload.subPeriodId);
                subPeriod.periodName = action.payload.periodName;
              } else if (
                action.payload.periodDetailsType === "periodStartDate"
              ) {
                subPeriod.periodStartDate = action.payload.periodStartDate;
              } else if (action.payload.periodDetailsType === "periodEndDate") {
                subPeriod.periodEndDate = action.payload.periodEndDate;
              }
            }
          });
        }
      });
    },

    deletePeriods: (state, action) => {
      state.topLevelPeriod.map((topLevel) => {
        console.log(current(topLevel).subPeriods);
        if (topLevel.id === action.payload.topLevelId) {
          topLevel.subPeriods = topLevel.subPeriods.filter(
            (subPeriod) => subPeriod.id != action.payload.id
          );
        }
        console.log(current(topLevel).subPeriods);
      });

      state.topLevelPeriod.map((toplevelPeriod) => {
        if (toplevelPeriod.id === action.payload.topLevelId) {
          toplevelPeriod.subPeriods.map((subPeriod) => {
            if (subPeriod.id > action.payload.id) {
              subPeriod.id -= 1;
            }
          });
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

export const {
  createTopLevelPeriods,
  createSubPeriods,
  includeTopLevelPeriods,
  updatePeriods,
  deletePeriods,
  resetPeriods,
} = periodSlice.actions;

export default periodSlice.reducer;
