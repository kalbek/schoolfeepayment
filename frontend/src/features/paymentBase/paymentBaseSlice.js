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
    createCustomPaymentType: (state, action) => {
      state.paymentState.map((paymentState) => {
        paymentState.push(action.payload.payment);
      });
    },
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

    // End of Updation of selection of payment discount types

    createSpecialNeedDiscount: (state, action) => {
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
      // console.log("eligible grades");
      // console.log( action.payload.eligibelGrade);
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
      // console.log("eligible specialneeds");
      // console.log(action.payload.eligibelGrade);
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.gradesEligibleForDiscount.push(
            action.payload.eligibelGrade
          );
        }
      });
    },
    updateEligibleScholarshipsforDiscount: (state, action) => {
      // console.log("eligible scholarships");
      // console.log(action.payload.eligibelGrade);
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.gradesEligibleForDiscount.push(
            action.payload.eligibelGrade
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
          if (
            // clear for specialneed discounts
            paymentState.discountParameters.specialNeedsBasedDiscount
              .gradesEligibleForDiscount.length > 0
          ) {
            paymentState.discountParameters.specialNeedsBasedDiscount.gradesEligibleForDiscount =
              paymentState.discountParameters.specialNeedsBasedDiscount.gradesEligibleForDiscount.filter(
                (val) => val.Id === -1
              );
          }
          // clear for scholarship discounts
          if (
            paymentState.discountParameters.scholarshipBasedDiscount
              .gradesEligibleForDiscount.length > 0
          ) {
            paymentState.discountParameters.scholarshipBasedDiscount.gradesEligibleForDiscount =
              paymentState.discountParameters.scholarshipBasedDiscount.gradesEligibleForDiscount.filter(
                (val) => val.Id === -1
              );
          }
          // clear for custom discounts
          // TODO ALSO APPLY FOR CUSTOM DISCOUNTS
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
              paymentState.discountParameters.specialNeedsBasedDiscount.percentage =
                action.payload.value;
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

    updatePaymentTerm: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentTerm.paymentTermType =
            action.payload.paymentTermType;
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
  updatePaymentBase,
  updateCustomPaymentBase,

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
  updateGradeBasedDiscount,
  updateEligibleGradesforDiscount,
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
