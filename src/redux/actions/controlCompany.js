import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyDatabase: {
    api: [],
    myPost: false,
  },
};

const state = createSlice({
  name: "companyDatabaseActions",
  initialState,
  reducers: {
    setCompanyAPI(state, action) {
      state.companyDatabase = { ...state.companyDatabase, api: action.payload };
    },
    appendCompanyData(state, action) {
      state.companyDatabase = {
        ...state.companyDatabase,
        api: [action.payload, ...state.companyDatabase.api],
      };
    },
    setBehindDeleteCompanyData(state,action) {
      const newAPI = state.companyDatabase.api.filter((item) => item.user_ID !== action.payload)
      state.companyDatabase = {
        ...state.companyDatabase,
        api: newAPI
      };
    }
  },
});

export const { setCompanyAPI, appendCompanyData,setBehindDeleteCompanyData } =
  state.actions;
export default state.reducer;
