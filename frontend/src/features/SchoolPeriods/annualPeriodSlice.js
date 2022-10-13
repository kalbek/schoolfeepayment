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
    createTopLevelPeriods: (state, action) => {
      state.topLevelPeriod.push(action.payload);
    },
    createSubPeriods: (state, action) => {
      state.annualPeriodState.map((period) => {
        if (period.Id === action.payload.TopLevelId) {
          period.topLevelPeriod.subPeriods.push(action.payload.subPeriods);
        }
      });
    },

    includeTopLevelPeriods: (state, action) => {
      console.log("action.payload.id: " + action.payload.id)
      console.log("action.payload.value: " + action.payload.value)
      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.id){
          periodState.value = action.payload.value;
        }
      })
      // state.topLevelPeriod[0].value = action.payload.value;
    },

    updateTopLevelAnnualPeriod: (state, action) => {
      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.periodIndex) {
          if (!action.payload.hasCustomValue) {
            if (action.payload.periodTypeName === "Quarter") {
              periodState.periodTypeName = "Quarter";
            } else if (action.payload.periodTypeName === "Term") {
              periodState.periodTypeName = "Term";
            } else if (action.payload.periodTypeName === "Semester") {
              periodState.periodTypeName = "Semester";
            } else if (action.payload.periodTypeName === "Custom Period") {
              periodState.periodTypeName = "";
            }
          } else {
            periodState.periodTypeName = action.payload.value;
          }
        }
      });
    },

    updateSubperiods: (state, action) => {
      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.periodIndex) {
          if (!action.payload.hasCustomValue) {
            if (action.payload.subperiodTypeName === "Semester") {
              periodState.subperiodTypeName = "Semester";
            } else if (action.payload.subperiodTypeName === "Term") {
              periodState.subperiodTypeName = "Term";
            } else if (action.payload.subperiodTypeName === "Quarter") {
              periodState.subperiodTypeName = "Quarter";
            } else if (action.payload.subperiodTypeName === "Custom Period") {
              periodState.subperiodTypeName = "";
            }
          } else {
            periodState.subperiodTypeName = action.payload.value;
          }
          if (action.payload.subperiodTypeName === "periodDescription") {
            periodState.subPeriods.map((subperiod) => {
              if (subperiod.id === action.payload.subPeriodIndex) {
                subperiod.periodName = action.payload.value;
              }
            });
          }
          if (action.payload.periodToUpdate === "periodDates") {
            periodState.subPeriods.map((subperiod) => {
              if (subperiod.id === action.payload.subPeriodIndex) {
                if (action.payload.periodTypeName === "periodStartDate") {
                  subperiod.periodStartDate = action.payload.periodStartDate;
                } else if (action.payload.periodTypeName === "periodEndDate") {
                  subperiod.periodEndDate = action.payload.periodEndDate;
                }
              }
            });
          }
        }
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
        if (toplevelPeriod.id === action.payload.periodIndex) {
          toplevelPeriod.subPeriods.push(action.payload.subPeriod);
        }
      });
    },

    //  remove this or should you?
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
    deleteToplevelPeriod: (state, action) => {
      state.topLevelPeriod.map((topLevel) => {
        if (topLevel.id === action.payload.id) {
          state.topLevelPeriod = state.topLevelPeriod.filter(
            (period) => period.id != action.payload.id
          );
        }
      });

      state.topLevelPeriod.map((toplevelPeriod) => {
        if (toplevelPeriod.id > action.payload.id) {
          toplevelPeriod.id -= 1;
        }
      });
    },
    resetToplevelPeriod: (state, action) => {
      state.topLevelPeriod = state.topLevelPeriod.filter(
        (period) => period.id === action.payload.id
      )
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
  resetToplevelPeriod,
  deleteToplevelPeriod,
  updateShifts,
  updateTopLevelAnnualPeriod,
  deletePeriods,
  resetPeriods,
} = periodSlice.actions;

export default periodSlice.reducer;
