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
  },
});

export const { setCompanyAPI, appendCompanyData } =
  state.actions;
export default state.reducer;
