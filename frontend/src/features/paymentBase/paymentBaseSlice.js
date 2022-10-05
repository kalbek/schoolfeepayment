import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  paymentState: [
    {
      //  EVERY TYPES OF PAYMENTS EXISTING IN A SCHOOL !!
      Id: 0,
      paymentType: {
        isCustomPaymentType: false,
        paymentName: "Tuition Fee",
        paymentAmount: 0,
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
        genderBasedDiscount: {
          value: false,
          genderType: "female",
          discountFormale: false,
          discountForfemale: true,
          genders: {
            male: false,
            female: true,
          },
        },

        specialNeedsBasedDiscount: {
          value: false,
          specialNeeds: [],
        },
        scholarshipBasedDiscount: {
          value: false,
          scholarships: [],
        },
        customPaymentDiscount: {
          value: false,
          customDiscounts: [],
        },
      },
      paymentTerm: {
        standardPaymentTerm: true,
        advancedPaymenTerm: false,
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
        }
      });
    },

    updateCustomPaymentType: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.paymentType.paymentName = action.payload.paymentName;
        }
      });
      console.log("heys");
      console.log(current(state.paymentState));
    },

    deleteCustomPaymentType: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentIndex) {
          paymentState.paymentType.isCustomPaymentType = false;
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
    updateGenderBasedPaymentDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          if (action.payload.paymentDiscountType === "genderBasedDiscount") {
            paymentState.discountParameters.paymentDiscountType =
              action.payload.selectedValue;
          }
        }
      });
      console.log("hey: " + action.payload.Id + action.payload.paymentId);
    },
    // updateGenderBasedPaymentDiscount: (state, action) => {
    //   state.paymentState.map((paymentState) => {
    //     if (paymentState.Id === action.payload.paymentId) {
    //       paymentState.discountParameters.genderBasedDiscount.value =
    //         action.payload.selectedValue;
    //     }
    //   });
    //   console.log("hey: " + action.payload.Id + action.payload.paymentId);
    // },

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
                // customBase.customProperties.push = action.payload.customProperties
              }
            }
          );
        }
      });
    },

    deleteCustomPaymentBase: (state, action) => {
      state.paymentState.map((payment) => {
        if (payment.Id === action.payload.paymentIndex) {
          console.log(
            current(payment).paymentBase.customPaymentBase.paymentBases
          );
          payment.paymentBase.customPaymentBase.paymentBases =
            payment.paymentBase.customPaymentBase.paymentBases.filter(
              (customPaymentBase) =>
                customPaymentBase.Id !== action.payload.baseIndex
            );
          console.log(
            current(payment).paymentBase.customPaymentBase.paymentBases
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

    // ACTIONS FOR PAYMENT DISCOUNT
    updatePaymentDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          // Check payment discount type to update
          console.log(
            "action.payload.selectedValue" + action.payload.selectedValue
          );
          if (
            action.payload.paymentDiscountType ===
            "genderBasedDiscount" + action.payload.paymentId
          ) {
            paymentState.discountParameters.genderBasedDiscount.value =
              action.payload.selectedValue;
            if (!action.payload.selectedValue) {
              if (
                paymentState.discountParameters.genderBasedDiscount.genderType.charAt(
                  0
                ) === "f"
              ) {
                paymentState.discountParameters.genderBasedDiscount.genderType =
                  "female";
              } else if (
                paymentState.discountParameters.genderBasedDiscount.genderType.charAt(
                  0
                ) === "m"
              ) {
                paymentState.discountParameters.genderBasedDiscount.genderType =
                  "male";
              }
            } else
              paymentState.discountParameters.genderBasedDiscount.genderType =
                paymentState.discountParameters.genderBasedDiscount.genderType +
                action.payload.paymentId;
          } else if (
            action.payload.paymentDiscountType ===
            "specialNeedsBasedDiscount" + action.payload.paymentId
          ) {
            paymentState.discountParameters.specialNeedsBasedDiscount.value =
              action.payload.selectedValue;
          } else if (
            action.payload.paymentDiscountType ===
            "scholarshipBasedDiscount" + action.payload.paymentId
          ) {
            paymentState.discountParameters.scholarshipBasedDiscount.value =
              action.payload.selectedValue;
          }
        }
        console.log(
          current(paymentState.discountParameters.genderBasedDiscount)
        );
      });
    },
    // bring updateGenderBasedPaymentDiscount HERE

    updateGendersForPaymentDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          console.log(action.payload.genderName);
          paymentState.discountParameters.genderBasedDiscount.genderType =
            action.payload.genderName;
        }
        console.log(
          current(paymentState.discountParameters.genderBasedDiscount)
        );
      });
    },
    updateScholarshipBasedPaymentDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.value =
            action.payload.selectedValue;
        }
      });
    },
    updateSpecialNeedBasedPaymentDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.value =
            action.payload.selectedValue;
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
          console.log(
            current(
              payment.discountParameters.specialNeedsBasedDiscount.specialNeeds
            )
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
        console.log(
          current(
            payment.discountParameters.scholarshipBasedDiscount.scholarships
          )
        );
      });
    },

    createCustomDiscount: (state, action) => {
      state.paymentState.map((payment) => {
        if (payment.Id === action.payload.paymentId) {
          payment.discountParameters.customPaymentDiscount.customDiscounts.push(
            action.payload.discounts
          );
        }
      });
    },

    updateSpecialNeedDiscount: (state, action) => {
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

    updateScholarshipDiscount: (state, action) => {
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

    updateCustomDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.Id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (customDiscount) => {
              console.log("pId: " + action.payload.discountIndex);
              if (customDiscount.Id === action.payload.discountIndex) {
                customDiscount.discountName = action.payload.discountName;
                customDiscount.discountPercentage =
                  action.payload.discountPercentage;
              }
            }
          );
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
              console.log("state sp Id: " + specialNeed.Id);
              console.log("special need Id: " + action.payload.specialNeedId);
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

    updatePaymentTerms: (state, action) => {
      state.paymentState.map((paymentState) => {
        paymentState.paymentTerm.standardPaymentTerm =
          action.payload.standardPaymentTerm;
        paymentState.paymentTerm.advancedPaymenTerm =
          action.payload.advancedPaymenTerm;
      });
    },
    // END OF CRUD OPERATINS FOR PAYMENT DICOUNT PARAMETERS

    updatePaymentTerm: (state, action) => {
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
  createCustomPaymentBase,
  updatePaymentType,
  updateCustomPaymentType,
  deleteCustomPaymentType,
  updatePaymentBase,
  updateCustomPaymentBase,
  updateGenderBasedPaymentDiscount,
  updateScholarshipBasedPaymentDiscount,
  updateSpecialNeedBasedPaymentDiscount,
  updatePaymentDiscount,
  updateCustomDiscount,
  updatePaymentTerm,
  updateGendersForPaymentDiscount,
  deleteCustomPaymentBase,
  resetPaymentStates,
  createPayments,
  deletePayments,
  createSpecialNeedDiscount,
  createScholarshipDiscount,
  createCustomDiscount,
  updateSpecialNeedDiscount,
  updateScholarshipDiscount,
  deleteSpecialNeedDiscount,
  deleteScholarshipDiscount,
  deleteCustomDiscount,
} = paymentSlice.actions;

export default paymentSlice.reducer;
