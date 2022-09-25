import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import schoolReducer from "../features/schools/schoolSlice";
import studentReducer from "../features/students/studentSlice";
import counterReducer from "../features/steps/counterSlice";
import popupReducer from "../features/popups/popupSlice";
import paymentReducer from "../features/paymentBase/paymentBaseSlice";
import periodReducer from "../features/SchoolPeriods/annualPeriodSlice";
import educationalDivisionReducer from "../features/Grades&Divisions/grades&DivisionsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    schools: schoolReducer,
    students: studentReducer,
    educationalDivisions: educationalDivisionReducer,
    counter: counterReducer,
    popups: popupReducer,
    payments: paymentReducer,
    periods: periodReducer,
  },
});
