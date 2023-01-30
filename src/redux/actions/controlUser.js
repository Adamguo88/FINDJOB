import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDatabase: {
    api:[],
    myPost:false
  },
};

const state = createSlice({
  name: "userDatabaseActions",
  initialState,
  reducers: {
    setUserAPI(state, action) {
      state.userDatabase = { ...state.userDatabase, api: action.payload };
    },
    appendUserData(state, action) {
      state.userDatabase = {
        ...state.userDatabase,
        api: [action.payload, ...state.userDatabase.api],
      };
    },
    setBehindDeleteUserData(state,action) {
      const newAPI = state.userDatabase.api.filter((item) => item.user_ID !== action.payload)
      state.userDatabase = {
        ...state.userDatabase,
        api: newAPI
      };
    }
  },
});

export const { setUserAPI,appendUserData,setBehindDeleteUserData } = state.actions;
export default state.reducer;
