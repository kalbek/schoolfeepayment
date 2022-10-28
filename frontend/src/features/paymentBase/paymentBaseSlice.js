import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  paymentState: [
    {
      //  EVERY TYPES OF PAYMENTS EXISTING IN A SCHOOL !!
      Id: 0,
      paymentType: {
        isCustomPaymentType: false,
        paymentName: "Tuition Fee",
        customPaymentName: "",
        paymentAmount: 0,
        discountUnits: "amount0",
      },
      // PAYMENT BASES OR BASES IN WICH EACH PAYMENT DEPENDS ON !!
      paymentBase: {
        paymentBaseType: "standard0",
        standardAnnualPeriodCheckbox: true,
        standardAnnualPeriodType: "subperiod0",
        standardEducationalDivisionCheckbox: true,
        standardEducationalDivisionType: "subdivision0",
        standardShiftsCheckbox: false,
        advancedAnnualPeriodCheckbox: true,
        advancedAnnualPeriodType: "subperiod0",
        advancedEducationalDivisionCheckbox: true,
        advancedEducationalDivisionType: "subdivision0",
        advancedShiftsCheckbox: false,

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
        }
      });
    },

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
      console.log(action.payload.discounts);
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
  // handling values for payment base
  // For standard
  updateStandardPaymentBaseAnnualPeriodCheckboxSelection,
  updateStandardPaymentBaseAnnualPeriodTypeRadioSelection,
  updateStandardPaymentBaseEducationalDivisionCheckboxSelection,
  updateStandardPaymentBaseEducationalDivisionTypeRadioSelection,
  updateStandardPaymentBaseShiftsCheckboxSelection,
  // For advanced
  updateAdvancedPaymentBaseAnnualPeriodCheckboxSelection,
  updateAdvancedPaymentBaseAnnualPeriodTypeRadioSelection,
  updateAdvancedPaymentBaseEducationalDivisionCheckboxSelection,
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
} = paymentSlice.actions;

export default paymentSlice.reducer;
