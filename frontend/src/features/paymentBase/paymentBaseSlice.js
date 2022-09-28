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
          specialNeeds: [
            {
              id: 0,
              specialNeedType: "",
              discountRate: 0,
              paymentAmount: 0,
            },
          ],
        },
        scholarshipBasedDiscount: {
          value: false,
          scholarships: [
            {
              id: 0,
              scholarshipType: "",
              discountRate: 0,
              paymentAmount: 0,
            },
          ],
        },
        customPaymentDiscount: {
          value: false,
          customDiscounts: [
            {
              id: 0,
              customDiscountName: "",
              discountRate: 0,
              paymentAmount: 0,
            },
          ],
        },
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
      paymentTerm: "Standard",
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
      console.log(action.payload);
      // console.log(current(state).paymentState.paymentBase)
      state.paymentState.map((payments) => {
        if (payments.id === action.payload.paymentIndex) {
          console.log(action.payload.paymentBase);
          payments.paymentBase.customPaymentBase.paymentBases.push(
            action.payload.paymentBase
          );
        }
      });
      // state.paymentState.push(action.payload);
      console.log(current(state.paymentState));
    },
    createPaymentDiscount: (state, action) => {
      state.paymentState.push(action.payload);
    },

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
  updatePaymentTerm,
  deletePaymentBase,
  resetPaymentStates,
  createPayments,
  deletePayments,
} = paymentSlice.actions;

export default paymentSlice.reducer;
