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
      courses: [],
      visible: true,
      shifts: [],
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
          courses: [],
          visible: true,
          shifts: [],
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
      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.id) {
          periodState.value = action.payload.value;
        }
      });
    },

    updateTopLevelAnnualPeriod: (state, action) => {
      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.periodIndex) {
          if (action.payload.periodTypeName === "Quarter") {
            periodState.periodTypeName = "Quarter";
          }
          if (action.payload.periodTypeName === "Term") {
            periodState.periodTypeName = "Term";
          }
          if (action.payload.periodTypeName === "Semester") {
            periodState.periodTypeName = "Semester";
          }
          if (action.payload.periodTypeName === "Custom Period") {
            periodState.periodTypeName = "Custom";
          }
        }
      });
    },

    updateTopLevelPeriodName: (state, action) => {
      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.periodIndex) {
          periodState.periodName = action.payload.topLevelPeriodValue;
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

    deleteSubperiods: (state, action) => {
      state.topLevelPeriod.map((periodState) => {
        console.log(current(periodState).subPeriods);
        if (periodState.id === action.payload.id) {
          periodState.subPeriods.map((subperiod) => {
            if (subperiod.id === action.payload.subPeriodIndex) {
              periodState.subPeriods = periodState.subPeriods.filter(
                (subPeriod) => subPeriod.id != action.payload.subPeriodIndex
              );
            }
          });
        }
      });

      state.topLevelPeriod.map((periodState) => {
        if (periodState.id === action.payload.id) {
          periodState.subPeriods.map((subPeriod) => {
            if (subPeriod.id > action.payload.subPeriodIndex) {
              subPeriod.id -= 1;
            }
          });
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
            periodState.subPeriods.map((subPeriod) => {
              subPeriod.hasRegularShift = action.payload.hasRegularShift;
            });
          }
          if (
            action.payload.shiftName ===
            "extensionShift" + action.payload.periodIndex
          ) {
            periodState.hasExtensionShift = action.payload.hasExtensionShift;
            periodState.subPeriods.map((subPeriod) => {
              subPeriod.hasExtensionShift = action.payload.hasExtensionShift;
            });
          }
          if (
            action.payload.shiftName ===
            "weekendShift" + action.payload.periodIndex
          ) {
            periodState.hasWeekendShift = action.payload.hasWeekendShift;
            periodState.subPeriods.map((subPeriod) => {
              subPeriod.hasWeekendShift = action.payload.hasWeekendShift;
            });
          }
          if (
            action.payload.shiftName ===
            "customShift" + action.payload.periodIndex
          ) {
            periodState.hasCustomShift = action.payload.hasCustomShift;
            periodState.subPeriods.map((subPeriod) => {
              subPeriod.hasCustomShift = action.payload.hasCustomShift;
            });
          }
        }
      });
    },

    //  Pushing shifts
    pushRegularShift: (state, action) => {
      state.topLevelPeriod.map((toplevelPeriod) => {
        if (toplevelPeriod.id === action.payload.periodIndex) {
          if (toplevelPeriod.hasRegularShift) {
            toplevelPeriod.shifts.push(action.payload.shift);
          } else {
            toplevelPeriod.shifts = toplevelPeriod.shifts.filter(
              (shift) => shift.Id != 1
            );
          }
          console.log("so");
          console.log(current(toplevelPeriod));

          let h = false;
          for (let i = 0; i < toplevelPeriod.subPeriods.length; i++) {
            if (toplevelPeriod.subPeriods[i].hasRegularShift) {
              h = true;
              console.log(i + ": " + h);
            }
          }
          if (!h) {
            console.log("h is false");
            toplevelPeriod.subPeriods.map((subPeriod) => {
              if (subPeriod.hasRegularShift) {
                // subPeriod.shifts.push(action.payload.shift);
                subPeriod.shifts.filter((shift) => shift.Id != 1);
                console.log("has rs 1");
              }
            });
          } else {
            console.log("h is true");
            toplevelPeriod.subPeriods.map((subPeriod) => {
              if (subPeriod.hasRegularShift) {
                subPeriod.shifts.push(action.payload.shift);
                console.log("has rs 1");
              }
            });
          }

          console.log("so");
          console.log(current(toplevelPeriod));
        }
      });
    },

    pushExtensionShift: (state, action) => {
      state.topLevelPeriod.map((toplevelPeriod) => {
        if (toplevelPeriod.id === action.payload.periodIndex) {
          if (toplevelPeriod.hasExtensionShift) {
            toplevelPeriod.shifts.push(action.payload.shift);
          } else {
            toplevelPeriod.shifts = toplevelPeriod.shifts.filter(
              (shift) => shift.Id != 2
            );
          }

          let h = false;
          for (let i = 0; i < toplevelPeriod.subPeriods.length; i++) {
            if (toplevelPeriod.subPeriods[i].hasExtensionShift) {
              h = true;
            }
          }
          if (!h) {
            console.log("h is false");
            toplevelPeriod.subPeriods.map((subPeriod) => {
              if (subPeriod.hasExtensionShift)
                subPeriod.shifts.push(action.payload.shift);
            });
          } else {
            console.log("h is true");
            toplevelPeriod.subPeriods.map((subPeriod) => {
              if (subPeriod.hasExtensionShift)
                subPeriod.shifts.filter((shift) => shift.Id != 2);
            });
          }

          console.log("so");
          console.log(current(toplevelPeriod));
        }
      });
    },

    pushWeekendShift: (state, action) => {
      state.topLevelPeriod.map((toplevelPeriod) => {
        // handle shifts for annual period
        if (toplevelPeriod.id === action.payload.periodIndex) {
          if (toplevelPeriod.hasWeekendShift) {
            if (toplevelPeriod.shifts.length === 0)
              toplevelPeriod.shifts.push(action.payload.shift);
            else {
              for (let i = 0; i < toplevelPeriod.shifts.length; i++) {
                if (toplevelPeriod.shifts[i].Id !== 3) {
                  toplevelPeriod.shifts.push(action.payload.shift);
                }
              }
            }
          } else {
            toplevelPeriod.shifts = toplevelPeriod.shifts.filter(
              (shift) => shift.Id != 3
            );
          }
          console.log("so");
          console.log(current(toplevelPeriod));
          // handle shifts for annual subperiod
          toplevelPeriod.subPeriods.map((subPeriod) => {
            if (subPeriod.hasWeekendShift) {
              if (subPeriod.shifts.length === 0)
                subPeriod.shifts.push(action.payload.shift);
              else {
                for (let i = 0; i < subPeriod.shifts.length; i++) {
                  if (subPeriod.shifts[i].Id !== 3) {
                    subPeriod.shifts.push(action.payload.shift);
                  }
                }
              }
            } else {
              subPeriod.shifts = subPeriod.shifts.filter(
                (shift) => shift.Id != 3
              );
            }
          });
        }
      });
    },

    pushCustomShift: (state, action) => {
      state.topLevelPeriod.map((toplevelPeriod) => {
        if (toplevelPeriod.hasCustomShift) {
          if (toplevelPeriod.shifts.length === 0)
            toplevelPeriod.shifts.push(action.payload.shift);
          else {
            for (let i = 0; i < toplevelPeriod.shifts.length; i++) {
              if (toplevelPeriod.shifts[i].Id !== 4) {
                toplevelPeriod.shifts.push(action.payload.shift);
              }
            }
          }
        } else {
          toplevelPeriod.shifts = toplevelPeriod.shifts.filter(
            (shift) => shift.Id != 4
          );
        }
        console.log("so");
        console.log(current(toplevelPeriod));
        if (toplevelPeriod.id === action.payload.periodIndex) {
          toplevelPeriod.subPeriods.map((subPeriod) => {
            if (subPeriod.hasCustomShift) {
              if (subPeriod.shifts.length === 0)
                subPeriod.shifts.push(action.payload.shift);
              else {
                for (let i = 0; i < subPeriod.shifts.length; i++) {
                  if (subPeriod.shifts[i].Id !== 4) {
                    subPeriod.shifts.push(action.payload.shift);
                  }
                }
              }
            } else {
              subPeriod.shifts = subPeriod.shifts.filter(
                (shift) => shift.Id != 4
              );
            }
          });
        }
      });
    },

    clearShifts: (state, action) => {
      state.topLevelPeriod.map((toplevelPeriod) => {
        toplevelPeriod.shifts.splice(0);
      });
    },

    createSubPeriods: (state, action) => {
      state.topLevelPeriod.map((toplevelPeriod) => {
        if (toplevelPeriod.id === action.payload.periodIndex) {
          toplevelPeriod.subPeriods.push(action.payload.subPeriod);
        }
      });
    },

    //  remove this or should you?
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
      );
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
  updateTopLevelPeriodName,
  resetToplevelPeriod,
  deleteToplevelPeriod,
  updateShifts,
  updateTopLevelAnnualPeriod,
  deleteSubperiods,
  resetPeriods,
  pushRegularShift,
  pushExtensionShift,
  pushWeekendShift,
  pushCustomShift,
  clearShifts,
} = periodSlice.actions;

export default periodSlice.reducer;
