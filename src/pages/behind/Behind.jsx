import React , {useState} from "react";
import NotLoginPage from "../../components/NotLoginPage";
import CompanyBehind from "../../components/behindEditData/CompanyBehind";
import UserBehind from "../../components/behindEditData/UserBehind";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Space } from "antd";
import "./behind.scss";

export default function Behind() {
  const [isCompany,setIsCompany] = useState(true)
  const userName = useSelector((state) => state.loginVerify.nowLoginUser);
  return (
    <>
      {!window.sessionStorage.getItem("login_success") ? (
        <NotLoginPage />
      ) : (
        <>
          <div className="behind-navbar-header">
            <div className="navbar-list ">
              <div className="navbar-logo">
                <Link className="logo-text" to="/">
                  <span>求職網使用者後台-管理頁面</span>
                </Link>
              </div>
              <div className="behind-user-name">{userName.name}</div>
            </div>
          </div>
          <div className="behind-left">
            <Space  align="center" wrap  direction="vertical" style={{ width: '100%' }}>
              <Button type="primary" onClick={()=> setIsCompany(true)}>公司刊登管理頁面</Button>
              <Button type="primary" onClick={()=> setIsCompany(false)}>普通用戶管理頁面</Button>
            </Space>
          </div>
          { isCompany ? <CompanyBehind /> : <UserBehind/>}
        </>
      )}
    </>
  );
}
