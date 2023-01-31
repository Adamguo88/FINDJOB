import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userList_data: [
    {
      name: "使用者1",
      account_number: "test",
      password: "123456",
      login: "false",
      article:{
        company:['001','003'],
        user:['001','002']
      }
    },
    {
      name: "老闆測試",
      account_number: "boss",
      password: "boss123",
      login: "false",
      article:{
        company:['002','004'],
        user:['003']
      },
    },
  ],
  superUser: {
    name: "超級管理員",
    account_number: "admin",
    password: "admin",
    login: "false",
  },
  nowLoginUser: {},
};
const store = createSlice({
  name: "loginVerify",
  initialState,
  reducers: {
    setMatch(state, action) {
      const { usernameVal, passwordVal } = action.payload;
      const result = state.userList_data.find((item) => item.account_number === usernameVal);
      if (result === undefined) {
        window.sessionStorage.setItem("login_failed", "nothing");
        return;
      } else if (result) {
        
        if (usernameVal === result.account_number && passwordVal.toString() === result.password) {
          state.nowLoginUser = result;
          window.sessionStorage.setItem("login", result.name);
          return;
        } else {
          window.sessionStorage.setItem("login_failed", "failed");
          return;
        }
      }
    },
    setLogin() {
      window.sessionStorage.setItem("login_success", "success");
    },
    setBeforeLogout(state){
      const nowLoginUserSession = window.sessionStorage.getItem('login')
      const newUserList = state.userList_data.filter((user) => user.name !== nowLoginUserSession)
      state.userList_data = [...newUserList,{...state.nowLoginUser}]
    },
    setLogout(state) {
      window.sessionStorage.clear();
      state.nowLoginUser={}
    },
    setAppendCompany(state,action){
      state.nowLoginUser = {
        ...state.nowLoginUser,
        article:{...state.nowLoginUser.article,company:[action.payload,...state.nowLoginUser.article.company]}
      }
    },
    setAppendUser(state,action){
      state.nowLoginUser = {
        ...state.nowLoginUser,
        article:{...state.nowLoginUser.article,user:[action.payload,...state.nowLoginUser.article.user]}
      }
    },
    setDeleteCompanyArticle(state,action){
      const newArticle = state.nowLoginUser.article.company.filter((item) => item !== action.payload)
      state.nowLoginUser = {
        ...state.nowLoginUser,
        article:{...state.nowLoginUser.article,company:newArticle}
      }
    },
    setDeleteUserArticle(state,action){
      const newArticle = state.nowLoginUser.article.user.filter((item) => item !== action.payload)
      state.nowLoginUser = {
        ...state.nowLoginUser,
        article:{...state.nowLoginUser.article,user:newArticle}
      }
    }
  },
});

export const { setMatch, setLogin, setLogout,setBeforeLogout,setAppendCompany,setAppendUser,setDeleteCompanyArticle,setDeleteUserArticle } = store.actions;

export default store.reducer;
