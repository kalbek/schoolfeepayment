import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  paymentState: [
    {
      id: 0,
      paymentType: [
        {
          id: 0,
          paymentName: "",
          paymentAmount: 0,
        },
      ],
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
      discountParameters: [
        {
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
      ],

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
    createPaymentBase: (state, action) => {
      state.paymentState.push(action.payload);
    },
    // Updating payment base states
    updatePayments: (state, action) => {
      state.paymentState.map((paymentState) => {
        console.log(current(paymentState).paymentBase);
        paymentState.paymentToUpdate = action.payload.paymentToUpdate;
        if (paymentState.id === action.payload.id) {
          if (action.payload.paymentToUpdate === "periodBasedPayment") {
            paymentState.periodChecked = action.payload.periodChecked;
          } else if (action.payload.paymentToUpdate === "gradeBasedPayment") {
            paymentState.gradeLevelChecked = action.payload.gradeLevelChecked;
          } else if (action.payload.paymentToUpdate === "genderBasedPayment") {
            paymentState.genderChecked = action.payload.genderChecked;
          } else if (
            action.payload.paymentToUpdate === "specialNeedBasedPayment"
          ) {
            paymentState.specialNeedChecked = action.payload.specialNeedChecked;
          } else if (
            action.payload.paymentToUpdate === "scholarshipBasedPayment"
          ) {
            paymentState.scholarshipChecked = action.payload.scholarshipChecked;
          } else if (
            action.payload.paymentToUpdate ===
            "schoolPaymentTerm" + action.payload.id
          ) {
            paymentState.standardPaymentTermSelected =
              action.payload.standardPaymentTermSelected;
            paymentState.advancedPaymentTermSelected =
              action.payload.advancedPaymentTermSelected;
          } else if (action.payload.paymentToUpdate === "paymentType") {
            paymentState.paymentTypeToUpdate =
              action.payload.paymentTypeToUpdate;
          }
        }
      });
    },

    // Updating payment term statues
    // Deleting states
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
} = paymentSlice.actions;

export default paymentSlice.reducer;
