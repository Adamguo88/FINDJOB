import { configureStore } from "@reduxjs/toolkit";
import controlCompany from "../actions/controlCompany";
import controlUser from "../actions/controlUser";
import  loginVerify  from "../actions/loginVerify";
export const store = configureStore({
  reducer: {
    loginVerify,controlUser,controlCompany
  },
});
