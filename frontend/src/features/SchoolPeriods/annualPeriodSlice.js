import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  topLevelPeriod: [
    {
      id: 0,
      value: false,
      periodTypeName: "TopSemester",
      subperiodTypeName: "Semester",
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

    updateTopLevelAnnualPeriod: (state, action) => {
      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.periodIndex) {
          if (action.payload.inputControlType === "topLevelPeriodRadio") {
            if (action.payload.periodTypeName === "TopQuarter") {
              periodState.periodTypeName = "TopQuarter";
            } else if (action.payload.periodTypeName === "TopTerm") {
              periodState.periodTypeName = "TopTerm";
            } else if (action.payload.periodTypeName === "TopSemester") {
              periodState.periodTypeName = "TopSemester";
            } else if (action.payload.periodTypeName === "TopCustom Period") {
              periodState.periodTypeName = "TopCustom Period";
            }
          }
          else if (action.payload.inputControlType === "topLevelPeriodRadio") {
            periodState.periodTypeName = action.payload.value
          }
        }
      });
    },

    updateSubperiods: (state, action) => {
      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.periodIndex) {
          if (action.payload.subperiodTypeName === "Semester") {
            periodState.subperiodTypeName = "Semester";
          } else if (action.payload.subperiodTypeName === "Term") {
            periodState.subperiodTypeName = "Term";
          } else if (action.payload.subperiodTypeName === "Quarter") {
            periodState.subperiodTypeName = "Quarter";
          } else if (action.payload.subperiodTypeName === "Custom Period") {
            periodState.subperiodTypeName = "Custom Period";
          }
        }
        periodState.subPeriods.map((subPeriod) => {
          if (subPeriod.id === action.payload.subPeriodId) {
            if (action.payload.periodDetailsType === "periodDescription") {
              subPeriod.periodName = action.payload.periodName;
            } else if (action.payload.periodDetailsType === "periodStartDate") {
              subPeriod.periodStartDate = action.payload.periodStartDate;
            } else if (action.payload.periodDetailsType === "periodEndDate") {
              subPeriod.periodEndDate = action.payload.periodEndDate;
            }
          }
        });
      });
    },

    updateShifts: (state, action) => {
      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.periodIndex) {
          if (
            action.payload.shiftName ===
            "regularShift" + action.payload.periodIndex
          ) {
            periodState.hasRegularShift = action.payload.hasRegularShift;
          }
          if (
            action.payload.shiftName ===
            "extensionShift" + action.payload.periodIndex
          ) {
            periodState.hasExtensionShift = action.payload.hasExtensionShift;
          }
          if (
            action.payload.shiftName ===
            "weekendShift" + action.payload.periodIndex
          ) {
            periodState.hasWeekendShift = action.payload.hasWeekendShift;
          }
          if (
            action.payload.shiftName ===
            "customShift" + action.payload.periodIndex
          ) {
            periodState.hasCustomShift = action.payload.hasCustomShift;
          }
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
  updateSubperiods,
  updateShifts,
  updateTopLevelAnnualPeriod,
  deletePeriods,
  resetPeriods,
} = periodSlice.actions;

export default periodSlice.reducer;
