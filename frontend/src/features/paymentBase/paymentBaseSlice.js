import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  paymentState: [
    {
      id: 0,
      paymentType: {
        paymentName: "",
        paymentAmount: 0,
      },
      paymentBase: {
        periodPaymentBase: {
          value: true,
          periods: [
            {
              id: 0,
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
              id: 0,
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
              id: 0,
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
      // payment discount parameters
      discountParameters: {
        id: 0,
        genderBasedDiscount: {
          value: false,
          genderType: "Female",
          male: false,
          female: true,
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
        id: 0,
        paymentAmount: 0,
      },

      periodChecked: true,
      gradeLevelChecked: true,
      genderChecked: false,
      specialNeedChecked: false,
      scholarshipChecked: false,
      paymentToUpdate: null,
      paymentTypeToUpdate: "Tutorial Fee",
      // paymentTerm: "Standard",
      standardPaymentTermSelected: true,
      advancedPaymentTermSelected: false,
    },
  ],
};

export const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    // Creating states
    createPayments: (state, action) => {
      state.paymentState.push(action.payload);
    },

    createPaymentBase: (state, action) => {
      state.paymentState.map((payments) => {
        if (payments.id === action.payload.paymentIndex) {
          payments.paymentBase.customPaymentBase.paymentBases.push(
            action.payload.paymentBase
          );
        }
      });
    },

    createPaymentDiscount: (state, action) => {
      state.paymentState.push(action.payload);
    },

    // CRUD OPERATINS FOR PAYMENT DICOUNT PARAMETERS
    // HEY GIT
    createSpecialNeedDiscount: (state, action) => {
      state.paymentState.map((payment) => {
        if (payment.id === action.payload.paymentId) {
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
        if (payment.id === action.payload.paymentId) {
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
        if (payment.id === action.payload.paymentId) {
          payment.discountParameters.customPaymentDiscount.customDiscounts.push(
            action.payload.discounts
          );
        }
        console.log(
          current(
            payment.discountParameters.customPaymentDiscount.customDiscounts
          )
        );
      });
    },

    updateSpecialNeedDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
            (specialNeeds) => {
              if (specialNeeds.id === action.payload.specialNeedId) {
                specialNeeds.specialNeedName = action.payload.value;
              }
            }
          );
        }
      });
    },

    updateScholarshipDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
            (scholarships) => {
              if (scholarships.id === action.payload.scholarshipId) {
                scholarships.scholarshipName = action.payload.scholarshipName;
              }
            }
          );
        }
      });
    },

    updateCustomDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (customDiscount) => {
              console.log("pid: " + action.payload.discountIndex);
              if (customDiscount.id === action.payload.discountIndex) {
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
        if (paymentState.id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds =
            paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.filter(
              (specialNeeds) => specialNeeds.id !== action.payload.specialNeedId
            );
        }
      });

      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.discountParameters.specialNeedsBasedDiscount.specialNeeds.map(
            (specialNeed) => {
              console.log("state sp id: " + specialNeed.id);
              console.log("special need id: " + action.payload.specialNeedId);
              if (specialNeed.id > action.payload.specialNeedId) {
                specialNeed.id -= 1;
              }
            }
          );
        }
      });
    },

    deleteScholarshipDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships =
            paymentState.discountParameters.scholarshipBasedDiscount.scholarships.filter(
              (scholarships) => scholarships.id !== action.payload.scholarshipId
            );
        }
      });

      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.discountParameters.scholarshipBasedDiscount.scholarships.map(
            (scholarship) => {
              if (scholarship.id > action.payload.scholarshipId) {
                scholarship.id -= 1;
              }
            }
          );
        }
      });
    },

    deleteCustomDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts =
            paymentState.discountParameters.customPaymentDiscount.customDiscounts.filter(
              (customDiscounts) =>
                customDiscounts.id !== action.payload.customDiscountIndex
            );
        }
      });

      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.discountParameters.customPaymentDiscount.customDiscounts.map(
            (customDiscounts) => {
              if (customDiscounts.id > action.payload.customDiscountIndex) {
                customDiscounts.id -= 1;
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
    updatePaymentType: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.paymentType.paymentName = action.payload.paymentName;
        }
      });
    },

    updatePaymentBase: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          // Check particular payment base type
          if (action.payload.paymentBaseType === "periodPaymentBase") {
            paymentState.paymentBase.periodPaymentBase.value =
              action.payload.selectedValue;
          } else if (
            action.payload.paymentBaseType === "gradeLevelPaymentBase"
          ) {
            paymentState.paymentBase.gradeLevelPaymentBase.value =
              action.payload.selectedValue;
          } else if (
            action.payload.paymentBaseType === "creditHoursPaymentBase"
          ) {
            paymentState.paymentBase.creditHoursPaymentBase.value =
              action.payload.selectedValue;
          } else if (
            action.payload.paymentBaseType === "courseTypePaymentBase"
          ) {
            paymentState.paymentBase.courseTypePaymentBase.value =
              action.payload.selectedValue;
          }
        }
      });
    },

    updateCustomPaymentBase: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          paymentState.paymentBase.customPaymentBase.paymentBases.map(
            (customBase) => {
              if (customBase.id === action.payload.customPaymentBaseId) {
                customBase.customPaymentBaseName = action.payload.value;
                // customBase.customProperties.push = action.payload.customProperties
              }
            }
          );
        }
      });
    },

    updatePaymentDiscount: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          // Check payment discount type to update
          if (action.payload.paymentDiscountType === "genderBasedDiscount") {
            if (action.payload.genderType === "default") {
              paymentState.discountParameters.genderBasedDiscount.value =
                action.payload.selectedValue;
            } else if (action.payload.genderType === "Male") {
              paymentState.discountParameters.genderBasedDiscount.genderType =
                "Male";
            } else if (action.payload.genderType === "Female") {
              paymentState.discountParameters.genderBasedDiscount.genderType =
                "Female";
            }
          } else if (
            action.payload.paymentDiscountType === "specialNeedsBasedDiscount"
          ) {
            paymentState.discountParameters.specialNeedsBasedDiscount.value =
              action.payload.selectedValue;
          } else if (
            action.payload.paymentDiscountType === "scholarshipBasedDiscount"
          ) {
            paymentState.discountParameters.scholarshipBasedDiscount.value =
              action.payload.selectedValue;
          }
        }
      });
    },

    updatePaymentTerm: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
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
    deletePayments: (state, action) => {
      state.paymentState = state.paymentState.filter(
        (payment) => payment.id !== action.payload.paymentId
      );
      state.paymentState.map((payment) => {
        if (payment.id > action.payload.paymentId) {
          payment.id -= 1;
        }
      });
    },

    deletePaymentBase: (state, action) => {
      state.paymentState.map((payment) => {
        if (payment.id === action.payload.paymentIndex) {
          console.log(
            current(payment).paymentBase.customPaymentBase.paymentBases
          );
          payment.paymentBase.customPaymentBase.paymentBases =
            payment.paymentBase.customPaymentBase.paymentBases.filter(
              (customPaymentBase) =>
                customPaymentBase.id !== action.payload.baseIndex
            );
          console.log(
            current(payment).paymentBase.customPaymentBase.paymentBases
          );
        }
      });
      state.paymentState.map((payment) => {
        if (payment.id === action.payload.paymentIndex) {
          payment.paymentBase.customPaymentBase.paymentBases.map((base) => {
            if (base.id > action.payload.baseIndex) {
              base.id -= 1;
            }
          });
        }
      });
    },

    resetPaymentStates: (state) => {
      state.paymentState = state.paymentState.filter(
        (paymentBase) => paymentBase.id === 0
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
  createPaymentBase,
  updatePaymentType,
  updatePaymentBase,
  updateCustomPaymentBase,
  updatePaymentDiscount,
  updateCustomDiscount,
  updatePaymentTerm,
  deletePaymentBase,
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
