import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { setLogout } from "../../redux/actions/loginVerify";
import "./header.scss";
import { message } from "antd";

export default function Header() {
  const { login, name } = useSelector((state) => state.loginVerify.user);
  const dispatch = useDispatch();

  const [logoutApi, contextLogout] = message.useMessage();

  const handleLogout = () => {
    success();
    setTimeout(() => {
      dispatch(setLogout(false));
    }, 1000);
  };
  const success = () => {
    logoutApi.open({
      type: "success",
      content: "登出成功，正在跳轉中",
    });
  };

  return (
    <>
      {contextLogout}
      <div className="navbar-header">
        <div className="navbar-list ">
          <div className="navbar-logo">
            <Link className="logo-text" to="/">
              <span>求職網</span>
            </Link>
          </div>
          <ul className="navbar-menu">
            <li className="list-li">
              <Link className="list-a" to="company">
                公司刊登
              </Link>
            </li>
            <li className="list-li">
              <Link className="list-a" to="user">
                求職刊登
              </Link>
            </li>
            {login ? (
              <li className="list-li">
                <Link className="list-a" to="/admin/behind">
                  後台管理
                </Link>
              </li>
            ) : null}
            {login ? (
              <>
                <li className="list-li">
                  <span className="list-a list-loginUser ">你好，{name}</span>
                </li>
                <li className="list-li">
                  <Link className="list-a" to="/" onClick={handleLogout}>
                    登出
                  </Link>
                </li>
              </>
            ) : (
              <li className="list-li">
                <Link className="list-a" to="login">
                  登入
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
