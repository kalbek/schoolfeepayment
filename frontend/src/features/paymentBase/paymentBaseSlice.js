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
        customPaymentBase: [
          {
            id: 0,
            customPaymentBaseName: "",
            paymentAmount: 0,
          },
        ],
      },
      // payment discount parameters
      discountParameters: {
        id: 0,
        discountType: {
          genderBasedDiscount: {
            value: false,
            genders: [
              {
                id: 0,
                genderType: "",
                discountRate: 0,
                paymentAmount: 0,
              },
            ],
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
      state.paymentState.push(action.payload);
    },
    // Updating payment base states
    updatePayments: (state, action) => {
      state.paymentState.map((paymentState) => {
        if (paymentState.id === action.payload.paymentId) {
          // Update payment type
          if (action.payload.paymentToUpdate === "paymentType") {
            paymentState.paymentType.paymentName = action.payload.paymentName;
          }
          // Update payment base
          else if (action.payload.paymentToUpdate === "paymentBase") {
            // Check particular payment base type
            if (action.payload.paymentBaseType === "periodBasedPayment") {
              paymentState.paymentBase.periodPaymentBase.value =
                action.payload.selectedValue;
            } else if (action.payload.paymentBaseType === "gradeBasedPayment") {
              paymentState.paymentBase.gradeLevelPaymentBase.value =
                action.payload.selectedValue;
            } else if (
              action.payload.paymentBaseType === "creditHoursBasedPayment"
            ) {
              paymentState.paymentBase.creditHoursPaymentBase.value =
                action.payload.selectedValue;
            } else if (
              action.payload.paymentBaseType === "courseTypeBasedPayment"
            ) {
              paymentState.paymentBase.courseTypePaymentBase.value =
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
      state.paymentState = state.paymentState.filter(
        (paymentBase) => paymentBase.id !== action.payload.id
      );
      state.paymentState.map((payment) => {
        if (payment.id > action.payload.id) {
          payment.id -= 1;
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
  updatePayments,
  deletePaymentBase,
  resetPaymentStates,
  createPayments,
  deletePayments,
} = paymentSlice.actions;

export default paymentSlice.reducer;
