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
  },
});

export const { setUserAPI,appendUserData } = state.actions;
export default state.reducer;
