import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserData } from "../../API/fakeSQL";
export const loginVerify = createAsyncThunk("/login/loginVertify", async (user) => {
  const fakeSQL = await getAllUserData();
  return fakeSQL.data
  // const result = fakeSQL.data.
  
});

const initialState = {
  status: "無",
  success: false,
  failed: false,
  userData: {},
};

const store = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    setLogout(state) {
      state = { ...initialState };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginVerify.pending, (state) => {
        state.status = "等待中";
      })
      .addCase(loginVerify.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.status = "登入成功";
        state.success = true;
      })
      .addCase(loginVerify.rejected, (state) => {
        state.status = "登入失敗";
      });
  },
});

export const { setLogout } = store.actions;
export default store.reducer;
