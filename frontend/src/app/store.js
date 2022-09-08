import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import schoolReducer from "../features/schools/schoolSlice";
import studentReducer from "../features/students/studentSlice";
import counterReducer from "../features/steps/counterSlice";
import popupReducer from "../features/popups/popupSlice";
import paymentReducer from "../features/paymentBase/paymentBaseSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    schools: schoolReducer,
    students: studentReducer,
    counter: counterReducer,
    popups: popupReducer,
    payments: paymentReducer,
  },
});