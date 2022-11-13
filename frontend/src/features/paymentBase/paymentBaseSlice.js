import { createSlice, current } from "@reduxjs/toolkit";
import SubDivision from "../../components/Utilities/DynamicFields/DynamicPayments1/PaymentBase/Advanced/SubDivision";
const initialState = {
  paymentState: [
    {
      //  EVERY TYPES OF PAYMENTS EXISTING IN A SCHOOL !!
      Id: 0,
      paymentType: {
        isCustomPaymentType: false,
        paymentName: "Registration Fee",
        customPaymentName: "",
        selectedPeriodType: "standard",
        selectedDivisionType: "subDivision",
        paymentAmount: {
          paymentAmountId: 0,
          hasDiscountRules: false,
          amount: "",
          grossAmount: "",
        },
        discountUnits: "amount0",
        // newly added
        periods: [],
        subPeirods: [],
        divisions: [],
        subDivisions: [],
      },

      // PAYMENT BASES OR BASES IN WICH EACH PAYMENT DEPENDS ON !!
      paymentBase: {
        value: true,
        paymentBaseType: "standard0",
        standardAnnualPeriodCheckbox: true,
        standardAnnualPeriodType: "subperiod0",
        standardEducationalDivisionCheckbox: true,
        standardEducationalDivisionType: "subdivision0",
        standardShiftsCheckbox: false,
        standardDueDatesCheckbox: false,
        periodDueDate: [
          // {
          //   Id: "",
          //   periodId: "",
          //   periodName: "",
          //   dueDate: new Date().toISOString(),
          // },
        ],
        subPeriodDueDate: [
          // {
          //   Id: "",
          //   subPeriodId: "",
          //   periodName: "",
          //   dueDate: new Date().toISOString(),
          // },
        ],

        paymentDueDate: new Date().toISOString(),
        standardPenalityCheckbox: false,
        advancedAnnualPeriodCheckbox: true,
        advancedAnnualPeriodType: "subperiod0",
        advancedEducationalDivisionCheckbox: true,
        advancedMajorEducationalDivisionCheckbox: true,
        advancedEducationalDivisionType: "subdivision0",
        advancedEducationalSubDivisionCheckbox: true,
        advancedCourseUnitsCheckbox: true,
        advancedCourseUnitType: "credithour0",
        advancedShiftsCheckbox: false,
        periods: [],
        courses: [],
        standardPaymentBase: {
          value: true,
          visible: true,
          divisions: [],
          courses: [],
          periods: [],
          shifts: [],
          // newly added
          payments: [],
        },
        advancedPaymentBase: {
          value: true,
          visible: true,
          divisions: [],
          courses: [],
          periods: [],
          shifts: [],
          courseBasedPayment: {},
        },
        courseBasedPayment: {
          value: false,
          topVisibility: true,
          visible: true,
          previousCourseRulesApplied: false,
          basedOnDivision: true,
          basedOnSubDivision: true,
          display: true,
          // divisions stand for dep't
          divisions: [],
          courses: [],
          periods: [],
          shifts: [],
        },

        periodPaymentBase: {
          value: true,
          periods: [
            {
              Id: 0,
              periodName: "",
              startDate: "",
              endDate: "",
              paymentDueDate: "",
              paymentAmount: "",
            },
          ],
        },
        gradeLevelPaymentBase: {
          value: true,
          grades: [
            {
              Id: 0,
              gradeName: "",
              numberOfSections: "",
              paymentAmount: "",
            },
          ],
        },
        creditHoursPaymentBase: {
          value: false,
        },
        courseTypePaymentBase: {
          value: false,
          courses: [
            {
              Id: 0,
              courseName: "",
              creditHour: 0,
              contactHour: 0,
              paymentAmount: 0,
            },
          ],
        },
        customPaymentBase: {
          value: false,
          paymentBases: [],
        },
      },

      //   PAYMENT DISCOUNT PARAMETERS IN WHICH EACH PAYMENT DISCOUNTS DEPENDS ON
      discountParameters: {
        Id: 0,
        value: true,
        discountUnit: "amount0",
        isGradeBasedDiscountType: false,
        genderBasedDiscount: {
          value: false,
          amount: "",
          percentage: "",
          genderType: "female",
          gradesEligibleForDiscount: [
            // { gradeName: "", percentage: "", amount: "" },
          ],
        },
        specialNeedsBasedDiscount: {
          value: false,
          amount: "",
          percentage: "",
          specialNeeds: [],
          discountUnit: "percentage",
          gradesEligibleForDiscount: [
            // { gradeName: "", percentage: "", amount: "" },
          ],
        },
        scholarshipBasedDiscount: {
          value: false,
          amount: "",
          percentage: "",
          scholarships: [],
          discountUnit: "percentage",
          gradesEligibleForDiscount: [
            // { gradeName: "", percentage: "", amount: "" },
          ],
        },
        customPaymentDiscount: {
          value: false,
          amount: "",
          percentage: "",
          customDiscounts: [],
          discountUnit: "percentage",
        },
      },
      paymentTerm: {
        paymentTermType: "standard0",
      },

      totalPaymentAmount: {
        Id: 0,
        paymentAmount: 0,
      },
    },
  ],
};

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    // ACTIONS FOR PAYMENTS IN GENERAL
    createPayments: (state, action) => {
      state.paymentState.push(action.payload);
    },

    updateDueDates: (state, action) => {
      state.paymentState.map((payments) => {
        if (payments.Id === action.payload.index) {
          if (action.payload.peirodType === "period") {
            payments.paymentBase.periodDueDate.splice(0);
            payments.paymentBase.periodDueDate.push(
              action.payload.peirodDueDates
            );
          } else {
            payments.paymentBase.subPeriodDueDate.splice(0);
            payments.paymentBase.subPeriodDueDate.push(
              action.payload.subPeriodDueDates
            );
          }
        }
      });
    },
    initializeValueForPeiordDueDates: (state, action) => {
      state.paymentState.map((payments) => {
        if (payments.Id === action.payload.index) {
          payments.paymentBase.periodDueDate.push(
            action.payload.peirodDueDates
          );
        }
      });
    },
    initializeValueForSubPeriodDueDates: (state, action) => {
      state.paymentState.map((payments) => {
        if (payments.Id === action.payload.index) {
          // payments.paymentBase.subPeriodDueDate.splice(0);
          payments.paymentBase.subPeriodDueDate.push(
            action.payload.subPeriodDueDates
          );
        }
      });
    },

    // update payment types
    updatePaymentTypesForPaymentBase: (state, action) => {
      state.paymentState.map((payments) => {
        const paymentIndex = action.payload.paymentIndex;
        const periods = action.payload.periods;
        const divisions = action.payload.divisions;
        const stdPaymentBaseType = action.payload.paymentBaseType === "s";
        const advPaymentBaseType = action.payload.paymentBaseType === "a";
        const standardAnnualPeriodCheckbox =
          action.payload.standardAnnualPeriodCheckbox;
        const standardEducationalDivisionCheckbox =
          action.payload.standardEducationalDivisionCheckbox;
        const standardAnnualPeriodType =
          action.payload.standardAnnualPeriodType;
        const subPeiriodSelected =
          action.payload.standardAnnualPeriodType.charAt(0) === "s";
        const periodSelected =
          action.payload.standardAnnualPeriodType.charAt(0) === "p";
        const divisionSelected =
          action.payload.standardEducationalDivisionType.charAt(0) === "d";
        const subDivisionSelected =
          action.payload.standardEducationalDivisionType.charAt(0) === "s";
        const standardShiftsCheckbox = action.payload.standardShiftsCheckbox;
        payments.paymentType.periods = periods;
        payments.paymentType.divisions = divisions;
        payments.paymentBase.standardPaymentBase.periods = periods;
        payments.paymentBase.standardPaymentBase.divisions = divisions;
        if (payments.Id === paymentIndex && stdPaymentBaseType) {
          payments.paymentType.selectedPeriodType = subPeiriodSelected
            ? "subPeirod"
            : "period";
          payments.paymentType.selectedDivisionType = divisionSelected
            ? "division"
            : "subDivision";
          payments.paymentType.periods = periods;
          payments.paymentType.divisions = divisions;
          payments.paymentBase.standardPaymentBase.periods = periods;
          payments.paymentBase.standardPaymentBase.divisions = divisions;

          // case 1 Both Annual Periods & Divisions are selected
          if (
            standardAnnualPeriodCheckbox &&
            standardEducationalDivisionCheckbox
          ) {
            // combination 1 subPeirod with subDivision (semester with grade)
            if (subPeiriodSelected && subDivisionSelected) {
              payments.paymentType.periods = periods;
            }
            // combination 2 Peirod with Division (quarter with stage)
            if (periodSelected && divisionSelected) {
            }
            // combination 3 subPeirod with subDivision (semester with stage)
            if (subPeiriodSelected && divisionSelected) {
            }
            // combination 4 Peirod with subDivision (quarter with grade)
            if (periodSelected && subDivisionSelected) {
            }
          }
          // case 2 Annual Period selected & Divisions not selected
          else if (
            standardAnnualPeriodCheckbox &&
            !standardEducationalDivisionCheckbox
          ) {
          }
        }
      });
    },

    deletePayments: (state, action) => {
      state.paymentState = state.paymentState.filter(
        (payment) => payment.Id !== action.payload.paymentId
      );
      state.paymentState.map((payment) => {
        if (payment.Id > action.payload.paymentId) {
          payment.Id -= 1;
          if (
            payment.discountParameters.genderBasedDiscount.genderType.charAt(
              0
            ) === "m"
          )
            payment.discountParameters.genderBasedDiscount.genderType =
              "male" + payment.Id;
          else if (
            payment.discountParameters.genderBasedDiscount.genderType.charAt(
              0
            ) === "f"
          )
            payment.discountParameters.genderBasedDiscount.genderType =
              "female" + payment.Id;
          // update payment discount Units
          if (payment.discountParameters.discountUnit.charAt(0) === "p") {
            payment.discountParameters.discountUnit = "percentage" + payment.Id;
          } else if (
            payment.discountParameters.discountUnit.charAt(0) === "a"
          ) {
            payment.discountParameters.discountUnit = "amount" + payment.Id;
          }
        }
      });
    },

    // END OF PAYMENTS ACTIONS IN GENERAL
    // ACTIONS FOR PAYMENT TYPE
    updatePaymentType: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentType.paymentName = action.payload.paymentName;
          paymentState.paymentType.isCustomPaymentType =
            action.payload.isCustomPaymentType;
          //  if custom payment type is selected clear text box value for new input
        }
        // if (action.payload.isCustomPaymentType) paymentState.paymentType = "";
      });
    },

    updateCustomPaymentType: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          // paymentState.paymentType.paymentName = "Tuition Fee"
          paymentState.paymentType.customPaymentName =
            action.payload.paymentName;
        }
      });
    },

    deleteCustomPaymentType: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentIndex) {
          paymentState.paymentType.isCustomPaymentType = false;
          paymentState.paymentType.customPaymentName = "";
        }
      });
    },

    // END OF PAYMENT TYPE ACTIONS
    // NEW ACTIONS FOR PAYMENT BASE (STANDARD PAYMENT BASE)
    updateStandardPaymentBaseAnnualPeriodCheckboxSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.standardAnnualPeriodCheckbox =
            action.payload.value;
        }
      });
    },

    updateStandardPaymentBaseAnnualPeriodTypeRadioSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.standardAnnualPeriodType =
            action.payload.annualPeriodType;
        }
      });
    },

    updateStandardPaymentBaseEducationalDivisionCheckboxSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.standardEducationalDivisionCheckbox =
            action.payload.value;
        }
      });
    },

    updateStandardPaymentBaseEducationalDivisionTypeRadioSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.standardEducationalDivisionType =
            action.payload.divisionType;
        }
      });
    },

    updateStandardPaymentBaseShiftsCheckboxSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.standardShiftsCheckbox =
            action.payload.value;
        }
      });
    },
    updateStandardPaymentDueDatesCheckboxSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.standardDueDatesCheckbox =
            action.payload.value;
        }
      });
    },
    updateStandardPaymentPenalityCheckboxSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.standardPenalityCheckbox =
            action.payload.value;
        }
      });
    },
    // NEW ACTIONS FOR PAYMENT BASE (ADVANCED PAYMENT BASE)
    updateAdvancedPaymentBaseAnnualPeriodCheckboxSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.advancedAnnualPeriodCheckbox =
            action.payload.value;
        }
      });
    },

    updateAdvancedPaymentBaseAnnualPeriodTypeRadioSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.advancedAnnualPeriodType =
            action.payload.annualPeriodType;
        }
      });
    },

    updateAdvancedPaymentBaseEducationalDivisionCheckboxSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.advancedEducationalDivisionCheckbox =
            action.payload.value;
          //  commneting advancedMajorEducationalDivisionCheckbox reset function
          // if (
          //   !paymentState.paymentBase
          //     .advancedMajorEducationalDivisionCheckbox ||
          //   !paymentState.paymentBase.advancedEducationalSubDivisionCheckbox
          // )
          //   paymentState.paymentBase.advancedMajorEducationalDivisionCheckbox = true;
        }
      });
    },

    updateAdvancedPaymentBaseMajorEducationalDivisionCheckboxSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.advancedMajorEducationalDivisionCheckbox =
            action.payload.value;
        }
        if (
          !paymentState.paymentBase.advancedMajorEducationalDivisionCheckbox &&
          !paymentState.paymentBase.advancedEducationalSubDivisionCheckbox
        ) {
          paymentState.paymentBase.advancedEducationalDivisionCheckbox = false;
        }
      });
    },

    updateAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.advancedEducationalSubDivisionCheckbox =
            action.payload.value;
        }
        if (
          !paymentState.paymentBase.advancedMajorEducationalDivisionCheckbox &&
          !paymentState.paymentBase.advancedEducationalSubDivisionCheckbox
        ) {
          paymentState.paymentBase.advancedEducationalDivisionCheckbox = false;
        }
      });
    },

    //  FOR COURSE UNITS BASED ADVANCED PAYMENT BASE SELECTION
    updateAdvancedPaymentBaseCourseUnitsCheckboxSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.advancedCourseUnitsCheckbox =
            action.payload.value;
        }
      });
    },

    updateAdvancedPaymentBaseCourseUnitsTypeRadioSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.advancedCourseUnitType =
            action.payload.courseUnitType;
        }
      });
    },

    applyPreviousCourseRules: (state, action) => {
      // iterate over the previous payment state divisions to that of passed index
      // and fill the current payment state's divisions with that of the previous ones

      // first toogle value for apply previous course rule button
      state.paymentState[
        action.payload.paymentId
      ].paymentBase.courseBasedPayment.previousCourseRulesApplied =
        action.payload.value;

      // if that value is on
      if (
        state.paymentState[action.payload.paymentId].paymentBase
          .courseBasedPayment.previousCourseRulesApplied
      ) {
        // first clear current courses
        state.paymentState[
          action.payload.paymentId
        ].paymentBase.courseBasedPayment.divisions.splice(0);
        state.paymentState[
          action.payload.paymentId
        ].paymentBase.courseBasedPayment.courses.splice(0);
        state.paymentState[
          action.payload.paymentId
        ].paymentBase.courseBasedPayment.periods.splice(0);
        // then apply previous course rules
        // apply for divisions
        state.paymentState[
          action.payload.paymentId - 1
        ].paymentBase.courseBasedPayment.divisions.map((divisions) => {
          state.paymentState[
            action.payload.paymentId
          ].paymentBase.courseBasedPayment.divisions.push(divisions);
        });
        // applyl for courses
        state.paymentState[
          action.payload.paymentId - 1
        ].paymentBase.courseBasedPayment.courses.map((course) => {
          state.paymentState[
            action.payload.paymentId
          ].paymentBase.courseBasedPayment.courses.push(course);
        });
        // apply for periods
        state.paymentState[
          action.payload.paymentId - 1
        ].paymentBase.courseBasedPayment.periods.map((period) => {
          state.paymentState[
            action.payload.paymentId
          ].paymentBase.courseBasedPayment.periods.push(period);
        });
      } else {
        // clear courses
        state.paymentState[
          action.payload.paymentId
        ].paymentBase.courseBasedPayment.divisions.splice(0);
        // turn off course based payment to reset state
        state.paymentState[
          action.payload.paymentId
        ].paymentBase.courseBasedPayment.value = false;
        // finally turn off the apply couser rules checkbox
        state.paymentState[
          action.payload.paymentId
        ].paymentBase.courseBasedPayment.previousCourseRulesApplied = false;

        // clear all existing courses
      }
    },

    createNewCoursesForAdvancedPaymentBase: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.courseBasedPayment.divisions.map(
            (division) => {
              if (division.id === action.payload.divisionId) {
                division.educationalSubDivision.map((subDivision) => {
                  if (subDivision.id === action.payload.subDivisionId) {
                    subDivision.subPeriods.map((subPeriod) => {
                      if (subPeriod.id === action.payload.subPeriodIndex) {
                        subPeriod.courses.push(action.payload.courses);
                      }
                    });
                  }
                });
              }
            }
          );
        }
      });
    },

    //  it starts here
    updateAdvancedCourseBasedPaymentVisibility: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.courseBasedPayment.visible =
            action.payload.value;
          paymentState.paymentBase.courseBasedPayment.topVisibility =
            action.payload.topVisibility;
          if (!paymentState.paymentBase.courseBasedPayment.value) {
            paymentState.paymentBase.courseBasedPayment.courses.splice(0);
            paymentState.paymentBase.courseBasedPayment.periods.splice(0);
            paymentState.paymentBase.courseBasedPayment.divisions.splice(0);
          }
        }
      });
    },

    // Removing of previous payment base course handlings starts here
    addCoursesToPaymentBases: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.paymentBase.courseBasedPayment.value) {
          if (paymentState.Id === action.payload.paymentId) {
            // adding courses
            paymentState.paymentBase.courseBasedPayment.courses.push(
              action.payload.courses
            );
          }
          // push single course inside each divisions
          paymentState.paymentBase.courseBasedPayment.divisions.map(
            (division) => {
              if (division.courses.length === 0) {
                division.courses.push(action.payload.courses);
              }
              // and to sub-divisins
              division.educationalSubDivision.map((subDivision) => {
                if (subDivision.courses.length === 0) {
                  subDivision.courses.push(action.payload.courses);
                }
              });
            }
          );
        } else {
          paymentState.paymentBase.courseBasedPayment.divisions.map(
            (division) => {
              division.courses.splice(0);
              division.educationalSubDivision.map((subDivision) => {
                subDivision.courses.splice(0);
              });
            }
          );
        }
      });
    },
    // removing ends here
    // handling courses for Annual Peirod based and not division based payment types
    createMajorAnnualPeriodNotDivisionCourseAndCrhr: (state, action) => {
      // renaming payloads values
      const paymentIndex = action.payload.paymentIndex;
      const periodIndex = action.payload.periodIndex;
      const shiftIndex = action.payload.shiftIndex;

      // handling creations for major annual period based payments
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const periods = paymentState.paymentBase.courseBasedPayment.periods;
          periods.map((period) => {
            if (period.id === periodIndex) {
              period.shifts.map((shift) => {
                if (shift.Id - 1 === shiftIndex) {
                  shift.courses.push(action.payload.course);
                }
              });
            }
          });
        }
      });
    },
    // handling deletions for major annual period based payments
    deleteMajorAnnualPeriodNotDivisionCourseAndCrhr: (state, action) => {
      // renaming payloads values
      const paymentIndex = action.payload.paymentIndex;
      const periodIndex = action.payload.paymentIndex;
      const shiftIndex = action.payload.paymentIndex;
      const courseIndex = action.payload.courseIndex;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const periods = paymentState.paymentBase.courseBasedPayment.periods;
          periods.map((period) => {
            if (period.id === periodIndex) {
              period.shifts.map((shift) => {
                if (shift.Id - 1 === shiftIndex) {
                  shift.courses = shift.courses.filter(
                    (v) => v.Id !== courseIndex
                  );
                }
              });
            }
          });
        }
      });

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const periods = paymentState.paymentBase.courseBasedPayment.periods;
          periods.map((period) => {
            if (period.id === periodIndex) {
              period.shifts.map((shift) => {
                if (shift.Id - 1 === shiftIndex) {
                  shift.courses.map((course) => {
                    if (course.Id > courseIndex) {
                      course.Id -= 1;
                    }
                  });
                }
              });
            }
          });
        }
      });
    },

    updateMajorAnnualPeriodNotDivisionCourse: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      const paymentIndex = action.payload.index;
      const periodIndex = action.payload.periodIndex;
      const shiftIndex = action.payload.shiftIndex;
      const courseIndex = action.payload.courseIndex;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const periods = paymentState.paymentBase.courseBasedPayment.periods;
          periods.map((period) => {
            if (period.id === periodIndex) {
              period.shifts.map((shift) => {
                if (shift.Id - 1 === shiftIndex) {
                  shift.courses.map((course) => {
                    if (course.Id === courseIndex) {
                      if (name === "course") {
                        course.courseName = value;
                      } else if (name === "crhr") course.creditHours = value;
                      else if (name === "ctchr") course.contactHours = value;
                    }
                  });
                }
              });
            }
          });
        }
      });
    },
    updateShowHideCoursesForMajorAnnualPeriodAndNotDivisions: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.paymentIndex;
      const periodIndex = action.payload.periodIndex;
      const visible = action.payload.visible;

      // toogling visibility value for payments
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const periods = paymentState.paymentBase.courseBasedPayment.periods;
          periods.map((period) => {
            if (period.id === periodIndex) {
              period.visible = visible;
            }
          });
        }
      });
    },

    // FOR SUB-ANNUAL PERIODS
    // handling courses for Annual Peirod based and not division based payment types
    createSubAnnualPeriodNotDivisionCourseAndCrhr: (state, action) => {
      // renaming payloads values
      const paymentIndex = action.payload.index;
      const periodIndex = action.payload.subIndex;
      const subPeriodIndex = action.payload.subSubIndex;
      const shiftIndex = action.payload.subSubSubIndex;
      const course = action.payload.course;

      // handling creations for major annual period based payments
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const periods = paymentState.paymentBase.courseBasedPayment.periods;
          periods.map((period) => {
            if (period.id === periodIndex) {
              period.subPeriods.map((subPeriod) => {
                if (subPeriod.id === subPeriodIndex) {
                  subPeriod.shifts.map((shift) => {
                    if (shift.Id - 1 === shiftIndex) {
                      shift.courses.push(course);
                    }
                  });
                }
              });
            }
          });
        }
      });
    },

    // handling deletions for sub-annual periods
    deleteSubAnnualPeriodNotDivisionCourseAndCrhr: (state, action) => {
      // renaming payloads values
      const paymentIndex = action.payload.index;
      const periodIndex = action.payload.subIndex;
      const subPeriodIndex = action.payload.subSubIndex;
      const shiftIndex = action.payload.subSubSubIndex;
      const courseIndex = action.payload.subSubSubSubIndex;

      // handling creations for major annual period based payments
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const periods = paymentState.paymentBase.courseBasedPayment.periods;
          periods.map((period) => {
            if (period.id === periodIndex) {
              period.subPeriods.map((subPeriod) => {
                if (subPeriod.id === subPeriodIndex) {
                  subPeriod.shifts.map((shift) => {
                    if (shift.Id - 1 === shiftIndex) {
                      shift.courses = shift.courses.filter(
                        (v) => v.Id !== courseIndex
                      );
                      //  updating id's for courses after deletion
                      shift.courses.map((course) => {
                        if (course.Id > courseIndex) {
                          course.Id -= 1;
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    },
    // toogling visibility value for subperiodpayments
    updateShowHideCoursesForSubAnnualPeriodAndNotDivisions: (state, action) => {
      const paymentIndex = action.payload.paymentIndex;
      const periodIndex = action.payload.periodIndex;
      const subPeriodIndex = action.payload.subPeriodIndex;
      const visible = action.payload.visible;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const periods = paymentState.paymentBase.courseBasedPayment.periods;
          periods.map((period) => {
            if (period.id === periodIndex) {
              period.subPeriods.map((subPeriod) => {
                if (subPeriod.id === subPeriodIndex) {
                  subPeriod.visible = visible;
                }
              });
            }
          });
        }
      });
    },

    // create new course for division based not sub-annual period based payments
    createNewCourseForSubDivisionBasedNotAnnualPeriodBasedPayments: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const courses = action.payload.courses;
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  subDivision.courses.push(courses);
                }
              });
            }
          });
        }
      });
    },

    //  delete subPeriodsCourses from division based & not annual period based payment bases
    deleteRemoveCoursesForDivisonButNotAnnualPeriodBasedPayments: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const courseIndex = action.payload.courseIndex;
      console.log(current(state).paymentState);
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  subDivision.courses = subDivision.courses.filter(
                    (course) => course.Id !== courseIndex
                  );
                  subDivision.courses.map((course) => {
                    if (course.Id > courseIndex) {
                      course.Id -= 1;
                    }
                  });
                }
              });
            }
          });
        }
      });
    },

    // update courses for division based & not annual period based payment bases
    updateSubDivsionBasedNnotPeriodBasedValues: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const courseIndex = action.payload.courseIndex;
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  subDivision.courses.map((course) => {
                    if (course.Id === courseIndex) {
                      if (name === "courseName") {
                        course.courseName = value;
                      } else if (name === "CrHr") {
                        course.creditHours = value;
                      } else if (name === "ContactHr") {
                        course.contactHours = value;
                      }
                    }
                  });
                }
              });
            }
          });
        }
      });
    },

    // updateShowHideCoursesForSubDivisionNotAnnualPeriod
    updateShowHideCoursesForSubDivisionNotAnnualPeriod: (state, action) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const visible = action.payload.visible;
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  subDivision.visible = visible;
                }
              });
            }
          });
        }
      });
    },

    createCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const periodIndex = action.payload.periodIndex;
      const shiftIndex = action.payload.shiftIndex;
      const course = action.payload.course;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          const period =
            paymentState.paymentBase.courseBasedPayment.periods[periodIndex];
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  period.shifts.map((shift) => {
                    if (shift.Id - 1 === shiftIndex) {
                      shift.courses.push(course);
                    }
                  });
                }
              });
            }
          });
        }
      });
    },
    deleteCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const periodIndex = action.payload.periodIndex;
      const shiftIndex = action.payload.shiftIndex;
      const courseIndex = action.payload.courseIndex;
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          const period =
            paymentState.paymentBase.courseBasedPayment.periods[periodIndex];
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  period.shifts.map((shift) => {
                    if (shift.Id - 1 === shiftIndex) {
                      shift.courses = shift.courses.filter(
                        (course) => course.Id != courseIndex
                      );
                      shift.courses.map((course) => {
                        if (course.Id > courseIndex) {
                          course.Id -= 1;
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    },
    // handle values for major annual period and major division & subdivision based payemnt bases

    updateCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments: (
      state,
      action
    ) => {
      const name = action.payload.name;
      const value = action.payload.value;
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const periodIndex = action.payload.periodIndex;
      const shiftIndex = action.payload.shiftIndex;
      const courseIndex = action.payload.courseIndex;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          const period =
            paymentState.paymentBase.courseBasedPayment.periods[periodIndex];
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  period.shifts.map((shift) => {
                    if (shift.Id - 1 === shiftIndex) {
                      shift.courses.map((course) => {
                        if (course.Id === courseIndex) {
                          if (name === "courseName") {
                            course.courseName = value;
                          }
                          if (name === "CrHr") {
                            course.creditHours = value;
                          }
                          if (name === "ContactHr") {
                            course.contactHours = value;
                          }
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    },

    // update hide or show
    updatehideShowCoursesForMajorAnnualPeriodAndMajorDivisionPayments: (
      state,
      action
    ) => {
      const value = action.payload.value;
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const periodIndex = action.payload.periodIndex;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          const period =
            paymentState.paymentBase.courseBasedPayment.periods[periodIndex];
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  period.visible = value;
                }
              });
            }
          });
        }
      });
    },
    // FOR MAJOR ANNUAL PERIOD AND SUB-PERIODS

    updateValueForSubAnnualPeriodAndMajorDivisonPaymentBase: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const periodIndex = action.payload.periodIndex;
      const subPeriodIndex = action.payload.subPeriodIndex;
      const shiftIndex = action.payload.shiftIndex;
      const courseIndex = action.payload.courseIndex;
      const name = action.payload.name;
      const value = action.payload.value;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          const period =
            paymentState.paymentBase.courseBasedPayment.periods[periodIndex];
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  period.subPeriods.map((subPeriod) => {
                    if (subPeriod.id === subPeriodIndex) {
                      subPeriod.shifts.map((shift) => {
                        if (shift.Id - 1 === shiftIndex) {
                          shift.courses.map((course) => {
                            if (course.Id === courseIndex) {
                              if (name === "courseName") {
                                course.courseName = value;
                              }
                              if (name === "CrHr") {
                                course.creditHours = value;
                              }
                              if (name === "ContactHr") {
                                course.contactHours = value;
                              }
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    },

    //  create sub annual period based both major and sub-division based payments
    createCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const periodIndex = action.payload.periodIndex;
      const subPeriodIndex = action.payload.subPeriodIndex;
      const shiftIndex = action.payload.shiftIndex;
      const course = action.payload.course;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          const period =
            paymentState.paymentBase.courseBasedPayment.periods[periodIndex];
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  period.subPeriods.map((subPeriod) => {
                    if (subPeriod.id === subPeriodIndex) {
                      subPeriod.shifts.map((shift) => {
                        if (shift.Id - 1 === shiftIndex) {
                          shift.courses.push(course);
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    },

    // delete sub annual period based both major and sub-division based payments
    deleteCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const periodIndex = action.payload.periodIndex;
      const subPeriodIndex = action.payload.subPeriodIndex;
      const shiftIndex = action.payload.shiftIndex;
      const courseIndex = action.payload.courseIndex;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          const period =
            paymentState.paymentBase.courseBasedPayment.periods[periodIndex];
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  period.subPeriods.map((subPeriod) => {
                    if (subPeriod.id === subPeriodIndex) {
                      subPeriod.shifts.map((shift) => {
                        if (shift.Id - 1 === shiftIndex) {
                          shift.courses = shift.courses.filter(
                            (course) => course.Id !== courseIndex
                          );
                          shift.courses.map((course) => {
                            if (course.Id > courseIndex) {
                              course.Id -= 1;
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    },

    updateHideShowCoursesForSubAnnualPeriodAndMajorDivisionPayments: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const subDivisionIndex = action.payload.subDivisionIndex;
      const periodIndex = action.payload.periodIndex;
      const subPeriodIndex = action.payload.subPeriodIndex;
      const visible = action.payload.value;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          const period =
            paymentState.paymentBase.courseBasedPayment.periods[periodIndex];
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              divisions.educationalSubDivision.map((subDivision) => {
                if (subDivision.id === subDivisionIndex) {
                  period.subPeriods.map((subPeriod) => {
                    if (subPeriod.id === subPeriodIndex) {
                      subPeriod.visible = visible;
                    }
                  });
                }
              });
            }
          });
        }
      });
    },

    // for major annual-divisions and not sub-divisions
    updateValueForMajorPeriodMajorDivisionNotSubDivisionCourses: (
      state,
      action
    ) => {
      const paymentIndex = action.payload.index;
      const divisionIndex = action.payload.divisionIndex;
      const periodIndex = action.payload.periodIndex;
      const shiftIndex = action.payload.shiftIndex;
      const courseIndex = action.payload.courseIndex;
      const name = action.payload.name;
      const value = action.payload.value;
      console.log("value is " + value);

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentIndex) {
          const division =
            paymentState.paymentBase.courseBasedPayment.divisions;
          const period =
            paymentState.paymentBase.courseBasedPayment.periods[periodIndex];
          division.map((divisions) => {
            if (divisions.id === divisionIndex) {
              period.shifts.map((shift) => {
                if (shift.Id - 1 === shiftIndex) {
                  shift.courses.map((course) => {
                    if (course.Id === courseIndex) {
                      if (name === "courseName") {
                        console.log("are you here");
                        course.courseName += value;
                        console.log(current(course).courseName);
                      }
                      if (name === "CrHr") {
                        course.creditHours = value;
                      }
                      if (name === "ContactHr") {
                        course.contactHours = value;
                      }
                    }
                  });
                }
              });
            }
          });
        }
      });
    },
    // for course only based payments

    updateCourseOnlyBasedPaymentsValues: (state, action) => {
      const paymentId = action.payload.index;
      const courseIndex = action.payload.courseIndex;
      const value = action.payload.value;
      const name = action.payload.name;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentId) {
          paymentState.paymentBase.courseBasedPayment.courses.map((course) => {
            if (course.Id === courseIndex) {
              if (name === "courseName") {
                course.courseName = value;
              }
              if (name === "creditHour") {
                course.creditHours = value;
              }
              if (name === "ContactHr") {
                course.contactHours = value;
              }
            }
          });
        }
      });
    },
    createCoursesToCourseOnlyBasedPaymentBases: (state, action) => {
      const paymentId = action.payload.index;
      const course = action.payload.courses;

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentId) {
          paymentState.paymentBase.courseBasedPayment.courses.push(course);
        }
      });
    },
    updateShowHideCoursesForCourseOnlyBasedBases: (state, action) => {
      const paymentId = action.payload.index;
      const visible = action.payload.visible;
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentId) {
          paymentState.paymentBase.courseBasedPayment.visible = visible;
        }
      });
    },
    deleteCoursesToCourseOnlyBasedPaymentBases: (state, action) => {
      const paymentId = action.payload.index;
      const courseIndex = action.payload.courseIndex;
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === paymentId) {
          paymentState.paymentBase.courseBasedPayment.courses =
            paymentState.paymentBase.courseBasedPayment.courses.filter(
              (course) => course.Id !== courseIndex
            );
          paymentState.paymentBase.courseBasedPayment.courses.map((course) => {
            if (course.Id > courseIndex) {
              course.Id -= 1;
            }
          });
        }
      });
    },
    //  =========================================================

    updatePeriodsForCourseBasedPayments: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          if (
            paymentState.paymentBase.courseBasedPayment.periods.length === 0
          ) {
            paymentState.paymentBase.courseBasedPayment.periods =
              action.payload.periods;
          }
          if (paymentState.standardPaymentBase.periods.length === 0) {
            paymentState.standardPaymentBase.periods = action.payload.periods;
          }
          if (!paymentState.paymentBase.courseBasedPayment.value) {
            paymentState.paymentBase.courseBasedPayment.periods.splice(0);
          }
        }
      });
    },

    addDivisionsToPaymentBasedCourses: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          if (
            paymentState.paymentBase.courseBasedPayment.divisions.length === 0
          ) {
            paymentState.paymentBase.courseBasedPayment.divisions =
              action.payload.divisions;
          }
          if (!paymentState.paymentBase.courseBasedPayment.value) {
            paymentState.paymentBase.courseBasedPayment.divisions.splice(0);
          }

          if (paymentState.standardPaymentBase.periods.length === 0) {
            paymentState.standardPaymentBase.periods = action.payload.periods;
          }
        }
      });
    },

    // push shifts to payment base's educational division and subdivisions
    addShiftsToDivisionsAndTheirSubDivisions: (state, action) => {
      state.paymentState.map((paymentState) => {
        // if courses checkbox is checked
        if (paymentState.paymentBase.courseBasedPayment.value) {
          paymentState.paymentBase.courseBasedPayment.divisions.map(
            (division) => {
              // if no shifts are already in divisins push shifts to payment state
              if (division.shifts.length === 0) {
                action.payload.shift.map((shifts) => {
                  division.shifts.push(shifts);
                });
                // also push shifts to subDivisions
                division.educationalSubDivision.map((subDiv) => {
                  if (subDiv.shifts.length === 0) {
                    action.payload.shift.map((shifts) => {
                      subDiv.shifts.push(shifts);
                    });
                  }
                });
              }
            }
          );
        } else {
          // else remove shifts from payment base's division & subdivisions
          paymentState.paymentBase.courseBasedPayment.divisions.map(
            (topDivision) => {
              topDivision.map((division) => {
                // first remvoe them from major divisions
                division.shifts = division.shifts.filter(
                  (shift) => shift.Id === -1
                );
                // then from divisions as well
                division.educationalSubDivision.map((subDiv) => {
                  subDiv.shifts = subDiv.shifts.filter(
                    (shift) => shift.Id === -1
                  );
                });
              });
            }
          );
        }
      });
    },
    // the dispatched by course type checkbox
    updateAdvancedPaymentBaseCourseTypeCheckboxSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.courseBasedPayment.value =
            action.payload.value;
          // turn show button on
          if (paymentState.paymentBase.courseBasedPayment.value) {
            paymentState.paymentBase.courseBasedPayment.periods.splice(0);
            paymentState.paymentBase.courseBasedPayment.display = true;
            paymentState.paymentBase.courseBasedPayment.visible = true;
          } else {
            paymentState.paymentBase.courseBasedPayment.visible = false;
            paymentState.paymentBase.courseBasedPayment.courses.splice(0);
          }
          // if checkbox is turned on add divisions to courseBasedPayment
        }
      });
      // console.log(
      //   current(state).paymentState[0].paymentBase.courseBasedPayment
      // );
    },

    updateAdvancedPaymentBaseDepartmentCourseTypeCheckboxSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.courseBasedPayment.basedOnDivision =
            action.payload.value;
        }
      });
    },
    updateAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.courseBasedPayment.basedOnSubDivision =
            action.payload.value;
        }
      });
    },

    deleteCoursesForAdvancedPaymentBase: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentIndex) {
          paymentState.paymentBase.courseBasedPayment.divisions.map(
            (division) => {
              if (division.id === action.payload.divisionIndex) {
                division.educationalSubDivision.map((subDivision) => {
                  if (subDivision.id === action.payload.subDivisionIndex) {
                    subDivision.subPeriods.map((subPeriod) => {
                      if (subPeriod.id === action.payload.subPeriodIndex) {
                        subPeriod.courses = subPeriod.courses.filter(
                          (course) => course.Id !== action.payload.courseIndex
                        );
                      }
                    });
                  }
                });
              }
            }
          );
        }
      });

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentIndex) {
          paymentState.paymentBase.courseBasedPayment.divisions.map(
            (division) => {
              if (division.id === action.payload.divisionIndex) {
                division.educationalSubDivision.map((subDivision) => {
                  if (subDivision.id === action.payload.subDivisionIndex) {
                    subDivision.subPeriods.map((subPeriod) => {
                      if (subPeriod.id === action.payload.subPeriodIndex) {
                        subPeriod.courses.map((course) => {
                          if (course.Id > action.payload.courseIndex) {
                            course.Id -= 1;
                          }
                        });
                      }
                    });
                  }
                });
              }
            }
          );
        }
      });
    },

    updateAdvancePaymentBaseCourseNames: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.index) {
          paymentState.paymentBase.courseBasedPayment.divisions.map(
            (division) => {
              if (division.id === action.payload.divisionIndex) {
                division.educationalSubDivision.map((subDivision) => {
                  if (subDivision.id === action.payload.subDivisionIndex) {
                    subDivision.subPeriods.map((subPeriod) => {
                      if (subPeriod.id === action.payload.subPeriodIndex) {
                        subPeriod.courses.map((course) => {
                          if (course.Id === action.payload.courseIndex) {
                            if (action.payload.name === "courseName")
                              course.courseName = action.payload.value;
                            else course.creditHours = action.payload.value;
                          }
                        });
                      }
                    });
                  }
                });
              }
            }
          );
        }
      });
    },

    upadateShowHideCourses: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.index) {
          paymentState.paymentBase.courseBasedPayment.divisions.map(
            (division) => {
              if (division.id === action.payload.divisionIndex) {
                division.educationalSubDivision.map((subDivision) => {
                  if (subDivision.id === action.payload.subDivisionIndex) {
                    subDivision.subPeriods.map((subPeriod) => {
                      if (subPeriod.id === action.payload.subPeriodIndex) {
                        subPeriod.visible = action.payload.value;
                      }
                    });
                  }
                });
              }
            }
          );
        }
      });
    },

    // ended here
    updateAdvancedPaymentBaseEducationalDivisionTypeRadioSelection: (
      state,
      action
    ) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.standardEducationalDivisionType =
            action.payload.divisionType;
        }
      });
    },

    updateAdvancedPaymentBaseShiftsCheckboxSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.standardShiftsCheckbox =
            action.payload.value;
        }
      });
    },
    // actions for hide or show
    updatePayementBaseHideOrShow: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentIndex) {
          paymentState.paymentBase.value = action.payload.value;
        }
      });
    },
    updatePayementDiscountHideOrShow: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentIndex) {
          paymentState.discountParameters.value = action.payload.value;
        }
      });
    },

    // ACTIONS FOR PAYMENT BASE
    updatePaymentBase: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          // Check particular payment base type
          if (
            action.payload.paymentBaseType ===
            "periodPaymentBase" + action.payload.paymentId
          ) {
            paymentState.paymentBase.periodPaymentBase.value =
              action.payload.selectedValue;
          } else if (
            action.payload.paymentBaseType ===
            "gradeLevelPaymentBase" + action.payload.paymentId
          ) {
            paymentState.paymentBase.gradeLevelPaymentBase.value =
              action.payload.selectedValue;
          } else if (
            action.payload.paymentBaseType ===
            "creditHoursPaymentBase" + action.payload.paymentId
          ) {
            paymentState.paymentBase.creditHoursPaymentBase.value =
              action.payload.selectedValue;
          } else if (
            action.payload.paymentBaseType ===
            "courseTypePaymentBase" + action.payload.paymentId
          ) {
            paymentState.paymentBase.courseTypePaymentBase.value =
              action.payload.selectedValue;
          }
        }
      });
    },

    createCustomPaymentBase: (state, action) => {
      state.paymentState.map((payments) => {
        if (payments.Id === action.payload.paymentIndex) {
          payments.paymentBase.customPaymentBase.paymentBases.push(
            action.payload.paymentBase
          );
        }
      });
    },
    updateCustomPaymentBase: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.customPaymentBase.paymentBases.map(
            (customBase) => {
              if (customBase.Id === action.payload.customPaymentBaseId) {
                customBase.customPaymentBaseName = action.payload.value;
              }
            }
          );
        }
      });
    },

    deleteCustomPaymentBase: (state, action) => {
      state.paymentState.map((payment) => {
        if (payment.Id === action.payload.paymentIndex) {
          payment.paymentBase.customPaymentBase.paymentBases =
            payment.paymentBase.customPaymentBase.paymentBases.filter(
              (customPaymentBase) =>
                customPaymentBase.Id !== action.payload.baseIndex
            );
        }
      });
      state.paymentState.map((payment) => {
        if (payment.Id === action.payload.paymentIndex) {
          payment.paymentBase.customPaymentBase.paymentBases.map((base) => {
            if (base.Id > action.payload.baseIndex) {
              base.Id -= 1;
            }
          });
        }
      });
    },

    // END OF PYAMENT BASE ACTIONS

    updateSelectionForGenderDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.genderBasedDiscount.value =
            action.payload.selectedValue;
          if (!action.payload.selectedValue) {
            // reset defalult gender selection of gender based discounts to default (female)
            paymentState.discountParameters.genderBasedDiscount.genderType =
              "female";
          } else
            paymentState.discountParameters.genderBasedDiscount.genderType =
              paymentState.discountParameters.genderBasedDiscount.genderType +
              action.payload.paymentId;
        }
      });
    },

    updateSelectionForSpecialneedDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.value =
            action.payload.selectedValue;

          // add a single specialneed type to specialneed lists
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.push(
            action.payload.specialNeeds
          );
          // if special needs are checked off, clear previously defined values
          if (!action.payload.selectedValue) {
            paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.splice(
              0
            );
          }
        }
      });
    },
    updateSelectionForScholarshipDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.value =
            action.payload.selectedValue;
          console.log(
            current(paymentState).discountParameters.scholarshipBasedDiscount
          );
          // add a single scolarship type to scholarship lists
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships.push(
            action.payload.scholarships
          );
          // if scholarshps are checked off, clear previously defined values
          if (!action.payload.selectedValue) {
            paymentState.discountParameters.scholarshipBasedDiscount.scholarships.splice(
              0
            );
          }
        }
      });
    },

    updateGenderTypesRadioButtonSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.genderBasedDiscount.genderType =
            action.payload.genderName;
        }
      });
    },

    createSpecialNeedDiscount: (state, action) => {
      console.log(action.payload.specialNeeds);
      state.paymentState.map((payment) => {
        if (payment.Id === action.payload.paymentId) {
          payment.discountParameters.specialNeedsBasedDiscount.specialNeeds.push(
            action.payload.specialNeeds
          );
        }
      });
    },

    createScholarshipDiscount: (state, action) => {
      state.paymentState.map((payment) => {
        if (payment.Id === action.payload.paymentId) {
          payment.discountParameters.scholarshipBasedDiscount.scholarships.push(
            action.payload.scholarships
          );
        }
      });
    },

    createCustomDiscount: (state, action) => {
      state.paymentState.map((payment) => {
        if (payment.Id === action.payload.paymentId) {
          payment.discountParameters.customPaymentDiscount.customDiscounts.push(
            action.payload.discounts
          );
          if (
            payment.discountParameters.customPaymentDiscount.customDiscounts
              .length > 0
          ) {
            payment.discountParameters.customPaymentDiscount.value = true;
          }
        }
      });
    },

    updateEligibleGradesforDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.genderBasedDiscount.gradesEligibleForDiscount.slice(
            0
          );
          paymentState.discountParameters.genderBasedDiscount.gradesEligibleForDiscount.push(
            action.payload.eligibelGrade
          );
        }
      });
    },

    updateEligibleSpecialneedsforDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          console.log(
            current(paymentState).discountParameters.specialNeedsBasedDiscount
              .specialNeeds
          );
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
            (specialNeed) => {
              specialNeed.gradesEligibleForDiscount.push(
                action.payload.eligibelGrade
              );
            }
          );
        }
      });
    },
    updateEligibleScholarshipsforDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
            (scholarship) => {
              scholarship.gradesEligibleForDiscount.push(
                action.payload.eligibelGrade
              );
            }
          );
        }
      });
    },
    updateEligibleGradesforCustomDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (customs) => {
              customs.gradesEligibleForDiscount.push(
                action.payload.eligibelGrade
              );
            }
          );
        }
      });
    },

    updateGradeBasedDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          // toogle checkbox value for discount base
          paymentState.discountParameters.isGradeBasedDiscountType =
            action.payload.value;
          //  if discount base checkbox is turned off clear eligible grade list from discount types to avoid duplication while toogle
          // clear for gender discounts
          if (
            paymentState.discountParameters.genderBasedDiscount
              .gradesEligibleForDiscount.length > 0
          ) {
            paymentState.discountParameters.genderBasedDiscount.gradesEligibleForDiscount =
              paymentState.discountParameters.genderBasedDiscount.gradesEligibleForDiscount.filter(
                (val) => val.Id === -1
              );
          }
          // clear for specialneed discounts
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
            (specialNeed) => {
              if (specialNeed.gradesEligibleForDiscount.length > 0) {
                specialNeed.gradesEligibleForDiscount =
                  specialNeed.gradesEligibleForDiscount.filter(
                    (grades) => grades.Id === -1
                  );
              }
            }
          );

          // clear for scholarship discounts
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
            (scholarship) => {
              if (scholarship.gradesEligibleForDiscount.length > 0) {
                scholarship.gradesEligibleForDiscount =
                  scholarship.gradesEligibleForDiscount.filter(
                    (grades) => grades.Id === -1
                  );
              }
            }
          );
          // clear for custom discounts
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (customs) => {
              if (customs.gradesEligibleForDiscount.length > 0) {
                customs.gradesEligibleForDiscount =
                  customs.gradesEligibleForDiscount.filter(
                    (grades) => grades.Id === -1
                  );
              }
            }
          );
          // TODO ALSO APPLY FOR CUSTOM DISCOUNTS
        }
      });
    },

    setValuesForGradeBasedGenderDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.genderBasedDiscount.gradesEligibleForDiscount.map(
            (grade) => {
              if (grade.Id === action.payload.eligibelGradeId) {
                if (action.payload.unitType === "grade-based-gender-amount") {
                  grade.amount = action.payload.value;
                } else {
                  grade.percentage = action.payload.value;
                }
              }
            }
          );
        }
      });
    },

    setValuesForGradeBasedSpecialneedDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
            (specialneed) => {
              if (specialneed.Id === action.payload.specialNeedId) {
                specialneed.gradesEligibleForDiscount.map((grade) => {
                  if (grade.Id === action.payload.eligibelGradeId) {
                    if (
                      action.payload.unitType ===
                      "grade-based-specialneed-amount"
                    ) {
                      grade.amount = action.payload.value;
                    } else {
                      grade.percentage = action.payload.value;
                    }
                  }
                });
              }
            }
          );
        }
      });
    },

    setValuesForGradeBasedScholarshipDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
            (scholarship) => {
              if (scholarship.Id === action.payload.scholarshipId) {
                scholarship.gradesEligibleForDiscount.map((grade) => {
                  if (grade.Id === action.payload.eligibelGradeId) {
                    if (
                      action.payload.unitType ===
                      "grade-based-scholarship-amount"
                    ) {
                      grade.amount = action.payload.value;
                    } else {
                      grade.percentage = action.payload.value;
                    }
                  }
                });
              }
            }
          );
        }
      });
    },

    setValuesForGradeBasedCustomDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (custom) => {
              if (custom.Id === action.payload.customId) {
                custom.gradesEligibleForDiscount.map((grade) => {
                  if (grade.Id === action.payload.eligibelGradeId) {
                    if (
                      action.payload.unitType === "grade-based-custom-amount"
                    ) {
                      grade.amount = action.payload.value;
                    } else {
                      grade.percentage = action.payload.value;
                    }
                    console.log(current(grade));
                  }
                });
              }
            }
          );
        }
      });
    },

    updateGenderDiscountsValue: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          if (action.payload.discountType === "gender-by-percent") {
            paymentState.discountParameters.genderBasedDiscount.percentage =
              action.payload.value;
          } else if (action.payload.discountType === "gender-by-amount") {
            paymentState.discountParameters.genderBasedDiscount.amount =
              action.payload.value;
          }
        }
      });
    },

    updateSpecialneedDiscountName: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
            (specialNeeds) => {
              if (specialNeeds.Id === action.payload.specialNeedId) {
                specialNeeds.specialNeedName = action.payload.value;
              }
            }
          );
        }
      });
    },
    updateSpecialNeedDiscountValue: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          if (
            paymentState.discountParameters.specialNeedsBasedDiscount
              .specialNeeds.length === 0
          ) {
            if (action.payload.discountType === "specialneed-by-percent") {
              console.log(
                (current(
                  paymentState
                ).discountParameters.specialNeedsBasedDiscount.percentage =
                  action.payload.value)
              );
              paymentState.discountParameters.specialNeedsBasedDiscount.percentage =
                action.payload.value;
              console.log(
                (current(
                  paymentState
                ).discountParameters.specialNeedsBasedDiscount.percentage =
                  action.payload.value)
              );
            } else {
              paymentState.discountParameters.specialNeedsBasedDiscount.amount =
                action.payload.value;
            }
          } else {
            paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
              (specialNeeds) => {
                if (specialNeeds.Id === action.payload.specialNeedId) {
                  if (
                    action.payload.discountType === "specialneed-by-percent"
                  ) {
                    specialNeeds.percentage = action.payload.value;
                  } else if (
                    action.payload.discountType === "specialneed-by-amount"
                  ) {
                    specialNeeds.amount = action.payload.value;
                  }
                }
              }
            );
          }
        }
      });
    },

    updateScholarshipDiscountValue: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          if (
            paymentState.discountParameters.scholarshipBasedDiscount
              .scholarships.length === 0
          ) {
            if (action.payload.discountType === "scholarship-by-percent") {
              paymentState.discountParameters.scholarshipBasedDiscount.percentage =
                action.payload.value;
            } else {
              paymentState.discountParameters.scholarshipBasedDiscount.amount =
                action.payload.value;
            }
          } else {
            paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
              (scholarships) => {
                if (scholarships.Id === action.payload.scholarshipId) {
                  if (
                    action.payload.discountType === "scholarship-by-percent"
                  ) {
                    scholarships.percentage = action.payload.value;
                  } else if (
                    action.payload.discountType === "scholarship-by-amount"
                  ) {
                    scholarships.amount = action.payload.value;
                  }
                }
              }
            );
          }
        }
      });
    },

    updateScholarshipDiscountName: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
            (scholarships) => {
              if (scholarships.Id === action.payload.scholarshipId) {
                scholarships.scholarshipName = action.payload.scholarshipName;
              }
            }
          );
        }
      });
    },

    updateCustomDiscountName: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (customDiscount) => {
              if (customDiscount.Id === action.payload.discountIndex) {
                customDiscount.discountName = action.payload.discountName;
                if (action.payload.discountUnit === "custom-by-percent") {
                  customDiscount.discountPercentage = action.payload.value;
                }
                if (action.payload.discountUnit === "custom-by-amount") {
                  customDiscount.discountAmount = action.payload.value;
                }
              }
            }
          );
        }
      });
    },
    updateCustomDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (customDiscount) => {
              if (customDiscount.Id === action.payload.discountIndex) {
                if (action.payload.discountUnit === "custom-by-percent") {
                  customDiscount.discountPercentage = action.payload.value;
                }
                if (action.payload.discountUnit === "custom-by-amount") {
                  customDiscount.discountAmount = action.payload.value;
                }
              }
            }
          );
        }
      });
    },

    updateDiscountValues: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          //  COME HERE
          console.log("come here: " + action.payload.discountType);
          if (action.payload.discountType === "gender-by-percent") {
            paymentState.discountParameters.genderBasedDiscount.percentage =
              action.payload.value;
          } else if (
            action.payload.discountType === "grade-based-gender-discounts"
          ) {
            paymentState.discountParameters.genderBasedDiscount.amount =
              action.payload.value;
          } else if (action.payload.discountType === "specialneed-discounts") {
            console.log("2");
            paymentState.discountParameters.specialNeedsBasedDiscount.amount =
              action.payload.value;
          } else if (action.payload.discountType === "scholarship-discounts") {
            console.log("3");
            paymentState.discountParameters.scholarshipBasedDiscount.amount =
              action.payload.value;
          } else if (action.payload.discountType === "custom-discounts") {
            console.log("4");
            paymentState.discountParameters.customPaymentDiscount.amount =
              action.payload.value;
          }
        }
      });
    },

    deleteSpecialNeedDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds =
            paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.filter(
              (specialNeeds) => specialNeeds.Id !== action.payload.specialNeedId
            );
        }
      });

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
            (specialNeed) => {
              if (specialNeed.Id > action.payload.specialNeedId) {
                specialNeed.Id -= 1;
              }
            }
          );
        }
      });

      // if there are no special needs turn off the checkbox
      state.paymentState.map((paymentState) => {
        if (
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds
            .length === 0
        )
          paymentState.discountParameters.specialNeedsBasedDiscount.value =
            !paymentState.discountParameters.specialNeedsBasedDiscount.value;
      });
    },

    deleteScholarshipDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships =
            paymentState.discountParameters.scholarshipBasedDiscount.scholarships.filter(
              (scholarships) => scholarships.Id !== action.payload.scholarshipId
            );
        }
      });

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
            (scholarship) => {
              if (scholarship.Id > action.payload.scholarshipId) {
                scholarship.Id -= 1;
              }
            }
          );
        }
      });
      // if there are no special needs turn off the checkbox
      state.paymentState.map((paymentState) => {
        if (
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships
            .length === 0
        )
          paymentState.discountParameters.scholarshipBasedDiscount.value =
            !paymentState.discountParameters.scholarshipBasedDiscount.value;
      });
    },

    deleteCustomDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts =
            paymentState.discountParameters.customPaymentDiscount.customDiscounts.filter(
              (customDiscounts) =>
                customDiscounts.Id !== action.payload.customDiscountIndex
            );
          if (
            paymentState.discountParameters.customPaymentDiscount
              .customDiscounts.length === 0
          ) {
            paymentState.discountParameters.customPaymentDiscount.value = false;
          }
        }
      });

      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (customDiscounts) => {
              if (customDiscounts.Id > action.payload.customDiscountIndex) {
                customDiscounts.Id -= 1;
              }
            }
          );
        }
      });
    },

    deleteEligibleGradeforGenderDiscounts: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.genderBasedDiscount.gradesEligibleForDiscount =
            paymentState.discountParameters.genderBasedDiscount.gradesEligibleForDiscount.filter(
              (grades) => grades.Id !== action.payload.eligibelGradeId
            );
        }
      });
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.genderBasedDiscount.gradesEligibleForDiscount.map(
            (grade) => {
              if (grade.Id > action.payload.eligibelGradeId) {
                grade.Id -= 1;
              }
            }
          );
        }
      });
    },

    deleteEligibleGradeforSpecialneedDiscounts: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
            (specialneed) => {
              if (specialneed.Id === action.payload.specialNeedId) {
                specialneed.gradesEligibleForDiscount =
                  specialneed.gradesEligibleForDiscount.filter(
                    (grade) => grade.Id !== action.payload.eligibelGradeId
                  );
              }
            }
          );
        }
      });
      //   state.paymentState.map((paymentState) => {
      //     if (paymentState.Id === action.payload.paymentId) {
      //       paymentState.discountParameters.scholarshipBasedDiscount.specialNeeds.map(
      //         (specialneed) => {
      //           if (specialneed.Id === action.payload.specialNeedId) {
      //             specialneed.gradesEligibleForDiscount.map((grade) => {
      //               if (grade.Id > action.payload.eligibelGradeId) {
      //                 grade.Id -= 1;
      //               }
      //             });
      //           }
      //         }
      //       );
      //     }
      //   });
    },

    deleteEligibleGradeforScholarshipDiscounts: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
            (scholarship) => {
              if (scholarship.Id === action.payload.scholarshipId) {
                scholarship.gradesEligibleForDiscount =
                  scholarship.gradesEligibleForDiscount.filter(
                    (grade) => grade.Id !== action.payload.eligibelGradeId
                  );
              }
            }
          );
        }
      });
      // state.paymentState.map((paymentState) => {
      //   if (paymentState.Id === action.payload.paymentId) {
      //     paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
      //       (scholarship) => {
      //         if (scholarship.Id === action.payload.scholarshipId) {
      //           scholarship.gradesEligibleForDiscount.map((grade) => {
      //             if (grade.Id > action.payload.eligibelGradeId) {
      //               grade.Id -= 1;
      //             }
      //           });
      //         }
      //       }
      //     );
      //   }
      // });
    },

    deleteEligibleGradeforCustomDiscounts: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (customs) => {
              if (customs.Id === action.payload.customId) {
                customs.gradesEligibleForDiscount =
                  customs.gradesEligibleForDiscount.filter(
                    (grade) => grade.Id !== action.payload.eligibelGradeId
                  );
              }
            }
          );
        }
      });
      // state.paymentState.map((paymentState) => {
      //   if (paymentState.Id === action.payload.paymentId) {
      //     paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
      //       (customs) => {
      //         if (customs.Id === action.payload.customId) {
      //           customs.gradesEligibleForDiscount.map((grade) => {
      //             if (grade.Id > action.payload.eligibelGradeId) {
      //               grade.Id -= 1;
      //             }
      //           });
      //         }
      //       }
      //     );
      //   }
      // });
    },

    updatePaymentTerm: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentTerm.paymentTermType =
            action.payload.paymentTermType;
        }
      });
    },
    updatePaymentBaseTypeSelection: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentBase.paymentBaseType =
            action.payload.paymentBaseType;
        }
        // check if standard payment base is selected and push periods and divisions to payment base
        if (
          paymentState.paymentBase.paymentBaseType ===
          "standard" + action.payload.paymentId
        ) {
          // update divisions and periods for standard payment base of that particular payment type
          if (
            paymentState.paymentBase.standardPaymentBase.divisions.length === 0
          )
            paymentState.paymentBase.standardPaymentBase.divisions =
              action.payload.divisions;
          if (paymentState.paymentBase.standardPaymentBase.periods.length === 0)
            paymentState.paymentBase.standardPaymentBase.periods =
              action.payload.periods;
          // console.log("standard pb updated: ");
          // console.log(
          //   current(paymentState).paymentBase.standardPaymentBase.periods
          // );
          // console.log(
          //   current(paymentState).paymentBase.standardPaymentBase.divisions
          // );

          // clear divisions and periods from advanced payment base of that particular payment type
          paymentState.paymentBase.advancedPaymentBase.divisions.splice(0);
          paymentState.paymentBase.advancedPaymentBase.periods.splice(0);
          // console.log("after splicing  advanced");
          // console.log(
          //   current(paymentState).paymentBase.advancedPaymentBase.periods
          // );
          // console.log(
          //   current(paymentState).paymentBase.advancedPaymentBase.divisions
          // );
        } else if (
          paymentState.paymentBase.paymentBaseType ===
          "advanced" + action.payload.paymentId
        ) {
          // update divisions and periods for standard payment base of that particular payment type
          if (
            paymentState.paymentBase.advancedPaymentBase.divisions.length === 0
          )
            paymentState.paymentBase.advancedPaymentBase.divisions =
              action.payload.divisions;
          if (paymentState.paymentBase.advancedPaymentBase.periods.length === 0)
            paymentState.paymentBase.advancedPaymentBase.periods =
              action.payload.periods;
          // console.log("advanced pb updated: ");
          // console.log(
          //   current(paymentState).paymentBase.advancedPaymentBase.periods
          // );
          // console.log(
          //   current(paymentState).paymentBase.advancedPaymentBase.divisions
          // );
          // clear divisions and periods from advanced payment base of that particular payment type
          // console.log("after splicing advanced pb updated: ");
          paymentState.paymentBase.standardPaymentBase.divisions.splice(0);
          paymentState.paymentBase.standardPaymentBase.periods.splice(0);
          // console.log("after splicing  advanced");
          // console.log(
          //   current(paymentState).paymentBase.standardPaymentBase.periods
          // );
          // console.log(
          //   current(paymentState).paymentBase.standardPaymentBase.divisions
          // );
        }
      });
    },

    updatePaymentDiscountUnit: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.discountUnit =
            action.payload.unitType;
        }
      });
    },
    // END OF CRUD OPERATINS FOR PAYMENT DICOUNT PARAMETERS
    updatePaymentTerms: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          if (action.payload.paymentToUpdate === "paymentTerm") {
            // Check payment discount type to update
            if (
              action.payload.paymentDiscountType ===
              "genderBasedPaymentDiscount"
            ) {
              paymentState.discountParameters.genderBasedDiscount.value =
                action.payload.selectedValue;
            }
          }
        }
      });
    },

    // Updating payment term statues
    // Deleting states

    resetPaymentStates: (state) => {
      state.paymentState = state.paymentState.filter(
        (paymentBase) => paymentBase.Id === 0
      );
      state.paymentState.map((payment) => {
        payment.periodChecked = true;
        payment.gradeLevelChecked = true;
        payment.genderChecked = false;
        payment.specialNeedChecked = false;
        payment.scholarshipChecked = false;
        payment.standardPaymentTermSelected = true;
        payment.advancedPaymentTermSelected = false;
      });
    },
  },
});

export const {
  updateSelectionForGenderDiscount,
  updateSelectionForSpecialneedDiscount,
  updateSelectionForScholarshipDiscount,
  createCustomPaymentBase,
  updatePaymentType,
  updateCustomPaymentType,
  deleteCustomPaymentType,
  updatePayementBaseHideOrShow,
  updatePayementDiscountHideOrShow,
  // handling values for payment base
  // For standard
  updateStandardPaymentBaseAnnualPeriodCheckboxSelection,
  updateStandardPaymentBaseAnnualPeriodTypeRadioSelection,
  updateStandardPaymentBaseEducationalDivisionCheckboxSelection,
  updateStandardPaymentBaseEducationalDivisionTypeRadioSelection,
  updateStandardPaymentBaseShiftsCheckboxSelection,
  updateStandardPaymentDueDatesCheckboxSelection,
  updateStandardPaymentPenalityCheckboxSelection,
  // For advanced
  updateAdvancedPaymentBaseAnnualPeriodCheckboxSelection,
  updateAdvancedPaymentBaseAnnualPeriodTypeRadioSelection,
  updateAdvancedPaymentBaseEducationalDivisionCheckboxSelection,
  updateAdvancedPaymentBaseMajorEducationalDivisionCheckboxSelection,
  updateAdvancedPaymentBaseEducationalSubDivisionCheckboxSelection,
  updateAdvancedPaymentBaseCourseUnitsCheckboxSelection,
  updateAdvancedPaymentBaseCourseUnitsTypeRadioSelection,
  updateAdvancedPaymentBaseCourseTypeCheckboxSelection,
  updateAdvancedPaymentBaseDepartmentCourseTypeCheckboxSelection,
  updateAdvancedPaymentBaseCourseBySubDivisionCheckboxSelection,
  createNewCoursesForAdvancedPaymentBase,
  deleteCoursesForAdvancedPaymentBase,
  updateAdvancePaymentBaseCourseNames,
  upadateShowHideCourses,
  addCoursesToPaymentBases,
  updateAdvancedCourseBasedPaymentVisibility,
  addDivisionsToPaymentBasedCourses,
  updatePeriodsForCourseBasedPayments,
  applyPreviousCourseRules,
  addShiftsToDivisionsAndTheirSubDivisions,

  updateAdvancedPaymentBaseEducationalDivisionTypeRadioSelection,
  updateAdvancedPaymentBaseShiftsCheckboxSelection,
  //  //  payment base sofar
  updatePaymentBase,
  updateCustomPaymentBase,
  setValuesForGradeBasedGenderDiscount,
  setValuesForGradeBasedSpecialneedDiscount,
  setValuesForGradeBasedScholarshipDiscount,
  setValuesForGradeBasedCustomDiscount,
  updateCustomDiscount,
  updatePaymentTerm,
  updateGenderTypesRadioButtonSelection,
  deleteCustomPaymentBase,
  resetPaymentStates,
  createPayments,
  deletePayments,
  createSpecialNeedDiscount,
  updateEligibleSpecialneedsforDiscount,
  updateEligibleScholarshipsforDiscount,
  createScholarshipDiscount,
  createCustomDiscount,
  updateSpecialneedDiscountName,
  deleteEligibleGradeforGenderDiscounts,
  deleteEligibleGradeforSpecialneedDiscounts,
  deleteEligibleGradeforScholarshipDiscounts,
  deleteEligibleGradeforCustomDiscounts,
  updateGradeBasedDiscount,
  updatePaymentBaseTypeSelection,
  updateEligibleGradesforDiscount,
  updateEligibleGradesforCustomDiscount,
  updateGenderDiscountsValue,
  updateScholarshipDiscountValue,
  updateScholarshipDiscountName,
  updateSpecialNeedDiscountValue,
  updateCustomDiscountName,
  updateDiscountValues,
  deleteSpecialNeedDiscount,
  deleteScholarshipDiscount,
  deleteCustomDiscount,
  updatePaymentDiscountUnit,

  // handling courses for annual period based not division based payments bases
  createMajorAnnualPeriodNotDivisionCourseAndCrhr,
  updateMajorAnnualPeriodNotDivisionCourse,
  deleteMajorAnnualPeriodNotDivisionCourseAndCrhr,
  updateShowHideCoursesForMajorAnnualPeriodAndNotDivisions,
  updateShowHideCoursesForSubAnnualPeriodAndNotDivisions,
  // handling actions for divisions
  createNewCourseForSubDivisionBasedNotAnnualPeriodBasedPayments,
  deleteRemoveCoursesForDivisonButNotAnnualPeriodBasedPayments,
  updateSubDivsionBasedNnotPeriodBasedValues,
  updateShowHideCoursesForSubDivisionNotAnnualPeriod,
  createCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments,
  deleteCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments,
  updateCoursesForMajorAnnualPeriodAndMajorAndSubDivisionPayments,
  updatehideShowCoursesForMajorAnnualPeriodAndMajorDivisionPayments,
  //  for sub periods and both major and sub divisions
  updateValueForSubAnnualPeriodAndMajorDivisonPaymentBase,
  createCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments,
  deleteCoursesForSubAnnualPeriodAndMajorAndSubDivisionPayments,
  updateHideShowCoursesForSubAnnualPeriodAndMajorDivisionPayments,
  // for major annual-divisions and not sub-divisions
  updateValueForMajorPeriodMajorDivisionNotSubDivisionCourses,
  // for course onlybased payment
  updateCourseOnlyBasedPaymentsValues,
  createCoursesToCourseOnlyBasedPaymentBases,
  updateShowHideCoursesForCourseOnlyBasedBases,
  deleteCoursesToCourseOnlyBasedPaymentBases,

  updateSubAnnualPeriodNotDivisionCourse,
  deleteSubAnnualPeriodNotDivisionCourseAndCrhr,
  createSubAnnualPeriodNotDivisionCourseAndCrhr,
  // for payment types depending on payment bases
  updatePaymentTypesForPaymentBase,
  updateDueDates,
  initializeValueForPeiordDueDates,
  initializeValueForSubPeriodDueDates,
} = paymentSlice.actions;

export default paymentSlice.reducer;
