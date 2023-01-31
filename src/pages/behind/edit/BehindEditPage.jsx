import React, { useState, useEffect } from "react";
import NotLoginPage from "../../../components/NotLoginPage";
import EditCompany from "./EditCompany";
import EditUser from "./EditUser";
import { Link, useLocation } from "react-router-dom";
import "./editPage.scss";
const BehindEditPage = () => {
  const [bool, setBool] = useState("");
  const location = useLocation().pathname;

  useEffect(() => {
    let isCompany = location.split("/")[3];
    if (isCompany === "company") {
      setBool(true);
    } else if (isCompany === "user") {
      setBool(false);
    }
  }, [location]);
  return (
    <>
      {!window.sessionStorage.getItem("login_success") ? (
        <NotLoginPage />
      ) : (
        <>
          <div className="behind-edit-page-header">
            <div className="navbar-list ">
              <div className="navbar-logo">
                <Link className="logo-text" to="/admin/behind">
                  <span>求職網使用者後台-管理頁面</span>
                </Link>
              </div>
              <div className="behind-user-name">
                {window.sessionStorage.getItem("login")}
              </div>
            </div>
          </div>
          <div className="behind-edit-page-main">
            {bool ? <EditCompany /> : <EditUser />}
          </div>
        </>
      )}
    </>
  );
};

export default BehindEditPage;
