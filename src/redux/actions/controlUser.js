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
    },
    setUpdatingUserData(state,action){
      const newAPI = state.userDatabase.api.filter((item) => item.user_ID !== action.payload.saveUserID)
      state.userDatabase ={
        ...state.userDatabase,
        api:[action.payload.data,...newAPI]
        
      }
    }
  },
});

export const { setUserAPI,appendUserData,setBehindDeleteUserData,setUpdatingUserData } = state.actions;
export default state.reducer;
