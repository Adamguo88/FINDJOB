import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { setLogout,setBeforeLogout } from "../../redux/actions/loginVerify";
import "./header.scss";
import { Col, message, Row } from "antd";

export default function Header() {
  const { name } = useSelector((state) => state.loginVerify.nowLoginUser);
  const dispatch = useDispatch();

  const [logoutApi, contextLogout] = message.useMessage();

  const handleLogout = () => {
    success();
    dispatch(setBeforeLogout())
    setTimeout(() => {
      dispatch(setLogout());
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
        <div className="navbar-list">
          <div className="navbar-logo">
            <Link className="logo-text" to="/">
              <span>求職網</span>
            </Link>
          </div>
          <ul className="navbar-menu mobile-display-none">
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
            {window.sessionStorage.getItem("login_success") ? (
              <li className="list-li">
                <Link className="list-a" to="/admin/behind">
                  後台管理
                </Link>
              </li>
            ) : null}
            {window.sessionStorage.getItem("login_success") ? (
              <>
                <li className="list-li">
                  <span className="list-a list-loginUser ">{name}</span>
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
          <div className="mobile-login">
            {window.sessionStorage.getItem("login_success") ? (
              <div className="logout">
                {name}
                <Link
                  className="mobile-link-style"
                  to="/"
                  onClick={handleLogout}
                >
                  登出
                </Link>
              </div>
            ) : (
              <Link className="mobile-link-style" to="login">
                登入
              </Link>
            )}
          </div>
          {/* <div
            className="header-mobile-menu-btn"
            onClick={() => setMobileControl(!mobileControl)}
          >
            <CgMenuGridR />
          </div>
          <div
            className={
              mobileControl
                ? "header-navbar-menu mobile-block"
                : "header-navbar-menu mobile-none"
            }
          >
            <Row gutter={[16, 16]} justify="center" align="middle">
              <Col span={8}>
                <Link className="mobile-link-style" to="company">
                  公司刊登
                </Link>
              </Col>
              <Col span={8}>
                <Link className="mobile-link-style" to="user">
                  求職刊登
                </Link>
              </Col>
              <Col span={8}>
                {window.sessionStorage.getItem('login_success') ? (
                  <Col span={24}>
                    <Link
                      className="mobile-link-style"
                      to="/"
                      onClick={handleLogout}
                    >
                      登出
                    </Link>
                  </Col>
                ) : (
                  <Col span={24}>
                    <Link className="mobile-link-style" to="login">
                      登入
                    </Link>
                  </Col>
                )}
              </Col>
            </Row>
          </div> */}
        </div>
        <div className="navbar-list-mobile">
          <Row gutter={[24, 16]} justify="start " align="middle">
            <Col span={8}>
              <Link className="mobile-link-style" to="company">
                公司刊登
              </Link>
            </Col>
            <Col span={8}>
              <Link className="mobile-link-style" to="user">
                求職刊登
              </Link>
            </Col>
            {window.sessionStorage.getItem("login_success") ? (
              <Col span={8}>
                <Link className="mobile-link-style" to="/admin/behind">
                  後台管理
                </Link>
              </Col>
            ) : null}
          </Row>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
