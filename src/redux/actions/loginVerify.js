import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name:'測試帳號',
    username: "test",
    password: "123456",
    notMatch: null,
    login: false,
  },
};
const store = createSlice({
  name: "loginVerify",
  initialState,
  reducers: {
    setMatch(state, action) {
      const { usernameVal, passwordVal } = action.payload;
      if (
        usernameVal === state.user.username &&
        passwordVal.toString() === state.user.password
      ) {
        state.user = { ...initialState.user, notMatch: true };
        return;
      } else {
        state.user = { ...initialState.user, notMatch: false };
        return;
      }
    },
    setLogin(state, action) {
      state.user = {
        ...initialState.user,
        login: action.payload,
        notMatch: action.payload,
      };
    },
    setLogout(state, action) {
      state.user = {
        ...initialState.user,
        login: action.payload,
        notMatch: null,
      };
    },
  },
});

export const { setMatch, setLogin, setLogout } = store.actions;

export default store.reducer;
